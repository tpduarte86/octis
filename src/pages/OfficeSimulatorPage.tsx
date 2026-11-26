import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  ChevronRight,
  Lock,
  Mail,
  MapPin,
  PhoneCall,
  Printer,
  RotateCcw,
  SlidersHorizontal,
  Users,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { buildingsData, type BuildingDetail } from '../data/buildingsData';
import {
  BUILDING_STANDARDS,
  DEFAULT_BOMA_EFFICIENCY_PCT,
  FITOUT_STANDARDS,
  MAX_BOMA_EFFICIENCY_PCT,
  MAX_HYBRID_PCT,
  MAX_PEOPLE,
  MAX_RENT_FREE_MONTHS,
  MIN_BOMA_EFFICIENCY_PCT,
  MIN_HYBRID_PCT,
  MIN_PEOPLE,
  OFFICE_STANDARDS,
  REGIONS_DATA,
  TCO_MONTHS,
  calculateOfficeSimulation,
  clamp,
  formatBRL,
  formatNumber,
  formatPhoneInput,
  getFitoutStandard,
  getOfficeStandard,
  getRegionById,
  isCorporateEmail,
  isValidEmailFormat,
  isValidMobilePhone,
  type BuildingStandardId,
  type FitoutStandardId,
  type LeadInfo,
  type MonthlyRates,
  type OfficeStandardId,
  type RegionId,
  type SimulationResult,
} from '../data/officeSimulatorData';

const LEAD_STORAGE_KEY = 'octis_office_simulator_lead_v3';
const FORMSUBMIT_AJAX_ENDPOINT = 'https://formsubmit.co/ajax/contato@octis.com.br';
const FORMSUBMIT_FORM_ENDPOINT = 'https://formsubmit.co/contato@octis.com.br';
const PEOPLE_PRESETS = [30, 80, 150, 300, 500];
const HYBRID_PRESETS = [60, 70, 80, 100];
const BOMA_EFFICIENCY_PRESETS = [65, 70, 75, 80, 100];

function submitViaHiddenIframe(fields: Record<string, string>) {
  if (typeof document === 'undefined') return;
  const iframeName = 'octis-formsubmit-frame';
  let iframe = document.querySelector<HTMLIFrameElement>(`iframe[name="${iframeName}"]`);
  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.title = 'Form submission target';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  }

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = FORMSUBMIT_FORM_ENDPOINT;
  form.target = iframeName;
  form.style.display = 'none';

  Object.entries(fields).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => {
    form.remove();
  }, 5000);
}

function buildSummaryText(params: {
  isPt: boolean;
  lead: LeadInfo;
  regionAName: string;
  buildingA: BuildingStandardId;
  officeLabel: string;
  fitoutLabel: string;
  resultA: SimulationResult;
  compareEnabled: boolean;
  regionBName?: string;
  buildingB?: BuildingStandardId;
  resultB?: SimulationResult | null;
}): string {
  const {
    isPt,
    lead,
    regionAName,
    buildingA,
    officeLabel,
    fitoutLabel,
    resultA,
    compareEnabled,
    regionBName,
    buildingB,
    resultB,
  } = params;
  const lang = isPt ? 'pt' : 'en';

  const lines = isPt
    ? [
        'Olá, equipe Octis Real Estate! Fiz uma simulação de custos de escritório em São Paulo:',
        '',
        `Nome: ${lead.name}`,
        `E-mail: ${lead.email}`,
        ...(lead.company ? [`Empresa: ${lead.company}`] : []),
        ...(lead.phone ? [`Telefone: ${lead.phone}`] : []),
        '',
        `Equipe: ${formatNumber(resultA.people, lang)} pessoas (${resultA.hybridOccupancyPct}% simultâneo = ${formatNumber(resultA.simultaneousSeats, lang)} posições)`,
        `Padrão do escritório: ${officeLabel} (${resultA.densityM2} m² carpete/posição)`,
        `Área de Carpete: ${formatNumber(resultA.carpetArea, lang)} m² | Área BOMA (${resultA.bomaEfficiencyPct}%): ${formatNumber(resultA.bomaArea, lang)} m²`,
        `Fit-out Turnkey (obra, mobiliário e TI): ${fitoutLabel} (${formatBRL(resultA.fitoutRatePerCarpetM2, lang)}/m² carpete) = ${formatBRL(resultA.fitoutCapex, lang)}`,
        `Carência de aluguel: ${resultA.rentFreeMonths} ${resultA.rentFreeMonths === 1 ? 'mês' : 'meses'}`,
        '',
        `Cenário A — ${regionAName} (Padrão ${buildingA}):`,
        `• Pacote mensal (Aluguel + Cond. + IPTU): ${formatBRL(resultA.monthlyPackage, lang)}/mês (${formatBRL(resultA.monthlyPackagePerBomaM2, lang)}/m² BOMA)`,
        `• TCO 5 anos (60 meses): ${formatBRL(resultA.tco60m, lang)}`,
        `• Custo mensal efetivo por pessoa: ${formatBRL(resultA.monthlyCostPerPerson, lang)}/mês`,
      ]
    : [
        'Hello Octis Real Estate team, I ran a São Paulo office cost simulation:',
        '',
        `Name: ${lead.name}`,
        `Email: ${lead.email}`,
        ...(lead.company ? [`Company: ${lead.company}`] : []),
        ...(lead.phone ? [`Phone: ${lead.phone}`] : []),
        '',
        `Team: ${formatNumber(resultA.people, lang)} people (${resultA.hybridOccupancyPct}% simultaneous = ${formatNumber(resultA.simultaneousSeats, lang)} seats)`,
        `Office standard: ${officeLabel} (${resultA.densityM2} sqm carpet/seat)`,
        `Carpet Area: ${formatNumber(resultA.carpetArea, lang)} sqm | BOMA Area (${resultA.bomaEfficiencyPct}%): ${formatNumber(resultA.bomaArea, lang)} sqm`,
        `Turnkey Fit-out (civil, furniture & IT): ${fitoutLabel} (${formatBRL(resultA.fitoutRatePerCarpetM2, lang)}/sqm carpet) = ${formatBRL(resultA.fitoutCapex, lang)}`,
        `Rent-free period: ${resultA.rentFreeMonths} months`,
        '',
        `Scenario A — ${regionAName} (Class ${buildingA}):`,
        `• Monthly package (Rent + Condo + IPTU): ${formatBRL(resultA.monthlyPackage, lang)}/mo (${formatBRL(resultA.monthlyPackagePerBomaM2, lang)}/sqm BOMA)`,
        `• 5-Year TCO (60 months): ${formatBRL(resultA.tco60m, lang)}`,
        `• Effective monthly cost per person: ${formatBRL(resultA.monthlyCostPerPerson, lang)}/mo`,
      ];

  if (compareEnabled && regionBName && buildingB && resultB) {
    lines.push(
      '',
      isPt
        ? `Cenário B — ${regionBName} (Padrão ${buildingB}):`
        : `Scenario B — ${regionBName} (Class ${buildingB}):`,
      isPt
        ? `• Pacote mensal: ${formatBRL(resultB.monthlyPackage, lang)}/mês (${formatBRL(resultB.monthlyPackagePerBomaM2, lang)}/m² BOMA)`
        : `• Monthly package: ${formatBRL(resultB.monthlyPackage, lang)}/mo (${formatBRL(resultB.monthlyPackagePerBomaM2, lang)}/sqm BOMA)`,
      isPt
        ? `• TCO 5 anos (60 meses): ${formatBRL(resultB.tco60m, lang)}`
        : `• 5-Year TCO (60 months): ${formatBRL(resultB.tco60m, lang)}`,
      isPt
        ? `• Custo mensal efetivo por pessoa: ${formatBRL(resultB.monthlyCostPerPerson, lang)}/mês`
        : `• Effective monthly cost per person: ${formatBRL(resultB.monthlyCostPerPerson, lang)}/mo`
    );
  }

  return lines.join('\n');
}

