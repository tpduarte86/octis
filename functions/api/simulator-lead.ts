interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  LEAD_TO_EMAIL?: string;
  WEB3FORMS_ACCESS_KEY?: string;
  LEAD_WEBHOOK_URL?: string;
}

interface SimulatorLeadPayload {
  subject: string;
  replyTo: string;
  lead: {
    name: string;
    company: string;
    email: string;
    phone: string;
  };
  fields: Record<string, string>;
}

const DEFAULT_TO_EMAIL = 'contato@octis.com.br';
const DEFAULT_FROM_EMAIL = 'Simulador Octis <onboarding@resend.dev>';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function buildHtmlEmail(payload: SimulatorLeadPayload): string {
  const rows = Object.entries(payload.fields)
    .filter(([key]) => !key.startsWith('_'))
    .map(
      ([key, val]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;font-weight:600;color:#0a1d37;width:38%;vertical-align:top;background:#f8fafc;">${escapeHtml(key)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#1f2937;vertical-align:top;">${escapeHtml(String(val))}</td>
        </tr>`
    )
    .join('');

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:680px;margin:0 auto;color:#111827;">
      <div style="background:#0a1d37;color:#ffffff;padding:22px 24px;">
        <div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#c59b27;font-weight:700;margin-bottom:6px;">Octis Real Estate • Lead do Simulador</div>
        <h2 style="margin:0;font-size:20px;font-weight:600;">${escapeHtml(payload.subject)}</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;font-size:14px;">
        <tbody>${rows}</tbody>
      </table>
      <p style="font-size:12px;color:#6b7280;margin-top:16px;">Enviado automaticamente pelo Simulador de Custos de Escritório (octis.com.br/simulador-escritorio).</p>
    </div>
  `;
}

function buildTextEmail(payload: SimulatorLeadPayload): string {
  const lines = Object.entries(payload.fields)
    .filter(([key]) => !key.startsWith('_'))
    .map(([key, val]) => `${key}: ${val}`);
  return [payload.subject, '', ...lines].join('\n');
}

export async function onRequestPost(context: { request: Request; env: Env }): Promise<Response> {
  const { request, env } = context;
  const corsHeaders = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
  };

  let payload: SimulatorLeadPayload;
  try {
    payload = (await request.json()) as SimulatorLeadPayload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'invalid_json' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  if (
    !payload?.lead?.email ||
    !payload?.lead?.name ||
    !payload?.lead?.company ||
    !payload?.lead?.phone
  ) {
    return new Response(JSON.stringify({ ok: false, error: 'missing_required_fields' }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const toEmail = env.LEAD_TO_EMAIL || DEFAULT_TO_EMAIL;
  const deliveredVia: string[] = [];

  // 1. Resend (recommended direct email delivery to Microsoft 365 / contato@octis.com.br)
  if (env.RESEND_API_KEY) {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
        to: [toEmail],
        reply_to: payload.replyTo || payload.lead.email,
        subject: payload.subject,
        html: buildHtmlEmail(payload),
        text: buildTextEmail(payload),
      }),
    });
    if (resendRes.ok) {
      deliveredVia.push('resend');
    }
  }

  // 2. Web3Forms server-side delivery (if WEB3FORMS_ACCESS_KEY is configured in Cloudflare)
  if (deliveredVia.length === 0 && env.WEB3FORMS_ACCESS_KEY) {
    const w3Res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_ACCESS_KEY,
        subject: payload.subject,
        from_name: `${payload.lead.name} (${payload.lead.company})`,
        replyto: payload.replyTo || payload.lead.email,
        ...payload.fields,
      }),
    });
    if (w3Res.ok) {
      const data = (await w3Res.json().catch(() => null)) as { success?: boolean } | null;
      if (data?.success) {
        deliveredVia.push('web3forms');
      }
    }
  }

  // 3. Optional server-side webhook (Make, Zapier, n8n, Formspree, Google Apps Script)
  if (env.LEAD_WEBHOOK_URL && env.LEAD_WEBHOOK_URL.startsWith('https://')) {
    const whRes = await fetch(env.LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (whRes.ok) {
      deliveredVia.push('webhook');
    }
  }

  if (deliveredVia.length === 0) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: 'no_mail_provider_configured',
      }),
      { status: 501, headers: corsHeaders }
    );
  }

  return new Response(JSON.stringify({ ok: true, deliveredVia }), {
    status: 200,
    headers: corsHeaders,
  });
}
