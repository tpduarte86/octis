import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

interface CollectedHead {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType: 'website' | 'article';
  noindex: boolean;
  schemaJson?: object;
}

interface RenderModule {
  render: (url: string) => { html: string; head: CollectedHead | null };
  getStaticRoutes: () => string[];
}

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function applyHeadAndBody(
  template: string,
  routePath: string,
  appHtml: string,
  head: CollectedHead | null
): string {
  let html = template;

  if (head) {
    const safeTitle = escapeHtml(head.title);
    const safeTitleAttr = escapeAttr(head.title);
    const safeDescAttr = escapeAttr(head.description);
    const safeCanonicalAttr = escapeAttr(head.canonicalUrl);
    const robotsContent = head.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

    html = html.replace(
      /<meta\s+name="title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="title" content="${safeTitleAttr}" />`
    );

    html = html.replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${safeDescAttr}" />`
    );

    html = html.replace(
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="robots" content="${robotsContent}" />`
    );

    html = html.replace(
      /<link\s+rel="canonical"\s+id="canonical-url"\s+href="[\s\S]*?"\s*\/?>/i,
      `<link rel="canonical" id="canonical-url" href="${safeCanonicalAttr}" />`
    );

    html = html.replace(
      /<meta\s+property="og:type"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:type" content="${head.ogType}" />`
    );

    html = html.replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:url" content="${safeCanonicalAttr}" />`
    );

    html = html.replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitleAttr}" />`
    );

    html = html.replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:description" content="${safeDescAttr}" />`
    );

    html = html.replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitleAttr}" />`
    );

    html = html.replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDescAttr}" />`
    );

    if (head.schemaJson) {
      const safeJson = JSON.stringify(head.schemaJson).replace(/<\/script>/gi, '<\\/script>');
      const schemaTag = `<script id="octis-dynamic-schema" type="application/ld+json">${safeJson}</script>`;
      html = html.replace('</head>', `    ${schemaTag}\n  </head>`);
    }
  }

  // Inject pre-rendered React markup with route tag for safe hydration
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerender-path="${escapeAttr(routePath)}">${appHtml}</div>`
  );

  return html;
}

async function runPrerender() {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, 'dist');
  const ssrEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');
  const templatePath = path.resolve(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build template not found at ${templatePath}`);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`SSR bundle not found at ${ssrEntryPath}`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const mod = (await import(pathToFileURL(ssrEntryPath).href)) as RenderModule;

  const routes = mod.getStaticRoutes();

  for (const route of routes) {
    const { html: appHtml, head } = mod.render(route);
    const finalHtml = applyHeadAndBody(template, route, appHtml, head);

    const outPath =
      route === '/'
        ? path.join(distDir, 'index.html')
        : path.join(distDir, `${route.replace(/^\/+/, '')}.html`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, finalHtml, 'utf-8');
    console.log(`SSG prerendered: ${route} -> ${path.relative(rootDir, outPath)}`);
  }

  // Also pre-render a 404.html with noindex
  const { html: notFoundHtml, head: notFoundHead } = mod.render('/404-not-found');
  const final404Html = applyHeadAndBody(template, '/404-not-found', notFoundHtml, notFoundHead);
  fs.writeFileSync(path.join(distDir, '404.html'), final404Html, 'utf-8');
  console.log('SSG prerendered: /404 -> dist/404.html');
}

runPrerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