export function OfficeSimulatorPage() {
  const { language } = useLanguage();
  const isPt = language === 'pt';
  const lang = isPt ? 'pt' : 'en';

  // Core simulation state
  const [people, setPeople] = useState<number>(80);
  const [hybridPct, setHybridPct] = useState<number>(80);
  const [officeStandard, setOfficeStandard] = useState<OfficeStandardId>('intermediate');
  const [bomaEfficiencyPct, setBomaEfficiencyPct] = useState<number>(DEFAULT_BOMA_EFFICIENCY_PCT);
  const [regionId, setRegionId] = useState<RegionId>('faria-lima');
  const [buildingStandard, setBuildingStandard] = useState<BuildingStandardId>('A');
  const [fitoutStandard, setFitoutStandard] = useState<FitoutStandardId>('medium');
  const [rentFreeMonths, setRentFreeMonths] = useState<number>(3);

  // Optional custom rate overrides for Scenario A
  const [showCustomRates, setShowCustomRates] = useState<boolean>(false);
  const [customRates, setCustomRates] = useState<Partial<MonthlyRates>>({});

  // Optional Scenario B comparison
  const [compareEnabled, setCompareEnabled] = useState<boolean>(false);
  const [regionBId, setRegionBId] = useState<RegionId>('berrini');
  const [buildingBStandard, setBuildingBStandard] = useState<BuildingStandardId>('A');
  const [activeBuildingsTab, setActiveBuildingsTab] = useState<'A' | 'B'>('A');

  // Lead Gate state
  const [lead, setLead] = useState<LeadInfo | null>(null);
  const [leadName, setLeadName] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Restore unlocked lead session on client hydration
  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(LEAD_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as LeadInfo;
        if (
          parsed?.name &&
          parsed?.company &&
          parsed?.email &&
          parsed?.phone &&
          isCorporateEmail(parsed.email) &&
          isValidMobilePhone(parsed.phone)
        ) {
          setLead(parsed);
          setLeadName(parsed.name);
          setLeadCompany(parsed.company);
          setLeadEmail(parsed.email);
          setLeadPhone(parsed.phone);
        }
      }
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  }, []);

  const regionA = useMemo(() => getRegionById(regionId), [regionId]);
  const regionB = useMemo(() => getRegionById(regionBId), [regionBId]);
  const officeOption = useMemo(() => getOfficeStandard(officeStandard), [officeStandard]);
  const fitoutOption = useMemo(() => getFitoutStandard(fitoutStandard), [fitoutStandard]);

  const hasCustomRates =
    customRates.rent !== undefined ||
    customRates.condo !== undefined ||
    customRates.iptu !== undefined;

  const resultA = useMemo(
    () =>
      calculateOfficeSimulation({
        people,
        hybridOccupancyPct: hybridPct,
        officeStandard,
        bomaEfficiencyPct,
        buildingStandard,
        regionId,
        fitoutStandard,
        rentFreeMonths,
        customRates,
      }),
    [
      people,
      hybridPct,
      officeStandard,
      bomaEfficiencyPct,
      buildingStandard,
      regionId,
      fitoutStandard,
      rentFreeMonths,
      customRates,
    ]
  );

  const resultB = useMemo(() => {
    if (!compareEnabled) return null;
    return calculateOfficeSimulation({
      people,
      hybridOccupancyPct: hybridPct,
      officeStandard,
      bomaEfficiencyPct,
      buildingStandard: buildingBStandard,
      regionId: regionBId,
      fitoutStandard,
      rentFreeMonths,
    });
  }, [
    compareEnabled,
    people,
    hybridPct,
    officeStandard,
    bomaEfficiencyPct,
    buildingBStandard,
    regionBId,
    fitoutStandard,
    rentFreeMonths,
  ]);

  const handleSelectRegionA = (nextRegion: RegionId) => {
    setRegionId(nextRegion);
    setCustomRates({});
    if (nextRegion === regionBId) {
      const fallback = REGIONS_DATA.find((r) => r.id !== nextRegion);
      if (fallback) setRegionBId(fallback.id);
    }
  };

  const handleSelectBuildingA = (nextBuilding: BuildingStandardId) => {
    setBuildingStandard(nextBuilding);
    setCustomRates({});
  };

  const handleCustomRateChange = (field: keyof MonthlyRates, rawValue: string) => {
    if (rawValue.trim() === '') {
      setCustomRates((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      return;
    }
    const parsed = Number(rawValue);
    if (!Number.isFinite(parsed) || parsed < 0) return;
    setCustomRates((prev) => ({ ...prev, [field]: Math.min(2000, parsed) }));
  };

  const handleLeadUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = leadName.trim();
    const trimmedCompany = leadCompany.trim();
    const trimmedEmail = leadEmail.trim().toLowerCase();
    const trimmedPhone = leadPhone.trim();

    if (trimmedName.length < 2) {
      setFormError(
        isPt
          ? 'Informe seu nome completo para liberar o detalhamento.'
          : 'Please enter your full name to unlock the breakdown.'
      );
      return;
    }
    if (trimmedCompany.length < 2) {
      setFormError(
        isPt
          ? 'Informe o nome da sua empresa.'
          : 'Please enter your company name.'
      );
      return;
    }
    if (!isValidEmailFormat(trimmedEmail)) {
      setFormError(
        isPt
          ? 'Informe um endereço de e-mail válido.'
          : 'Please enter a valid email address.'
      );
      return;
    }
    if (!isCorporateEmail(trimmedEmail)) {
      setFormError(
        isPt
          ? 'Utilize um e-mail corporativo (ex.: nome@suaempresa.com.br). E-mails pessoais como Gmail, Hotmail ou Outlook não são aceitos.'
          : 'Please use a corporate email (e.g., name@company.com). Personal webmail domains are not accepted.'
      );
      return;
    }
    if (!isValidMobilePhone(trimmedPhone)) {
      setFormError(
        isPt
          ? 'Informe um número de celular válido com DDD (ex.: (11) 99999-9999).'
          : 'Please enter a valid mobile number with area code (e.g., (11) 99999-9999).'
      );
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    const unlockedLead: LeadInfo = {
      name: trimmedName,
      company: trimmedCompany,
      email: trimmedEmail,
      phone: trimmedPhone,
      unlockedAt: new Date().toISOString(),
    };

    const emailFields: Record<string, string> = {
      _subject: `[Simulador Escritório SP] ${trimmedCompany} — ${formatNumber(resultA.bomaArea, 'pt')} m² BOMA (${regionA.namePt})`,
      _replyto: trimmedEmail,
      _template: 'table',
      _captcha: 'false',
      _url: typeof window !== 'undefined' ? window.location.href : 'https://octis.com.br/simulador-escritorio',
      _honey: '',
      name: trimmedName,
      company: trimmedCompany,
      email: trimmedEmail,
      phone: trimmedPhone,
      'Equipe Total': `${formatNumber(resultA.people, 'pt')} pessoas`,
      'Regime Híbrido': `${resultA.hybridOccupancyPct}% simultâneo (${formatNumber(resultA.simultaneousSeats, 'pt')} posições)`,
      'Padrão do Escritório': `${officeOption.labelPt} (${resultA.densityM2} m² carpete/posição)`,
      'Área de Carpete': `${formatNumber(resultA.carpetArea, 'pt')} m²`,
      'Eficiência BOMA': `${resultA.bomaEfficiencyPct}%`,
      'Área BOMA': `${formatNumber(resultA.bomaArea, 'pt')} m²`,
      'Região Principal (A)': `${regionA.namePt} — Padrão ${buildingStandard}`,
      'Aluguel Mensal (A)': `${formatBRL(resultA.monthlyRent, 'pt')} (${formatBRL(resultA.rates.rent, 'pt')}/m²)`,
      'Condomínio Mensal (A)': `${formatBRL(resultA.monthlyCondo, 'pt')} (${formatBRL(resultA.rates.condo, 'pt')}/m²)`,
      'IPTU Mensal (A)': `${formatBRL(resultA.monthlyIptu, 'pt')} (${formatBRL(resultA.rates.iptu, 'pt')}/m²)`,
      'Pacote Mensal Total (A)': `${formatBRL(resultA.monthlyPackage, 'pt')}/mês (${formatBRL(resultA.monthlyPackagePerBomaM2, 'pt')}/m² BOMA)`,
      'CapEx Fit-out Turnkey': `${fitoutOption.labelPt} (${formatBRL(resultA.fitoutRatePerCarpetM2, 'pt')}/m² carpete) = ${formatBRL(resultA.fitoutCapex, 'pt')} (obra, mobiliário e TI)`,
      'Carência de Aluguel': `${resultA.rentFreeMonths} ${resultA.rentFreeMonths === 1 ? 'mês' : 'meses'} (economia de ${formatBRL(resultA.rentFreeSavings, 'pt')})`,
      'TCO 5 Anos — Cenário A': formatBRL(resultA.tco60m, 'pt'),
      'Custo Mensal Efetivo / Pessoa (A)': `${formatBRL(resultA.monthlyCostPerPerson, 'pt')}/mês`,
    };

    if (compareEnabled && resultB) {
      emailFields['Região Comparada (B)'] = `${regionB.namePt} — Padrão ${buildingBStandard}`;
      emailFields['Pacote Mensal Total (B)'] = `${formatBRL(resultB.monthlyPackage, 'pt')}/mês (${formatBRL(resultB.monthlyPackagePerBomaM2, 'pt')}/m² BOMA)`;
      emailFields['TCO 5 Anos — Cenário B'] = formatBRL(resultB.tco60m, 'pt');
      emailFields['Custo Mensal Efetivo / Pessoa (B)'] = `${formatBRL(resultB.monthlyCostPerPerson, 'pt')}/mês`;
    }

    // Use FormData (no Content-Type header) so it is a CORS simple request with zero OPTIONS preflight
    // and never abort it prematurely so slow SMTP responses from FormSubmit always complete.
    const formData = new FormData();
    Object.entries(emailFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const sendPromise = fetch(FORMSUBMIT_AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then(async (res) => {
        if (!res.ok) {
          submitViaHiddenIframe(emailFields);
        }
      })
      .catch(() => {
        // Fallback to native hidden HTML form POST if AJAX fetch is blocked
        submitViaHiddenIframe(emailFields);
      });

    // Optional extra webhook capture when VITE_LEAD_WEBHOOK_URL is configured
    const webhookUrl = (
      import.meta as unknown as { env?: Record<string, string | undefined> }
    ).env?.VITE_LEAD_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith('https://')) {
      const payload = {
        source: 'octis-office-cost-simulator',
        lead: unlockedLead,
        scenarioA: {
          region: regionA.namePt,
          buildingStandard,
          officeStandard,
          fitoutStandard,
          ...resultA,
        },
        scenarioB:
          compareEnabled && resultB
            ? {
                region: regionB.namePt,
                buildingStandard: buildingBStandard,
                ...resultB,
              }
            : null,
      };
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silent fallback so UX is never interrupted
      });
    }

    // Wait briefly for instant response without aborting sendPromise if FormSubmit takes longer
    await Promise.race([
      sendPromise,
      new Promise<void>((resolve) => window.setTimeout(resolve, 1200)),
    ]);

    try {
      window.sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify(unlockedLead));
    } catch {
      // Non-fatal
    }

    setLead(unlockedLead);
    setIsSubmitting(false);
  };

  const suggestedBuildings = useMemo(() => {
    const targetRegion = compareEnabled && activeBuildingsTab === 'B' ? regionB : regionA;
    const matched = targetRegion.suggestedBuildingSlugs
      .map((slug) => buildingsData.find((b) => b.slug === slug))
      .filter((b): b is BuildingDetail => Boolean(b));
    return matched;
  }, [regionA, regionB, compareEnabled, activeBuildingsTab]);

  const summaryText = useMemo(() => {
    if (!lead) return '';
    return buildSummaryText({
      isPt,
      lead,
      regionAName: isPt ? regionA.namePt : regionA.nameEn,
      buildingA: buildingStandard,
      officeLabel: isPt ? officeOption.labelPt : officeOption.labelEn,
      fitoutLabel: isPt ? fitoutOption.labelPt : fitoutOption.labelEn,
      resultA,
      compareEnabled,
      regionBName: isPt ? regionB.namePt : regionB.nameEn,
      buildingB: buildingBStandard,
      resultB,
    });
  }, [
    lead,
    isPt,
    regionA,
    buildingStandard,
    officeOption,
    fitoutOption,
    resultA,
    compareEnabled,
    regionB,
    buildingBStandard,
    resultB,
  ]);

  const whatsappUrl = useMemo(() => {
    if (!summaryText) return 'https://wa.me/5511995418189';
    return `https://wa.me/5511995418189?text=${encodeURIComponent(summaryText)}`;
  }, [summaryText]);

  const mailtoUrl = useMemo(() => {
    if (!summaryText) return 'mailto:contato@octis.com.br';
    const subject = isPt
      ? `Simulação de Escritório SP (${formatNumber(resultA.bomaArea, 'pt')} m² BOMA — ${regionA.namePt})`
      : `São Paulo Office Simulation (${formatNumber(resultA.bomaArea, 'en')} sqm BOMA — ${regionA.nameEn})`;
    return `mailto:contato@octis.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summaryText)}`;
  }, [summaryText, isPt, resultA.bomaArea, regionA]);

  // Comparison delta helpers
  const comparisonStats = useMemo(() => {
    if (!compareEnabled || !resultB) return null;
    const tcoDiff = resultA.tco60m - resultB.tco60m; // > 0 means B is cheaper
    const cheaper: 'A' | 'B' | 'tie' = tcoDiff > 0 ? 'B' : tcoDiff < 0 ? 'A' : 'tie';
    const absSavings = Math.abs(tcoDiff);
    const higherTco = Math.max(resultA.tco60m, resultB.tco60m);
    const savingsPct = higherTco > 0 ? (absSavings / higherTco) * 100 : 0;
    const monthlySavings = Math.abs(resultA.monthlyPackage - resultB.monthlyPackage);
    const perPersonDiff = Math.abs(resultA.monthlyCostPerPerson - resultB.monthlyCostPerPerson);
    return { cheaper, absSavings, savingsPct, monthlySavings, perPersonDiff, tcoDiff };
  }, [compareEnabled, resultA, resultB]);

  const faqs = isPt
    ? [
        {
          q: 'Quanto custa montar um escritório corporativo em São Paulo?',
          a: 'O custo para montar um escritório corporativo em São Paulo combina dois blocos: o CapEx inicial de implantação (reforma, instalações, mobiliário e TI, entre R$ 4.000/m² e R$ 7.000/m² sobre a área de carpete) e o pacote mensal de ocupação (aluguel, condomínio e IPTU sobre a área BOMA). Em um escritório intermediário para 100 pessoas (900 m² de carpete / ~1.286 m² BOMA), o fit-out médio gira em torno de R$ 4,95 milhões e o pacote mensal varia conforme a região escolhida.',
        },
        {
          q: 'Qual é o custo de reforma de escritório por m² (fit-out)?',
          a: 'O custo de reforma de escritório corporativo (fit-out turnkey) em São Paulo parte de R$ 4.000/m² no padrão simples, passa por R$ 5.500/m² no padrão médio (acústica reforçada, divisórias de vidro e mobiliário ergonômico) e chega a R$ 7.000/m² no alto padrão (marcenaria sob medida, automação e mobiliário nacional de padrão mais elevado), sempre calculado sobre a área útil de carpete.',
        },
        {
          q: 'Qual o valor do m² de laje corporativa na Faria Lima, Paulista e Berrini / Chucri Zaidan?',
          a: 'Como referência de mercado para aluguel de laje corporativa Padrão A em São Paulo (sem condomínio e IPTU), a Faria Lima trabalha em torno de R$ 215/m² BOMA (chegando a R$ 290/m² em torres AAA), o Itaim Bibi em R$ 185/m², Vila Olímpia em R$ 145/m², Avenida Paulista em R$ 135/m² e Berrini / Chucri Zaidan em R$ 115/m².',
        },
        {
          q: 'Por que a área BOMA é maior do que a área de carpete?',
          a: 'A área de carpete mede apenas o espaço útil interno onde entram estações, salas e circulação da equipe. A área BOMA soma uma fração proporcional das áreas comuns do andar (hall de elevadores, sanitários e shafts). O simulador parte de 70% de eficiência como padrão de mercado em São Paulo e permite ajustar esse percentual na barra de eficiência.',
        },
        {
          q: 'Como a carência de aluguel entra no cálculo do TCO de 5 anos?',
          a: 'Durante os meses de carência negociados para obra e mudança, a empresa fica isenta do aluguel base, mas continua pagando condomínio e IPTU normalmente. A calculadora abate apenas os meses de aluguel no acumulado de 60 meses.',
        },
        {
          q: 'Os preços por região são valores fechados de contrato?',
          a: 'São médias referenciais de mercado por m² BOMA em São Paulo para planejamento orçamentário. Cada prédio tem características próprias de eficiência de planta, vagas e negociação. Você pode ajustar os valores manualmente na calculadora ou pedir uma pesquisa real de fechamento à equipe da Octis.',
        },
      ]
    : [
        {
          q: 'How much does it cost to set up a corporate office in São Paulo?',
          a: 'Setting up a corporate office in São Paulo involves two main components: upfront turnkey fit-out CapEx (civil works, MEP, furniture, and IT, ranging from R$ 4,000/sqm to R$ 7,000/sqm on carpet area) and recurring monthly occupancy (rent, condo fees, and IPTU on BOMA area).',
        },
        {
          q: 'What is the average office fit-out and renovation cost per sqm?',
          a: 'Turnkey office fit-out benchmarks in São Paulo start at R$ 4,000/sqm (simple), R$ 5,500/sqm (mid-range with upgraded acoustics and glass partitions), and R$ 7,000/sqm (high-end with bespoke millwork and higher-grade domestic furniture), calculated on usable carpet area.',
        },
        {
          q: 'What is the average office rent per sqm in Faria Lima, Paulista, and Chucri Zaidan?',
          a: 'Indicative Class A asking rents per BOMA sqm sit around R$ 215/sqm in Faria Lima (up to R$ 290/sqm for Class AAA), R$ 185/sqm in Itaim Bibi, R$ 145/sqm in Vila Olímpia, R$ 135/sqm on Paulista Avenue, and R$ 115/sqm in Berrini / Chucri Zaidan.',
        },
        {
          q: 'Why is BOMA area larger than carpet (net usable) area?',
          a: 'Carpet area covers the exclusive workspace used for workstations, rooms, and internal circulation. BOMA area adds a proportional share of floor common areas such as elevator lobbies and restrooms. The simulator defaults to the 70% São Paulo market benchmark and lets you adjust the efficiency ratio.',
        },
        {
          q: 'How do rent-free months affect the 5-year TCO?',
          a: 'Rent-free periods negotiated for fit-out abate base rent for those months while service charges (condo) and property tax (IPTU) remain payable across all 60 months.',
        },
        {
          q: 'Are the submarket prices binding quotes?',
          a: 'They are indicative São Paulo market averages per BOMA sqm for executive budgeting. You can override rent, condo, and IPTU manually inside the tool or request closed-deal comps from Octis Real Estate.',
        },
      ];

  const schemaJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': 'https://octis.com.br/simulador-escritorio#app',
        name: isPt
          ? 'Calculadora de Custo de Escritório Corporativo em São Paulo'
          : 'São Paulo Corporate Office Cost Calculator',
        alternateName: isPt
          ? [
              'Simulador de Custos de Escritório SP',
              'Calculadora de Custo de Reforma de Escritório por m²',
              'Simulador de Aluguel de Laje Corporativa São Paulo',
            ]
          : ['São Paulo Office Cost Simulator', 'Corporate Office Fit-Out & TCO Calculator'],
        description: isPt
          ? 'Calculadora gratuita para estimar quanto custa montar um escritório corporativo em São Paulo: metragem de carpete e área BOMA, aluguel de laje corporativa na Faria Lima, Paulista e Berrini / Chucri Zaidan, custo de reforma por m² e TCO em 5 anos.'
          : 'Free calculator to estimate São Paulo corporate office setup costs: carpet and BOMA sizing, Class B/A/AAA floorplate rent across 7 districts, turnkey fit-out CapEx per sqm, and 5-year TCO.',
        url: 'https://octis.com.br/simulador-escritorio',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'All',
        inLanguage: isPt ? 'pt-BR' : 'en-US',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL',
        },
        provider: {
          '@id': 'https://octis.com.br/#organization',
        },
      },
      {
        '@type': 'HowTo',
        '@id': 'https://octis.com.br/simulador-escritorio#howto',
        name: isPt
          ? 'Como calcular quanto custa montar um escritório corporativo em São Paulo'
          : 'How to calculate corporate office setup and lease costs in São Paulo',
        description: isPt
          ? 'Passo a passo para dimensionar metragem, aluguel de laje corporativa, custo de reforma por m² e TCO em 5 anos.'
          : 'Step-by-step method to size floorplates, occupancy costs, turnkey fit-out CapEx, and 5-year TCO.',
        step: isPt
          ? [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Definir equipe e modelo híbrido',
                text: 'Informe o número total de colaboradores e o percentual de presença simultânea para calcular as posições de trabalho necessárias.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Escolher densidade e eficiência BOMA',
                text: 'Selecione o padrão do layout (7, 9 ou 11 m² de carpete por posição) e ajuste a eficiência BOMA da planta (padrão de 70%).',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Selecionar padrão do prédio e região de São Paulo',
                text: 'Compare valores de aluguel, condomínio e IPTU por m² BOMA em regiões como Faria Lima, Itaim Bibi, Vila Olímpia, Paulista e Berrini / Chucri Zaidan.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Orçar reforma por m² (CapEx) e TCO em 5 anos',
                text: 'Aplique o padrão de fit-out (R$ 4.000, R$ 5.500 ou R$ 7.000/m² sobre área de carpete) e meses de carência para apurar o custo total em 60 meses.',
              },
            ]
          : [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Set headcount and hybrid attendance',
                text: 'Enter total headcount and peak simultaneous attendance to establish required workstations.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Choose density and BOMA efficiency',
                text: 'Pick 7, 9, or 11 carpet sqm per seat and adjust the BOMA floorplate efficiency slider (70% default).',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Select building class and São Paulo submarket',
                text: 'Benchmark monthly rent, condo, and IPTU per BOMA sqm across Faria Lima, Paulista, Berrini / Chucri Zaidan, and four other submarkets.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'Estimate fit-out CapEx and 5-year TCO',
                text: 'Apply turnkey fit-out benchmarks (R$ 4,000, R$ 5,500, or R$ 7,000/sqm on carpet area) and rent-free months to model 60-month TCO.',
              },
            ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: isPt ? 'Início' : 'Home',
            item: 'https://octis.com.br/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: isPt ? 'Alugar Escritório em São Paulo' : 'Rent Office in São Paulo',
            item: 'https://octis.com.br/alugar-escritorio-sao-paulo',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: isPt
              ? 'Calculadora de Custo de Escritório Corporativo'
              : 'Corporate Office Cost Calculator',
            item: 'https://octis.com.br/simulador-escritorio',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt="Calculadora de Custo de Escritório SP (m² e Obra) | Octis"
        titleEn="São Paulo Office Cost Calculator (Rent & Fit-Out) | Octis"
        descriptionPt="Quanto custa montar um escritório corporativo em SP? Calcule valor do m² de laje na Faria Lima, Paulista e Chucri Zaidan, reforma por m² e TCO em 5 anos."
        descriptionEn="How much does a corporate office in São Paulo cost? Calculate BOMA rent per sqm in Faria Lima, Paulista & Chucri Zaidan, fit-out CapEx, and 5-year TCO."
        path="/simulador-escritorio"
        schemaJson={schemaJson}
      />

      {/* Compact Institutional Header */}
      <section className="py-10 md:py-14 bg-[#f8fafc] border-b border-gray-200 print:py-4 print:bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-gray-500 mb-5 uppercase tracking-wider flex-wrap print:hidden"
          >
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {isPt ? 'Início' : 'Home'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link
              to="/alugar-escritorio-sao-paulo"
              className="hover:text-[#0a1d37] transition-colors"
            >
              {isPt ? 'Alugar Escritório SP' : 'Rent Office SP'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold">
              {isPt ? 'Simulador de Custos' : 'Cost Simulator'}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-2.5">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isPt
                  ? 'Ferramenta Executiva • São Paulo'
                  : 'Executive Tool • São Paulo'}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-serif text-gray-900 leading-tight font-normal mb-3">
                {isPt ? (
                  <>
                    Simulador de Custos para{' '}
                    <span className="text-[#0a1d37] italic">Novo Escritório em São Paulo</span>
                  </>
                ) : (
                  <>
                    Corporate <span className="text-[#0a1d37] italic">Office Cost Simulator</span>{' '}
                    — São Paulo
                  </>
                )}
              </h1>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                {isPt
                  ? `Dimensione área de carpete e área BOMA (${resultA.bomaEfficiencyPct}%), estime o pacote mensal de ocupação, o CapEx turnkey de implantação (obra, mobiliário e TI) e o TCO em 5 anos comparando regiões de São Paulo.`
                  : `Size carpet and BOMA floorplates (${resultA.bomaEfficiencyPct}% efficiency), estimate monthly occupancy, turnkey fit-out CapEx (civil, furniture & IT), and 5-year TCO across São Paulo submarkets.`}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-xs text-gray-600 shrink-0 pb-1 print:hidden">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                  {isPt ? 'Eficiência' : 'Efficiency'}
                </span>
                <span className="font-semibold text-[#0a1d37] tabular-nums">
                  {isPt
                    ? `Carpete = ${resultA.bomaEfficiencyPct}% BOMA`
                    : `Carpet = ${resultA.bomaEfficiencyPct}% BOMA`}
                </span>
              </div>
              <div className="h-7 w-px bg-gray-300" />
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 font-semibold">
                  {isPt ? 'Horizonte TCO' : 'TCO Horizon'}
                </span>
                <span className="font-semibold text-[#0a1d37] tabular-nums">
                  {isPt ? '60 meses (5 anos)' : '60 months (5 years)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Simulator Workspace */}
      <section className="py-10 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Configuration Controls */}
            <div className="lg:col-span-7 space-y-10 print:hidden">
              {/* STEP 1: Team Size & Hybrid Model */}
              <div className="pb-9 border-b border-gray-200">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                      {isPt ? 'Etapa 01' : 'Step 01'}
                    </span>
                    <h2 className="text-2xl font-serif text-gray-900 font-normal">
                      {isPt ? 'Equipe e Regime de Trabalho' : 'Headcount & Hybrid Factor'}
                    </h2>
                  </div>
                  <Users className="w-5 h-5 text-[#0a1d37] shrink-0" />
                </div>

                {/* Headcount Input + Slider */}
                <div className="mb-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                    <label
                      htmlFor="sim-people-input"
                      className="text-sm font-medium text-gray-800"
                    >
                      {isPt ? 'Total de pessoas no escritório' : 'Total headcount'}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        id="sim-people-input"
                        type="number"
                        min={MIN_PEOPLE}
                        max={MAX_PEOPLE}
                        value={people}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          if (Number.isFinite(v)) setPeople(v);
                        }}
                        onBlur={() => setPeople((prev) => Math.round(clamp(prev, MIN_PEOPLE, MAX_PEOPLE)))}
                        className="w-24 px-3 py-1.5 text-right text-base font-semibold text-[#0a1d37] bg-[#f8fafc] border border-gray-300 focus:outline-none focus:border-[#0a1d37] focus:bg-white tabular-nums"
                      />
                      <span className="text-xs text-gray-500">
                        {isPt ? 'pessoas' : 'people'}
                      </span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={MIN_PEOPLE}
                    max={1000}
                    step={5}
                    value={Math.min(1000, people)}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    aria-label={isPt ? 'Número de pessoas' : 'Number of people'}
                    className="w-full h-1.5 bg-gray-200 accent-[#0a1d37] cursor-pointer"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
                    <div className="flex flex-wrap gap-1.5">
                      {PEOPLE_PRESETS.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setPeople(preset)}
                          className={`px-2.5 py-1 text-xs font-medium border transition-colors cursor-pointer tabular-nums ${
                            people === preset
                              ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] text-gray-500">
                      {isPt ? 'Digite até 2.000 pessoas no campo acima' : 'Type up to 2,000 in the input'}
                    </span>
                  </div>
                </div>

                {/* Hybrid Factor */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                    <div>
                      <label
                        htmlFor="sim-hybrid-range"
                        className="text-sm font-medium text-gray-800 block"
                      >
                        {isPt
                          ? 'Fator de trabalho híbrido (% presencial simultânea)'
                          : 'Hybrid occupancy factor (% simultaneous on-site)'}
                      </label>
                      <span className="text-xs text-gray-500 font-light">
                        {isPt
                          ? `${formatNumber(resultA.simultaneousSeats, lang)} posições simultâneas para ${formatNumber(resultA.people, lang)} colaboradores`
                          : `${formatNumber(resultA.simultaneousSeats, lang)} simultaneous seats for ${formatNumber(resultA.people, lang)} employees`}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-[#0a1d37] tabular-nums">
                      {hybridPct}%
                    </span>
                  </div>

                  <input
                    id="sim-hybrid-range"
                    type="range"
                    min={MIN_HYBRID_PCT}
                    max={MAX_HYBRID_PCT}
                    step={5}
                    value={hybridPct}
                    onChange={(e) => setHybridPct(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 accent-[#0a1d37] cursor-pointer"
                  />

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {HYBRID_PRESETS.map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setHybridPct(pct)}
                        className={`px-3 py-1 text-xs font-medium border transition-colors cursor-pointer tabular-nums ${
                          hybridPct === pct
                            ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
                        }`}
                      >
                        {pct === 100
                          ? isPt
                            ? '100% Presencial'
                            : '100% On-site'
                          : `${pct}% ${isPt ? 'Híbrido' : 'Hybrid'}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 2: Office Standard (Carpet Density) */}
              <div className="pb-9 border-b border-gray-200">
                <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                  {isPt ? 'Etapa 02' : 'Step 02'}
                </span>
                <h2 className="text-2xl font-serif text-gray-900 font-normal mb-1.5">
                  {isPt ? 'Padrão do Escritório (Densidade)' : 'Office Layout Standard'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-5">
                  {isPt
                    ? 'Define quantos metros quadrados de área de carpete são necessários por posição simultânea.'
                    : 'Sets the net carpet area required per simultaneous workstation.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {OFFICE_STANDARDS.map((opt) => {
                    const active = officeStandard === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setOfficeStandard(opt.id)}
                        aria-pressed={active}
                        className={`p-4 text-left border transition-colors cursor-pointer flex flex-col justify-between ${
                          active
                            ? 'bg-[#f8fafc] border-[#0a1d37] ring-1 ring-[#0a1d37]'
                            : 'bg-white border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-sm font-semibold text-gray-900">
                              {isPt ? opt.labelPt : opt.labelEn}
                            </span>
                            {active && <Check className="w-4 h-4 text-[#0a1d37] shrink-0" />}
                          </div>
                          <div className="text-xl font-serif text-[#0a1d37] font-semibold mb-2 tabular-nums">
                            {opt.densityM2} m²
                            <span className="text-xs font-sans font-normal text-gray-500">
                              {isPt ? ' / posição' : ' / seat'}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 font-light leading-relaxed">
                          {isPt ? opt.descPt : opt.descEn}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* BOMA Efficiency Slider */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                    <div>
                      <label
                        htmlFor="sim-boma-efficiency"
                        className="text-sm font-medium text-gray-800 block"
                      >
                        {isPt
                          ? 'Eficiência da área BOMA (Carpete / BOMA)'
                          : 'BOMA Area Efficiency (Carpet / BOMA)'}
                      </label>
                      <span className="text-xs text-gray-500 font-light">
                        {isPt
                          ? `${formatNumber(resultA.carpetArea, lang)} m² carpete → ${formatNumber(resultA.bomaArea, lang)} m² BOMA`
                          : `${formatNumber(resultA.carpetArea, lang)} sqm carpet → ${formatNumber(resultA.bomaArea, lang)} sqm BOMA`}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-[#0a1d37] tabular-nums">
                      {bomaEfficiencyPct}%
                    </span>
                  </div>

                  <input
                    id="sim-boma-efficiency"
                    type="range"
                    min={MIN_BOMA_EFFICIENCY_PCT}
                    max={MAX_BOMA_EFFICIENCY_PCT}
                    step={1}
                    value={bomaEfficiencyPct}
                    onChange={(e) => setBomaEfficiencyPct(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 accent-[#0a1d37] cursor-pointer"
                  />

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {BOMA_EFFICIENCY_PRESETS.map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setBomaEfficiencyPct(pct)}
                        className={`px-3 py-1 text-xs font-medium border transition-colors cursor-pointer tabular-nums ${
                          bomaEfficiencyPct === pct
                            ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
                        }`}
                      >
                        {pct === DEFAULT_BOMA_EFFICIENCY_PCT
                          ? isPt
                            ? `${pct}% Padrão`
                            : `${pct}% Default`
                          : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 3: Building Standard & São Paulo Region */}
              <div className="pb-9 border-b border-gray-200">
                <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                  {isPt ? 'Etapa 03' : 'Step 03'}
                </span>
                <h2 className="text-2xl font-serif text-gray-900 font-normal mb-1.5">
                  {isPt ? 'Padrão do Edifício e Região de São Paulo' : 'Building Class & São Paulo Submarket'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-5">
                  {isPt
                    ? 'Valores médios referenciais de mercado por m² BOMA/mês (aluguel, condomínio e IPTU).'
                    : 'Indicative São Paulo market averages per BOMA sqm/month (base rent, condo & IPTU).'}
                </p>

                {/* Building Standard Segmented Control */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block mb-2.5">
                    {isPt ? 'Padrão do Prédio' : 'Building Class'}
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {BUILDING_STANDARDS.map((bs) => {
                      const active = buildingStandard === bs.id;
                      return (
                        <button
                          key={bs.id}
                          type="button"
                          onClick={() => handleSelectBuildingA(bs.id)}
                          aria-pressed={active}
                          className={`px-3 py-3 text-left border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                              : 'bg-white text-gray-800 border-gray-200 hover:border-[#0a1d37]'
                          }`}
                        >
                          <div className="text-sm font-semibold">
                            {isPt ? bs.labelPt : bs.labelEn}
                          </div>
                          <div
                            className={`text-[11px] mt-0.5 leading-snug ${
                              active ? 'text-gray-200' : 'text-gray-500'
                            }`}
                          >
                            {isPt ? bs.descPt : bs.descEn}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 7 São Paulo Regions */}
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block mb-2.5">
                    {isPt ? 'Região Principal (São Paulo)' : 'Primary Submarket (São Paulo)'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {REGIONS_DATA.map((region) => {
                      const active = regionId === region.id;
                      const r = region.rates[buildingStandard];
                      const pkg = r.rent + r.condo + r.iptu;
                      return (
                        <button
                          key={region.id}
                          type="button"
                          onClick={() => handleSelectRegionA(region.id)}
                          aria-pressed={active}
                          className={`p-4 text-left border transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#f8fafc] border-[#0a1d37] ring-1 ring-[#0a1d37]'
                              : 'bg-white border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                              <MapPin
                                className={`w-3.5 h-3.5 shrink-0 ${
                                  active ? 'text-[#c59b27]' : 'text-gray-400'
                                }`}
                              />
                              {isPt ? region.namePt : region.nameEn}
                            </span>
                            <span className="text-xs font-semibold text-[#0a1d37] tabular-nums shrink-0">
                              {formatBRL(pkg, lang)}/m²
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-500 font-light leading-snug mb-1.5">
                            {isPt ? region.profilePt : region.profileEn}
                          </p>
                          <div className="text-[11px] text-gray-600 tabular-nums">
                            {isPt ? 'Alug.' : 'Rent'} R$ {r.rent} · Cond. R$ {r.condo} · IPTU R${' '}
                            {r.iptu}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Collapsible Fine-Tune Market Rates */}
                <div className="mt-5 border border-gray-200 bg-[#f8fafc]">
                  <button
                    type="button"
                    onClick={() => setShowCustomRates((v) => !v)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 cursor-pointer text-xs font-semibold text-[#0a1d37]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#c59b27]" />
                      {isPt
                        ? 'Já tem uma proposta? Ajustar R$/m² BOMA manualmente (opcional)'
                        : 'Have a specific quote? Override R$/sqm BOMA manually (optional)'}
                      {hasCustomRates && (
                        <span className="text-[10px] uppercase tracking-wider text-[#c59b27] font-bold">
                          ({isPt ? 'Personalizado' : 'Custom'})
                        </span>
                      )}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        showCustomRates ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {showCustomRates && (
                    <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                        <div>
                          <label
                            htmlFor="custom-rent"
                            className="block text-[11px] font-medium text-gray-600 mb-1"
                          >
                            {isPt ? 'Aluguel (R$/m² BOMA)' : 'Base Rent (R$/sqm)'}
                          </label>
                          <input
                            id="custom-rent"
                            type="number"
                            min={0}
                            step={5}
                            value={customRates.rent ?? regionA.rates[buildingStandard].rent}
                            onChange={(e) => handleCustomRateChange('rent', e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#0a1d37] tabular-nums"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="custom-condo"
                            className="block text-[11px] font-medium text-gray-600 mb-1"
                          >
                            {isPt ? 'Condomínio (R$/m² BOMA)' : 'Condo Fee (R$/sqm)'}
                          </label>
                          <input
                            id="custom-condo"
                            type="number"
                            min={0}
                            step={1}
                            value={customRates.condo ?? regionA.rates[buildingStandard].condo}
                            onChange={(e) => handleCustomRateChange('condo', e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#0a1d37] tabular-nums"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="custom-iptu"
                            className="block text-[11px] font-medium text-gray-600 mb-1"
                          >
                            {isPt ? 'IPTU (R$/m² BOMA)' : 'IPTU Tax (R$/sqm)'}
                          </label>
                          <input
                            id="custom-iptu"
                            type="number"
                            min={0}
                            step={1}
                            value={customRates.iptu ?? regionA.rates[buildingStandard].iptu}
                            onChange={(e) => handleCustomRateChange('iptu', e.target.value)}
                            className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#0a1d37] tabular-nums"
                          />
                        </div>
                      </div>
                      {hasCustomRates && (
                        <button
                          type="button"
                          onClick={() => setCustomRates({})}
                          className="text-xs text-[#0a1d37] hover:text-[#c59b27] font-medium inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          {isPt
                            ? 'Restaurar médias referenciais da região'
                            : 'Reset to regional market benchmarks'}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* STEP 4: CapEx Turnkey Fit-out, Rent-Free & 2nd Region Comparison */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                  {isPt ? 'Etapa 04' : 'Step 04'}
                </span>
                <h2 className="text-2xl font-serif text-gray-900 font-normal mb-1.5">
                  {isPt
                    ? 'CapEx de Fit-out (Turnkey), Carência e Comparador'
                    : 'Turnkey Fit-out CapEx, Rent-Free & Comparison'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light mb-5">
                  {isPt
                    ? 'Calculado sobre a área de carpete. Os valores por m² já incluem obra civil, instalações, mobiliário e TI.'
                    : 'Calculated over net carpet area. Rates per sqm already include civil works, furniture, and IT.'}
                </p>

                {/* Fit-out CapEx Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-7">
                  {FITOUT_STANDARDS.map((opt) => {
                    const active = fitoutStandard === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setFitoutStandard(opt.id)}
                        aria-pressed={active}
                        className={`p-4 text-left border transition-colors cursor-pointer flex flex-col justify-between ${
                          active
                            ? 'bg-[#f8fafc] border-[#0a1d37] ring-1 ring-[#0a1d37]'
                            : 'bg-white border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-sm font-semibold text-gray-900">
                              {isPt ? opt.labelPt : opt.labelEn}
                            </span>
                            {active && <Check className="w-4 h-4 text-[#0a1d37] shrink-0" />}
                          </div>
                          <div className="text-lg font-serif text-[#0a1d37] font-semibold mb-2 tabular-nums">
                            {formatBRL(opt.ratePerCarpetM2, lang)}
                            <span className="text-xs font-sans font-normal text-gray-500">
                              /m²
                            </span>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-600 font-light leading-relaxed">
                          {isPt ? opt.descPt : opt.descEn}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Rent-Free Months */}
                <div className="pb-7 border-b border-gray-200">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div>
                      <label
                        htmlFor="sim-rentfree-range"
                        className="text-sm font-medium text-gray-800 block"
                      >
                        {isPt
                          ? 'Carência de aluguel durante a obra'
                          : 'Rent-free period during fit-out'}
                      </label>
                      <span className="text-xs text-gray-500 font-light">
                        {isPt
                          ? 'Abate o aluguel base nos meses de obra (condomínio e IPTU permanecem).'
                          : 'Abates base rent during build-out (condo and IPTU remain payable).'}
                      </span>
                    </div>
                    <span className="text-base font-semibold text-[#0a1d37] tabular-nums shrink-0">
                      {rentFreeMonths}{' '}
                      {isPt
                        ? rentFreeMonths === 1
                          ? 'mês'
                          : 'meses'
                        : rentFreeMonths === 1
                          ? 'month'
                          : 'months'}
                    </span>
                  </div>
                  <input
                    id="sim-rentfree-range"
                    type="range"
                    min={0}
                    max={MAX_RENT_FREE_MONTHS}
                    step={1}
                    value={rentFreeMonths}
                    onChange={(e) => setRentFreeMonths(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 accent-[#0a1d37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-gray-400 mt-1 tabular-nums">
                    <span>0</span>
                    <span>3</span>
                    <span>6</span>
                    <span>9</span>
                    <span>12</span>
                  </div>
                </div>

                {/* Toggle Compare 2nd Region */}
                <div className="pt-6">
                  <div className="flex items-center justify-between gap-4 p-4 bg-[#f8fafc] border border-gray-200">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {isPt
                          ? 'Comparar com uma 2ª região lado a lado'
                          : 'Compare with a 2nd submarket side by side'}
                      </div>
                      <p className="text-xs text-gray-600 font-light mt-0.5">
                        {isPt
                          ? 'Veja a diferença de pacote mensal e economia em 5 anos entre dois endereços.'
                          : 'Compare monthly package and 5-year TCO savings between two districts.'}
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={compareEnabled}
                      onClick={() => setCompareEnabled((prev) => !prev)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center border transition-colors cursor-pointer ${
                        compareEnabled
                          ? 'bg-[#0a1d37] border-[#0a1d37]'
                          : 'bg-gray-200 border-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 bg-white transition-transform ${
                          compareEnabled ? 'translate-x-5.5' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  {compareEnabled && (
                    <div className="mt-4 p-5 bg-white border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="compare-region-b"
                          className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2"
                        >
                          {isPt ? 'Cenário B — Região' : 'Scenario B — Submarket'}
                        </label>
                        <select
                          id="compare-region-b"
                          value={regionBId}
                          onChange={(e) => setRegionBId(e.target.value as RegionId)}
                          className="w-full px-3 py-2.5 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 focus:outline-none focus:border-[#0a1d37] focus:bg-white"
                        >
                          {REGIONS_DATA.map((r) => (
                            <option key={r.id} value={r.id}>
                              {isPt ? r.namePt : r.nameEn}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <span className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                          {isPt ? 'Cenário B — Padrão do Prédio' : 'Scenario B — Building Class'}
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          {BUILDING_STANDARDS.map((bs) => {
                            const active = buildingBStandard === bs.id;
                            return (
                              <button
                                key={bs.id}
                                type="button"
                                onClick={() => setBuildingBStandard(bs.id)}
                                className={`py-2 text-xs font-semibold border transition-colors cursor-pointer ${
                                  active
                                    ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#0a1d37]'
                                }`}
                              >
                                {bs.id}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Live Sizing + Lead Gate / Full Financial Summary */}
            <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-5 print:col-span-12 print:static">
              {/* Block 1: Live Space Sizing (Always Visible) */}
              <div className="bg-[#f8fafc] border border-gray-200 p-6">
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-gray-200">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#c59b27] font-semibold block">
                      {isPt ? 'Dimensionamento ao Vivo' : 'Live Space Sizing'}
                    </span>
                    <div className="text-sm font-semibold text-[#0a1d37] mt-0.5">
                      {isPt ? regionA.namePt : regionA.nameEn} ·{' '}
                      {isPt ? `Padrão ${buildingStandard}` : `Class ${buildingStandard}`}
                    </div>
                  </div>
                  <Calculator className="w-4 h-4 text-[#0a1d37] shrink-0" />
                </div>

                <div className="grid grid-cols-3 gap-3 text-left">
                  <div>
                    <span className="block text-[11px] text-gray-500 mb-1">
                      {isPt ? 'Posições' : 'Seats'}
                    </span>
                    <span className="text-xl sm:text-2xl font-serif text-gray-900 font-semibold tabular-nums block">
                      {formatNumber(resultA.simultaneousSeats, lang)}
                    </span>
                    <span className="text-[11px] text-gray-500 tabular-nums">
                      {hybridPct}% {isPt ? `de ${resultA.people}` : `of ${resultA.people}`}
                    </span>
                  </div>

                  <div className="border-l border-gray-200 pl-3">
                    <span className="block text-[11px] text-gray-500 mb-1">
                      {isPt ? 'Área Carpete' : 'Carpet Area'}
                    </span>
                    <span className="text-xl sm:text-2xl font-serif text-gray-900 font-semibold tabular-nums block">
                      {formatNumber(resultA.carpetArea, lang)} m²
                    </span>
                    <span className="text-[11px] text-gray-500 tabular-nums">
                      {resultA.densityM2} m²/{isPt ? 'pos.' : 'seat'}
                    </span>
                  </div>

                  <div className="border-l border-gray-200 pl-3">
                    <span className="block text-[11px] text-gray-500 mb-1">
                      {isPt ? 'Área BOMA' : 'BOMA Area'}
                    </span>
                    <span className="text-xl sm:text-2xl font-serif text-[#0a1d37] font-semibold tabular-nums block">
                      {formatNumber(resultA.bomaArea, lang)} m²
                    </span>
                    <span className="text-[11px] text-gray-500 tabular-nums">
                      {resultA.bomaEfficiencyPct}% {isPt ? 'eficiência' : 'ratio'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Block 2: Financial Result (Locked Gate OR Unlocked Executive Summary) */}
              {!lead ? (
                <div
                  id="simulador-gate"
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  {/* Masked Preview Strip */}
                  <div
                    aria-hidden="true"
                    className="p-6 bg-[#f8fafc] border-b border-gray-200 select-none pointer-events-none"
                  >
                    <div className="grid grid-cols-2 gap-4 blur-[5px] opacity-75">
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-500">
                          {isPt ? 'Pacote Mensal' : 'Monthly Package'}
                        </span>
                        <span className="text-xl font-serif text-[#0a1d37] font-semibold tabular-nums">
                          R$ 248.500
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-500">
                          {isPt ? 'CapEx Fit-out' : 'Fit-out CapEx'}
                        </span>
                        <span className="text-xl font-serif text-[#0a1d37] font-semibold tabular-nums">
                          R$ 3.600.000
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-500">
                          {isPt ? 'TCO 5 Anos' : '5-Year TCO'}
                        </span>
                        <span className="text-xl font-serif text-[#0a1d37] font-semibold tabular-nums">
                          R$ 17.850.000
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] uppercase tracking-wider text-gray-500">
                          {isPt ? 'Custo / Pessoa' : 'Cost / Person'}
                        </span>
                        <span className="text-xl font-serif text-[#0a1d37] font-semibold tabular-nums">
                          R$ 3.718/mês
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lead Unlock Form */}
                  <form onSubmit={handleLeadUnlock} noValidate className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#0a1d37] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Lock className="w-4 h-4 text-[#c59b27]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif text-gray-900 font-normal leading-snug">
                          {isPt
                            ? 'Libere o detalhamento financeiro completo'
                            : 'Unlock the full financial breakdown'}
                        </h3>
                        <p className="text-xs text-gray-600 font-light mt-1 leading-relaxed">
                          {isPt
                            ? 'Veja aluguel, condomínio, IPTU, CapEx turnkey (obra, mobiliário e TI), TCO em 5 anos, custo por pessoa e comparativo entre regiões.'
                            : 'View base rent, condo, IPTU, turnkey fit-out CapEx, 5-year TCO, cost per person, and side-by-side district comparison.'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="lead-name"
                            className="block text-xs font-medium text-gray-700 mb-1"
                          >
                            {isPt ? 'Nome completo *' : 'Full name *'}
                          </label>
                          <input
                            id="lead-name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder={isPt ? 'Ex.: Ricardo Almeida' : 'e.g., Alex Morgan'}
                            className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0a1d37]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="lead-company"
                            className="block text-xs font-medium text-gray-700 mb-1"
                          >
                            {isPt ? 'Empresa *' : 'Company *'}
                          </label>
                          <input
                            id="lead-company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            value={leadCompany}
                            onChange={(e) => setLeadCompany(e.target.value)}
                            placeholder={isPt ? 'Nome da empresa' : 'Company name'}
                            className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0a1d37]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="lead-email"
                          className="block text-xs font-medium text-gray-700 mb-1"
                        >
                          {isPt ? 'E-mail corporativo *' : 'Corporate email *'}
                        </label>
                        <input
                          id="lead-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder={
                            isPt ? 'nome@suaempresa.com.br' : 'name@company.com'
                          }
                          className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0a1d37]"
                        />
                        <span className="block text-[11px] text-gray-500 font-light mt-1">
                          {isPt
                            ? 'Obrigatório e-mail com domínio da empresa (não aceitamos Gmail, Hotmail ou Outlook).'
                            : 'Company domain email required (free webmail providers are not accepted).'}
                        </span>
                      </div>

                      <div>
                        <label
                          htmlFor="lead-phone"
                          className="block text-xs font-medium text-gray-700 mb-1"
                        >
                          {isPt ? 'Celular / WhatsApp *' : 'Mobile / WhatsApp *'}
                        </label>
                        <input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          required
                          autoComplete="tel"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(formatPhoneInput(e.target.value))}
                          placeholder="(11) 99999-9999"
                          className="w-full px-3.5 py-2.5 text-sm bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0a1d37]"
                        />
                      </div>
                    </div>

                    {formError && (
                      <p role="alert" className="text-xs text-red-700 font-medium">
                        {formError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      data-button-navy="true"
                      className="w-full py-3.5 px-5 bg-[#0a1d37] hover:bg-[#122b4f] disabled:opacity-70 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      {isSubmitting
                        ? isPt
                          ? 'Liberando detalhamento...'
                          : 'Unlocking breakdown...'
                        : isPt
                          ? 'Ver Detalhamento Completo'
                          : 'Unlock Full Breakdown'}
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </button>

                    <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                      {isPt
                        ? 'Liberação imediata na tela. Após desbloquear, você pode ajustar qualquer parâmetro livremente.'
                        : 'Instant on-screen access. Once unlocked, every slider updates live.'}
                    </p>
                  </form>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 overflow-hidden">
                  {/* Monthly Occupancy Breakdown */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                        {isPt
                          ? 'Ocupação Mensal (sobre Área BOMA)'
                          : 'Monthly Occupancy (over BOMA Area)'}
                      </h3>
                      <span className="text-xs text-gray-500 tabular-nums">
                        {formatBRL(resultA.monthlyPackagePerBomaM2, lang)}/m²
                      </span>
                    </div>

                    <dl className="space-y-2.5 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-gray-600 font-light">
                          {isPt ? 'Aluguel' : 'Base Rent'}{' '}
                          <span className="text-xs text-gray-400 tabular-nums">
                            ({formatBRL(resultA.rates.rent, lang)}/m²)
                          </span>
                        </dt>
                        <dd className="font-medium text-gray-900 tabular-nums">
                          {formatBRL(resultA.monthlyRent, lang)}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-gray-600 font-light">
                          {isPt ? 'Condomínio' : 'Condo Fee'}{' '}
                          <span className="text-xs text-gray-400 tabular-nums">
                            ({formatBRL(resultA.rates.condo, lang)}/m²)
                          </span>
                        </dt>
                        <dd className="font-medium text-gray-900 tabular-nums">
                          {formatBRL(resultA.monthlyCondo, lang)}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-gray-600 font-light">
                          IPTU{' '}
                          <span className="text-xs text-gray-400 tabular-nums">
                            ({formatBRL(resultA.rates.iptu, lang)}/m²)
                          </span>
                        </dt>
                        <dd className="font-medium text-gray-900 tabular-nums">
                          {formatBRL(resultA.monthlyIptu, lang)}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 pt-3 border-t border-gray-200">
                        <dt className="font-semibold text-gray-900">
                          {isPt ? 'Pacote Mensal Total' : 'Total Monthly Package'}
                        </dt>
                        <dd className="text-base font-bold text-[#0a1d37] tabular-nums">
                          {formatBRL(resultA.monthlyPackage, lang)}
                          <span className="text-xs font-normal text-gray-500">
                            /{isPt ? 'mês' : 'mo'}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Turnkey Fit-out CapEx & Rent-Free */}
                  <div className="p-6 bg-[#f8fafc] border-b border-gray-200">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3.5">
                      {isPt
                        ? 'Investimento Inicial & Carência'
                        : 'Upfront Investment & Rent-Free'}
                    </h3>
                    <dl className="space-y-2.5 text-sm">
                      <div className="flex items-start justify-between gap-4">
                        <dt className="text-gray-700">
                          <span className="font-medium block">
                            {isPt
                              ? `CapEx Fit-out Turnkey (${fitoutOption.labelPt})`
                              : `Turnkey Fit-out CapEx (${fitoutOption.labelEn})`}
                          </span>
                          <span className="text-[11px] text-gray-500 font-light block">
                            {isPt
                              ? `${formatNumber(resultA.carpetArea, lang)} m² carpete × ${formatBRL(resultA.fitoutRatePerCarpetM2, lang)}/m² (obra, mobiliário e TI)`
                              : `${formatNumber(resultA.carpetArea, lang)} sqm carpet × ${formatBRL(resultA.fitoutRatePerCarpetM2, lang)}/sqm (civil, furniture & IT)`}
                          </span>
                        </dt>
                        <dd className="font-semibold text-[#0a1d37] tabular-nums shrink-0">
                          {formatBRL(resultA.fitoutCapex, lang)}
                        </dd>
                      </div>

                      <div className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200/80">
                        <dt className="text-gray-600 font-light">
                          {isPt
                            ? `Economia de carência (${resultA.rentFreeMonths} ${resultA.rentFreeMonths === 1 ? 'mês' : 'meses'} de aluguel)`
                            : `Rent-free savings (${resultA.rentFreeMonths} months)`}
                        </dt>
                        <dd className="font-medium text-emerald-700 tabular-nums">
                          {resultA.rentFreeSavings > 0
                            ? `− ${formatBRL(resultA.rentFreeSavings, lang)}`
                            : formatBRL(0, lang)}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Consolidated 5-Year TCO Block */}
                  <div className="p-6 bg-[#0a1d37] text-white">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold">
                        {isPt
                          ? `TCO Consolidado (${TCO_MONTHS} meses / 5 anos)`
                          : `Consolidated 5-Year TCO (${TCO_MONTHS} months)`}
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-serif text-white font-normal tabular-nums mb-4">
                      {formatBRL(resultA.tco60m, lang)}
                    </div>

                    {/* Visual Share Bar */}
                    <div className="mb-5">
                      <div className="h-2 w-full bg-white/15 flex overflow-hidden">
                        <div
                          style={{ width: `${resultA.occupancySharePct.toFixed(1)}%` }}
                          className="bg-white h-full"
                        />
                        <div
                          style={{ width: `${resultA.fitoutSharePct.toFixed(1)}%` }}
                          className="bg-[#c59b27] h-full"
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-gray-300 mt-1.5 tabular-nums">
                        <span>
                          {isPt ? 'Ocupação 5 anos:' : '5y Occupancy:'}{' '}
                          {resultA.occupancySharePct.toFixed(0)}% ({formatBRL(resultA.occupancy60m, lang)})
                        </span>
                        <span>
                          Fit-out: {resultA.fitoutSharePct.toFixed(0)}%
                        </span>
                      </div>
                    </div>

                    {/* Key Per-Month & Per-Person KPIs */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                      <div>
                        <span className="block text-[11px] text-gray-300 mb-0.5">
                          {isPt ? 'Custo Mensal Efetivo (TCO/60)' : 'Effective Monthly (TCO/60)'}
                        </span>
                        <span className="text-lg font-semibold text-white tabular-nums">
                          {formatBRL(resultA.effectiveMonthlyTco, lang)}
                          <span className="text-xs font-normal text-gray-300">
                            /{isPt ? 'mês' : 'mo'}
                          </span>
                        </span>
                      </div>
                      <div>
                        <span className="block text-[11px] text-gray-300 mb-0.5">
                          {isPt ? 'Custo Mensal / Pessoa' : 'Monthly Cost / Person'}
                        </span>
                        <span className="text-lg font-semibold text-[#c59b27] tabular-nums">
                          {formatBRL(resultA.monthlyCostPerPerson, lang)}
                          <span className="text-xs font-normal text-gray-300">
                            /{isPt ? 'mês' : 'mo'}
                          </span>
                        </span>
                        {hybridPct < 100 && (
                          <span className="block text-[10px] text-gray-300 tabular-nums mt-0.5">
                            ({formatBRL(resultA.monthlyCostPerSeat, lang)}/{isPt ? 'estação' : 'seat'})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Export & Advisory Actions */}
                  <div className="p-5 bg-white border-t border-gray-200 space-y-2.5 print:hidden">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-button-navy="true"
                      className="w-full py-3 px-4 bg-[#0a1d37] hover:bg-[#122b4f] text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4" />
                      {isPt
                        ? 'Enviar Simulação pelo WhatsApp'
                        : 'Send Simulation via WhatsApp'}
                    </a>
                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={mailtoUrl}
                        className="py-2.5 px-3 bg-white border border-gray-300 hover:border-[#0a1d37] text-gray-800 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
                        {isPt ? 'Enviar E-mail' : 'Send Email'}
                      </a>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="py-2.5 px-3 bg-white border border-gray-300 hover:border-[#0a1d37] text-gray-800 text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5 text-[#c59b27]" />
                        {isPt ? 'Imprimir / PDF' : 'Print / PDF'}
                      </button>
                    </div>
                    <p className="text-[11px] text-gray-500 font-light pt-1">
                      {isPt
                        ? `Simulação liberada para ${lead.name} (${lead.company}). Valores estimados com base em médias de mercado em São Paulo.`
                        : `Unlocked for ${lead.name} (${lead.company}). Estimates reflect São Paulo market averages.`}
                    </p>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Side-by-Side 2-Region Comparison Table */}
      {compareEnabled && resultB && comparisonStats && (
        <section className="py-14 bg-[#f8fafc] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                  {isPt ? 'Comparativo Lado a Lado' : 'Side-by-Side Comparison'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal">
                  {isPt ? regionA.namePt : regionA.nameEn} (Padrão {buildingStandard}) vs.{' '}
                  {isPt ? regionB.namePt : regionB.nameEn} (Padrão {buildingBStandard})
                </h2>
              </div>

              {lead && comparisonStats.cheaper !== 'tie' && (
                <div className="px-4 py-3 bg-white border border-gray-200 text-xs sm:text-sm">
                  <span className="text-gray-600 font-light">
                    {isPt ? 'Economia em 5 anos escolhendo ' : '5-year savings choosing '}
                  </span>
                  <strong className="text-[#0a1d37]">
                    {comparisonStats.cheaper === 'A'
                      ? isPt
                        ? regionA.namePt
                        : regionA.nameEn
                      : isPt
                        ? regionB.namePt
                        : regionB.nameEn}
                  </strong>
                  :{' '}
                  <strong className="text-emerald-700 tabular-nums">
                    {formatBRL(comparisonStats.absSavings, lang)} (
                    {comparisonStats.savingsPct.toFixed(1)}%)
                  </strong>
                </div>
              )}
            </div>

            {!lead ? (
              <div className="p-8 bg-white border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-serif text-gray-900 font-normal mb-1">
                    {isPt
                      ? 'Comparativo de 2 regiões pronto para visualização'
                      : '2-submarket comparison ready to view'}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-light">
                    {isPt
                      ? 'Preencha seu nome, empresa, e-mail corporativo e celular no painel acima para abrir a tabela comparativa e a economia em 5 anos.'
                      : 'Enter your name, company, corporate email, and mobile number above to unlock the comparison table and 5-year savings.'}
                  </p>
                </div>
                <a
                  href="#simulador-gate"
                  className="px-5 py-2.5 bg-[#0a1d37] text-white text-xs font-semibold uppercase tracking-wider shrink-0"
                >
                  {isPt ? 'Liberar Comparativo' : 'Unlock Comparison'}
                </a>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-[#f8fafc] text-xs uppercase tracking-wider text-gray-500">
                      <th className="py-3.5 px-5 font-semibold">
                        {isPt ? 'Indicador' : 'Metric'}
                      </th>
                      <th className="py-3.5 px-5 font-semibold text-[#0a1d37]">
                        {isPt ? 'Cenário A: ' : 'Scenario A: '}
                        {isPt ? regionA.namePt : regionA.nameEn} ({buildingStandard})
                      </th>
                      <th className="py-3.5 px-5 font-semibold text-[#0a1d37]">
                        {isPt ? 'Cenário B: ' : 'Scenario B: '}
                        {isPt ? regionB.namePt : regionB.nameEn} ({buildingBStandard})
                      </th>
                      <th className="py-3.5 px-5 font-semibold text-right">
                        {isPt ? 'Diferença (B − A)' : 'Difference (B − A)'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-sm">
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt ? 'Aluguel referencial (m² BOMA)' : 'Base rent (BOMA sqm)'}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultA.rates.rent, lang)}/m²
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultB.rates.rent, lang)}/m²
                      </td>
                      <td className="py-3.5 px-5 text-right tabular-nums text-gray-600">
                        {resultB.rates.rent - resultA.rates.rent > 0 ? '+' : ''}
                        {formatBRL(resultB.rates.rent - resultA.rates.rent, lang)}/m²
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt ? 'Pacote / m² BOMA (Alug. + Cond. + IPTU)' : 'Monthly package / BOMA sqm'}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultA.monthlyPackagePerBomaM2, lang)}/m²
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultB.monthlyPackagePerBomaM2, lang)}/m²
                      </td>
                      <td className="py-3.5 px-5 text-right tabular-nums text-gray-600">
                        {resultB.monthlyPackagePerBomaM2 - resultA.monthlyPackagePerBomaM2 > 0
                          ? '+'
                          : ''}
                        {formatBRL(
                          resultB.monthlyPackagePerBomaM2 - resultA.monthlyPackagePerBomaM2,
                          lang
                        )}
                        /m²
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt ? 'Pacote Mensal Total' : 'Total Monthly Package'}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-900 tabular-nums">
                        {formatBRL(resultA.monthlyPackage, lang)}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-900 tabular-nums">
                        {formatBRL(resultB.monthlyPackage, lang)}
                      </td>
                      <td
                        className={`py-3.5 px-5 text-right font-medium tabular-nums ${
                          resultB.monthlyPackage < resultA.monthlyPackage
                            ? 'text-emerald-700'
                            : resultB.monthlyPackage > resultA.monthlyPackage
                              ? 'text-amber-700'
                              : 'text-gray-600'
                        }`}
                      >
                        {resultB.monthlyPackage - resultA.monthlyPackage > 0 ? '+' : ''}
                        {formatBRL(resultB.monthlyPackage - resultA.monthlyPackage, lang)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt
                          ? 'CapEx Fit-out Turnkey (obra, mobiliário e TI)'
                          : 'Turnkey Fit-out CapEx (civil, furniture & IT)'}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultA.fitoutCapex, lang)}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultB.fitoutCapex, lang)}
                      </td>
                      <td className="py-3.5 px-5 text-right tabular-nums text-gray-500">
                        {formatBRL(0, lang)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt
                          ? `Ocupação 5 anos (com ${rentFreeMonths}m de carência)`
                          : `5-Year Occupancy (${rentFreeMonths}m rent-free)`}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultA.occupancy60m, lang)}
                      </td>
                      <td className="py-3.5 px-5 font-medium tabular-nums">
                        {formatBRL(resultB.occupancy60m, lang)}
                      </td>
                      <td
                        className={`py-3.5 px-5 text-right font-medium tabular-nums ${
                          resultB.occupancy60m < resultA.occupancy60m
                            ? 'text-emerald-700'
                            : resultB.occupancy60m > resultA.occupancy60m
                              ? 'text-amber-700'
                              : 'text-gray-600'
                        }`}
                      >
                        {resultB.occupancy60m - resultA.occupancy60m > 0 ? '+' : ''}
                        {formatBRL(resultB.occupancy60m - resultA.occupancy60m, lang)}
                      </td>
                    </tr>
                    <tr className="bg-[#f8fafc] font-semibold">
                      <td className="py-4 px-5 text-[#0a1d37]">
                        {isPt ? 'TCO Total em 5 Anos (60 meses)' : 'Total 5-Year TCO (60 months)'}
                      </td>
                      <td className="py-4 px-5 text-[#0a1d37] tabular-nums">
                        {formatBRL(resultA.tco60m, lang)}
                      </td>
                      <td className="py-4 px-5 text-[#0a1d37] tabular-nums">
                        {formatBRL(resultB.tco60m, lang)}
                      </td>
                      <td
                        className={`py-4 px-5 text-right tabular-nums ${
                          resultB.tco60m < resultA.tco60m
                            ? 'text-emerald-700'
                            : resultB.tco60m > resultA.tco60m
                              ? 'text-amber-700'
                              : 'text-gray-600'
                        }`}
                      >
                        {resultB.tco60m - resultA.tco60m > 0 ? '+' : ''}
                        {formatBRL(resultB.tco60m - resultA.tco60m, lang)}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-5 text-gray-600">
                        {isPt ? 'Custo Mensal Efetivo / Pessoa' : 'Effective Monthly Cost / Person'}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-900 tabular-nums">
                        {formatBRL(resultA.monthlyCostPerPerson, lang)}/{isPt ? 'mês' : 'mo'}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-gray-900 tabular-nums">
                        {formatBRL(resultB.monthlyCostPerPerson, lang)}/{isPt ? 'mês' : 'mo'}
                      </td>
                      <td
                        className={`py-3.5 px-5 text-right font-medium tabular-nums ${
                          resultB.monthlyCostPerPerson < resultA.monthlyCostPerPerson
                            ? 'text-emerald-700'
                            : resultB.monthlyCostPerPerson > resultA.monthlyCostPerPerson
                              ? 'text-amber-700'
                              : 'text-gray-600'
                        }`}
                      >
                        {resultB.monthlyCostPerPerson - resultA.monthlyCostPerPerson > 0 ? '+' : ''}
                        {formatBRL(
                          resultB.monthlyCostPerPerson - resultA.monthlyCostPerPerson,
                          lang
                        )}
                        /{isPt ? 'mês' : 'mo'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Suggested Real Buildings in the Chosen Submarket */}
      <section className="py-16 bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#c59b27] font-semibold block mb-1">
                {isPt ? 'Catálogo Octis Real Estate' : 'Octis Building Directory'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal">
                {isPt
                  ? `Edifícios de referência na região ${
                      compareEnabled && activeBuildingsTab === 'B'
                        ? regionB.namePt
                        : regionA.namePt
                    }`
                  : `Reference towers in ${
                      compareEnabled && activeBuildingsTab === 'B'
                        ? regionB.nameEn
                        : regionA.nameEn
                    }`}
              </h2>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {compareEnabled && (
                <div className="inline-flex border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setActiveBuildingsTab('A')}
                    className={`px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                      activeBuildingsTab === 'A'
                        ? 'bg-[#0a1d37] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {regionA.shortName}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBuildingsTab('B')}
                    className={`px-3 py-1.5 text-xs font-semibold cursor-pointer transition-colors ${
                      activeBuildingsTab === 'B'
                        ? 'bg-[#0a1d37] text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {regionB.shortName}
                  </button>
                </div>
              )}

              <Link
                to="/edificios"
                className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] inline-flex items-center gap-1.5"
              >
                {isPt ? 'Ver todos os edifícios' : 'Browse all buildings'}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedBuildings.map((b) => {
              const isProfileOnly = b.listingMode === 'profile';
              return (
                <Link
                  key={b.slug}
                  to={`/edificios/${b.slug}`}
                  className="group bg-white border border-gray-200 hover:border-[#0a1d37] transition-colors flex flex-col justify-between"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-[#c59b27] font-semibold mb-1.5">
                      <span>{b.neighborhood}</span>
                      <Building2 className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-serif text-gray-900 group-hover:text-[#0a1d37] font-normal mb-1.5">
                      {b.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-light mb-3">{b.address}</p>
                    <p className="text-xs text-gray-700 font-medium tabular-nums">
                      {isPt ? b.areaRangeSummaryPt : b.areaRangeSummaryEn}
                    </p>
                  </div>
                  <div className="px-6 py-3.5 bg-[#f8fafc] border-t border-gray-200 text-xs font-semibold uppercase tracking-wider text-[#0a1d37] group-hover:text-[#c59b27] inline-flex items-center gap-1.5">
                    {isProfileOnly
                      ? isPt
                        ? 'Ver Ficha Técnica'
                        : 'View Building Profile'
                      : isPt
                        ? 'Ver Detalhes do Prédio'
                        : 'View Building Details'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Editorial Reference Section: Valor m² Laje Corporativa SP + Custo Reforma m² */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {/* Block 1: Quanto custa montar um escritório corporativo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
                <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                {isPt ? 'Guia de Orçamento Corporativo' : 'Corporate Budgeting Guide'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4 font-normal leading-tight">
                {isPt
                  ? 'Quanto custa montar um escritório corporativo em São Paulo?'
                  : 'How much does it cost to set up a corporate office in São Paulo?'}
              </h2>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {isPt
                  ? 'Quem está planilhando a mudança ou abertura de uma nova sede precisa enxergar o Custo Total de Ocupação (TCO) em 5 anos, e não apenas o valor de tabela do aluguel. A conta completa combina o aluguel de laje corporativa em São Paulo (aluguel, condomínio e IPTU sobre a área BOMA) com o investimento inicial de implantação (reforma, mobiliário e TI sobre a área útil de carpete).'
                  : 'Executives budgeting a new headquarters need to evaluate 5-year Total Cost of Occupancy (TCO) rather than headline rent alone. The real equation combines monthly floorplate occupancy on BOMA area with upfront turnkey fit-out CapEx on usable carpet area.'}
              </p>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Na prática, a diferença entre negociar sozinho e atuar com{' '}
                    <Link
                      to="/servicos/tenant-representation"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Tenant Representation
                    </Link>{' '}
                    aparece na eficiência da planta escolhida, nos meses de carência para obra e no valor real de fechamento frente ao preço pedido pelos proprietários.
                  </>
                ) : (
                  <>
                    Working with dedicated{' '}
                    <Link
                      to="/servicos/tenant-representation"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Tenant Representation
                    </Link>{' '}
                    directly impacts floorplate efficiency, negotiated rent-free periods, and closing rent compared to asking prices.
                  </>
                )}
              </p>
            </div>

            {/* Block 2: Custo reforma escritório por m² */}
            <div className="lg:col-span-7 bg-[#f8fafc] border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif text-gray-900 mb-2 font-normal">
                {isPt
                  ? 'Custo de reforma de escritório por m² (CapEx / Fit-out)'
                  : 'Office renovation & fit-out cost per sqm (CapEx)'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-5">
                {isPt
                  ? 'Valores referenciais turnkey em São Paulo aplicados sobre a área de carpete (área útil onde a obra acontece), contemplando obra civil, instalações, divisórias, mobiliário corporativo e infraestrutura de TI:'
                  : 'Indicative São Paulo turnkey benchmarks applied to usable carpet area, covering civil works, MEP, partitions, office furniture, and IT infrastructure:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                {FITOUT_STANDARDS.map((tier) => (
                  <div key={tier.id} className="bg-white border border-gray-200 p-4">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#c59b27] block mb-1">
                      {isPt ? tier.labelPt : tier.labelEn}
                    </span>
                    <div className="text-xl font-serif text-[#0a1d37] font-semibold tabular-nums mb-2">
                      {formatBRL(tier.ratePerCarpetM2, lang)}
                      <span className="text-xs font-sans font-normal text-gray-500">/m²</span>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {isPt ? tier.descPt : tier.descEn}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 font-light leading-relaxed border-t border-gray-200 pt-4">
                {isPt
                  ? 'Exemplo prático: um escritório intermediário (9 m²/posição) para 100 pessoas presenciais exige 900 m² de carpete (~1.286 m² BOMA a 70% de eficiência), resultando em CapEx de R$ 3,6 milhões (simples), R$ 4,95 milhões (médio) ou R$ 6,3 milhões (alto padrão).'
                  : 'Example: a standard 100-seat office (9 sqm/seat) requires 900 sqm of carpet area (~1,286 sqm BOMA at 70% efficiency), translating to R$ 3.6M (simple), R$ 4.95M (mid-range), or R$ 6.3M (high-end) turnkey CapEx.'}
              </p>
            </div>
          </div>

          {/* Block 3: Tabela Valor m² Laje Corporativa São Paulo */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-2.5">
                  <span className="w-1.5 h-1.5 bg-[#c59b27]" />
                  {isPt ? 'Referência de Mercado • São Paulo' : 'Market Benchmarks • São Paulo'}
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal mb-2">
                  {isPt
                    ? 'Valor do m² de laje corporativa em São Paulo por região'
                    : 'Corporate office rent per BOMA sqm across São Paulo submarkets'}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                  {isPt
                    ? 'Comparativo referencial de aluguel de laje corporativa (R$/m² BOMA/mês) mais estimativa de condomínio e IPTU nos principais eixos empresariais — Faria Lima, Itaim Bibi, Vila Olímpia, Avenida Paulista, Berrini / Chucri Zaidan, Pinheiros e Chácara Santo Antônio.'
                    : 'Indicative monthly asking rent per BOMA sqm plus condo and IPTU estimates across São Paulo’s 7 core corporate districts.'}
                </p>
              </div>
              <Link
                to="/edificios"
                className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] inline-flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {isPt ? 'Ver catálogo de edifícios em SP' : 'Browse São Paulo buildings'}{' '}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[680px]">
                <thead>
                  <tr className="bg-[#0a1d37] text-white">
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold">
                      {isPt ? 'Região Corporativa (SP)' : 'Submarket (SP)'}
                    </th>
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-right">
                      {isPt ? 'Aluguel Padrão B' : 'Class B Rent'}
                    </th>
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-right">
                      {isPt ? 'Aluguel Padrão A' : 'Class A Rent'}
                    </th>
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-right">
                      {isPt ? 'Aluguel Padrão AAA' : 'Class AAA Rent'}
                    </th>
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-right">
                      {isPt ? 'Cond. + IPTU (Padrão A)' : 'Condo + IPTU (Class A)'}
                    </th>
                    <th className="py-3.5 px-4 text-xs uppercase tracking-wider font-semibold text-right">
                      {isPt ? 'Pacote Total (Padrão A)' : 'Total Package (Class A)'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm tabular-nums">
                  {REGIONS_DATA.map((region, idx) => {
                    const condoIptuA = region.rates.A.condo + region.rates.A.iptu;
                    const totalA = region.rates.A.rent + condoIptuA;
                    return (
                      <tr
                        key={region.id}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}
                      >
                        <td className="py-3.5 px-4">
                          <span className="font-medium text-gray-900 block">
                            {isPt ? region.namePt : region.nameEn}
                          </span>
                          <span className="text-[11px] text-gray-500 font-light">
                            {isPt ? region.profilePt : region.profileEn}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right text-gray-700 whitespace-nowrap">
                          {formatBRL(region.rates.B.rent, lang)}/m²
                        </td>
                        <td className="py-3.5 px-4 text-right font-medium text-[#0a1d37] whitespace-nowrap">
                          {formatBRL(region.rates.A.rent, lang)}/m²
                        </td>
                        <td className="py-3.5 px-4 text-right text-gray-700 whitespace-nowrap">
                          {formatBRL(region.rates.AAA.rent, lang)}/m²
                        </td>
                        <td className="py-3.5 px-4 text-right text-gray-600 whitespace-nowrap">
                          {formatBRL(condoIptuA, lang)}/m²
                        </td>
                        <td className="py-3.5 px-4 text-right font-semibold text-[#0a1d37] whitespace-nowrap">
                          {formatBRL(totalA, lang)}/m²
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-gray-500 font-light">
              {isPt
                ? '* Valores médios referenciais de mercado em R$/m² de área BOMA por mês. Utilize a calculadora acima para ajustar aluguel, condomínio e IPTU conforme a proposta de cada edifício.'
                : '* Indicative São Paulo market averages in R$/BOMA sqm/month. Override rent, condo, and IPTU inside the calculator above to test specific tower proposals.'}
            </p>
          </div>
        </div>
      </section>

      {/* Practical Methodology & Contextual Service Links (Short Blocks) */}
      <section className="py-16 bg-[#f8fafc] border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-2.5 font-normal">
              {isPt
                ? 'Como transformar a simulação em proposta real'
                : 'Turning this estimate into real lease terms'}
            </h2>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {isPt
                ? 'Três frentes que reduzem o custo final entre o orçamento inicial e a assinatura do contrato.'
                : 'Three practical steps that narrow the gap between budget estimates and signed contracts.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white border border-gray-200">
              <h3 className="text-xl font-serif text-gray-900 mb-2.5 font-normal">
                {isPt ? 'Test-fit gratuito antes da proposta' : 'Free test-fit before the LOI'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Duas lajes com a mesma área BOMA podem comportar números diferentes de pessoas por causa de pilares e formato da planta. No serviço de{' '}
                    <Link
                      to="/servicos/tenant-representation"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Tenant Representation
                    </Link>
                    , validamos o layout antes de enviar proposta e comparamos prédios em nossa página de{' '}
                    <Link
                      to="/alugar-escritorio-sao-paulo"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      alugar escritório em São Paulo
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    Two floors with identical BOMA area can fit different headcounts depending on columns and core layout. Through{' '}
                    <Link
                      to="/servicos/tenant-representation"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Tenant Representation
                    </Link>
                    , we run free test-fits before signing and benchmark options on our{' '}
                    <Link
                      to="/alugar-escritorio-sao-paulo"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      São Paulo office leasing
                    </Link>{' '}
                    guide.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200">
              <h3 className="text-xl font-serif text-gray-900 mb-2.5 font-normal">
                {isPt ? 'Peso do CapEx na decisão de ficar ou mudar' : 'Fit-out weight in stay vs. move'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Quando o fit-out passa de 20% do TCO em 5 anos, renovar no prédio atual pode custar menos do que mudar. Use esta conta como base para conduzir uma{' '}
                    <Link
                      to="/servicos/renegociacao-de-contratos-de-aluguel"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      renegociação do contrato de aluguel
                    </Link>{' '}
                    com alternativas concretas na mesa.
                  </>
                ) : (
                  <>
                    When turnkey fit-out exceeds 20% of 5-year TCO, staying in place often beats relocating. Use these figures to anchor a{' '}
                    <Link
                      to="/servicos/renegociacao-de-contratos-de-aluguel"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      lease renegotiation
                    </Link>{' '}
                    backed by real competing towers.
                  </>
                )}
              </p>
            </div>

            <div className="p-7 bg-white border border-gray-200">
              <h3 className="text-xl font-serif text-gray-900 mb-2.5 font-normal">
                {isPt ? 'Sede própria, caixa e áreas logísticas' : 'Ownership, liquidity & warehouses'}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {isPt ? (
                  <>
                    Se a empresa estuda adquirir sede ou monetizar um ativo próprio, atuamos em{' '}
                    <Link
                      to="/servicos/compra-e-venda-de-imoveis"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      compra e venda de imóveis
                    </Link>{' '}
                    e{' '}
                    <Link
                      to="/servicos/sale-and-leaseback"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Sale &amp; Leaseback
                    </Link>
                    , além de demandas para{' '}
                    <Link
                      to="/alugar-galpao-logistico"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      alugar galpão logístico
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    For companies weighing ownership or unlocking capital, we advise on{' '}
                    <Link
                      to="/servicos/compra-e-venda-de-imoveis"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      property acquisitions
                    </Link>{' '}
                    and{' '}
                    <Link
                      to="/servicos/sale-and-leaseback"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      Sale &amp; Leaseback
                    </Link>
                    , as well as{' '}
                    <Link
                      to="/alugar-galpao-logistico"
                      className="text-[#0a1d37] font-medium underline underline-offset-4 hover:text-[#c59b27]"
                    >
                      logistics warehouse leasing
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compact FAQ */}
      <section className="py-16 bg-white print:hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-8 font-normal">
            {isPt
              ? 'Perguntas frequentes sobre o cálculo'
              : 'Frequently asked questions about the methodology'}
          </h2>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="bg-[#f8fafc] border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-gray-900">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0a1d37] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-gray-600 font-light leading-relaxed border-t border-gray-200 bg-white pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
