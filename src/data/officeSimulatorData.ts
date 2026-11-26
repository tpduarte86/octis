export type OfficeStandardId = 'basic' | 'intermediate' | 'top';
export type BuildingStandardId = 'B' | 'A' | 'AAA';
export type FitoutStandardId = 'simple' | 'medium' | 'high';
export type RegionId =
  | 'faria-lima'
  | 'itaim-bibi'
  | 'vila-olimpia'
  | 'paulista'
  | 'berrini'
  | 'pinheiros'
  | 'chacara-santo-antonio';

export const CARPET_TO_BOMA_RATIO = 0.7;
export const DEFAULT_BOMA_EFFICIENCY_PCT = 70;
export const MIN_BOMA_EFFICIENCY_PCT = 50;
export const MAX_BOMA_EFFICIENCY_PCT = 100;
export const BOMA_EFFICIENCY_OPTIONS = [60, 65, 70, 75, 80, 85, 90, 95, 100] as const;
export const TCO_MONTHS = 60;
export const MIN_PEOPLE = 10;
export const MAX_PEOPLE = 2000;
export const MIN_HYBRID_PCT = 30;
export const MAX_HYBRID_PCT = 100;
export const MAX_RENT_FREE_MONTHS = 12;

export interface MonthlyRates {
  rent: number;
  condo: number;
  iptu: number;
}

export interface OfficeStandardOption {
  id: OfficeStandardId;
  densityM2: number;
  labelPt: string;
  labelEn: string;
  descPt: string;
  descEn: string;
}

export interface BuildingStandardOption {
  id: BuildingStandardId;
  labelPt: string;
  labelEn: string;
  descPt: string;
  descEn: string;
}

export interface FitoutStandardOption {
  id: FitoutStandardId;
  ratePerCarpetM2: number;
  labelPt: string;
  labelEn: string;
  descPt: string;
  descEn: string;
}

export interface RegionMarketData {
  id: RegionId;
  namePt: string;
  nameEn: string;
  shortName: string;
  profilePt: string;
  profileEn: string;
  rates: Record<BuildingStandardId, MonthlyRates>;
  suggestedBuildingSlugs: string[];
}

export interface SimulationInputs {
  people: number;
  hybridOccupancyPct: number;
  officeStandard: OfficeStandardId;
  buildingStandard: BuildingStandardId;
  regionId: RegionId;
  fitoutStandard: FitoutStandardId;
  rentFreeMonths: number;
  bomaEfficiencyPct?: number;
  customRates?: Partial<MonthlyRates>;
}

export interface SimulationResult {
  people: number;
  hybridOccupancyPct: number;
  simultaneousSeats: number;
  densityM2: number;
  bomaEfficiencyPct: number;
  carpetArea: number;
  bomaArea: number;
  rates: MonthlyRates;
  monthlyPackagePerBomaM2: number;
  monthlyRent: number;
  monthlyCondo: number;
  monthlyIptu: number;
  monthlyPackage: number;
  fitoutRatePerCarpetM2: number;
  fitoutCapex: number;
  rentFreeMonths: number;
  rentFreeSavings: number;
  occupancy60m: number;
  tco60m: number;
  effectiveMonthlyTco: number;
  monthlyCostPerPerson: number;
  monthlyCostPerSeat: number;
  monthlyOccupancyPerPerson: number;
  occupancySharePct: number;
  fitoutSharePct: number;
}

export interface LeadInfo {
  name: string;
  company: string;
  email: string;
  phone: string;
  unlockedAt: string;
}

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'hotmail.com',
  'hotmail.com.br',
  'outlook.com',
  'outlook.com.br',
  'live.com',
  'live.com.br',
  'msn.com',
  'yahoo.com',
  'yahoo.com.br',
  'ymail.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'uol.com.br',
  'bol.com.br',
  'terra.com.br',
  'ig.com.br',
  'globo.com',
  'globomail.com',
  'r7.com',
  'zipmail.com.br',
  'oi.com.br',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'tutanota.com',
  'tuta.io',
  'zoho.com',
  'gmx.com',
  'mail.com',
  'yandex.com',
  'mailinator.com',
  'yopmail.com',
  'guerrillamail.com',
  'temp-mail.org',
  '10minutemail.com',
]);

const EMAIL_FORMAT_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmailFormat(email: string): boolean {
  return EMAIL_FORMAT_REGEX.test(email.trim());
}

export function isCorporateEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  if (!EMAIL_FORMAT_REGEX.test(normalized)) return false;
  const domain = normalized.split('@')[1];
  if (!domain) return false;
  return !FREE_EMAIL_DOMAINS.has(domain);
}

export function isValidMobilePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return false;
  // Reject obvious fake repeated sequences like 00000000000 or (11) 99999-9999
  if (/^(\d)\1+$/.test(digits)) return false;
  if ((digits.length === 10 || digits.length === 11) && /^(\d)\1+$/.test(digits.slice(2))) {
    return false;
  }
  return true;
}

export function formatPhoneInput(value: string): string {
  const trimmed = value.trimStart();
  if (trimmed.startsWith('+')) {
    return '+' + trimmed.slice(1).replace(/[^\d\s()-]/g, '').slice(0, 20);
  }
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export const OFFICE_STANDARDS: OfficeStandardOption[] = [
  {
    id: 'basic',
    densityM2: 7,
    labelPt: 'Básico',
    labelEn: 'Compact',
    descPt: 'Layout enxuto em open space, estações lineares e salas de apoio essenciais.',
    descEn: 'Efficient open-space layout with linear benches and core meeting rooms.',
  },
  {
    id: 'intermediate',
    densityM2: 9,
    labelPt: 'Intermediário',
    labelEn: 'Standard',
    descPt: 'Equilíbrio entre estações confortáveis, salas de reunião, phone booths e copa.',
    descEn: 'Balanced workstations, meeting rooms, phone booths, and staff lounge.',
  },
  {
    id: 'top',
    densityM2: 11,
    labelPt: 'Top / Executivo',
    labelEn: 'Executive',
    descPt: 'Maior circulação, salas de diretoria, boardroom, recepção ampla e áreas de convivência.',
    descEn: 'Generous circulation, executive suites, boardroom, reception, and hospitality areas.',
  },
];

export const BUILDING_STANDARDS: BuildingStandardOption[] = [
  {
    id: 'B',
    labelPt: 'Padrão B',
    labelEn: 'Class B',
    descPt: 'Edifícios comerciais tradicionais com boa localização e custo mais contido.',
    descEn: 'Established commercial towers with competitive occupancy costs.',
  },
  {
    id: 'A',
    labelPt: 'Padrão A',
    labelEn: 'Class A',
    descPt: 'Torres corporativas modernas com piso elevado, ar central e gerador.',
    descEn: 'Modern corporate towers with raised floor, central HVAC, and backup power.',
  },
  {
    id: 'AAA',
    labelPt: 'Padrão AAA',
    labelEn: 'Class AAA',
    descPt: 'Torres troféu, certificação LEED, pé-direito amplo e especificações de ponta.',
    descEn: 'Trophy towers with LEED certification, high ceilings, and prime specs.',
  },
];

export const FITOUT_STANDARDS: FitoutStandardOption[] = [
  {
    id: 'simple',
    ratePerCarpetM2: 4000,
    labelPt: 'Simples',
    labelEn: 'Simple',
    descPt: 'Obra funcional, mobiliário corporativo de entrada e infraestrutura básica de TI.',
    descEn: 'Functional civil fit-out, standard office furniture, and core IT cabling.',
  },
  {
    id: 'medium',
    ratePerCarpetM2: 5500,
    labelPt: 'Médio',
    labelEn: 'Mid-Range',
    descPt: 'Acústica reforçada, divisórias de vidro, mobiliário ergonômico e infraestrutura completa de TI.',
    descEn: 'Upgraded acoustics, glass partitions, ergonomic furniture, and complete IT infrastructure.',
  },
  {
    id: 'high',
    ratePerCarpetM2: 7000,
    labelPt: 'Alto Padrão',
    labelEn: 'High-End',
    descPt: 'Marcenaria sob medida, automação, acabamentos diferenciados e mobiliário nacional de padrão mais elevado.',
    descEn: 'Bespoke millwork, automation, upgraded finishes, and higher-grade domestic furniture.',
  },
];

export const REGIONS_DATA: RegionMarketData[] = [
  {
    id: 'faria-lima',
    namePt: 'Faria Lima',
    nameEn: 'Faria Lima',
    shortName: 'Faria Lima',
    profilePt: 'Principal centro financeiro de SP, vacância reduzida e alta liquidez.',
    profileEn: 'São Paulo’s primary financial hub with tight vacancy and trophy towers.',
    rates: {
      B: { rent: 155, condo: 28, iptu: 15 },
      A: { rent: 215, condo: 34, iptu: 19 },
      AAA: { rent: 290, condo: 40, iptu: 24 },
    },
    suggestedBuildingSlugs: ['torre-faria-lima', 'jr-589', 'jk-square'],
  },
  {
    id: 'itaim-bibi',
    namePt: 'Itaim Bibi',
    nameEn: 'Itaim Bibi',
    shortName: 'Itaim Bibi',
    profilePt: 'Eixo JK e Faria Lima Sul, forte presença de bancos, gestoras e advocacia.',
    profileEn: 'JK / South Faria Lima corridor favored by finance, tech, and law firms.',
    rates: {
      B: { rent: 135, condo: 26, iptu: 14 },
      A: { rent: 185, condo: 32, iptu: 17 },
      AAA: { rent: 250, condo: 38, iptu: 22 },
    },
    suggestedBuildingSlugs: ['jk-square', 'jr-589', 'vitrini-itaim-office'],
  },
  {
    id: 'vila-olimpia',
    namePt: 'Vila Olímpia',
    nameEn: 'Vila Olímpia',
    shortName: 'V. Olímpia',
    profilePt: 'Lajes amplas, fácil acesso à Marginal Pinheiros, CPTM e Congonhas.',
    profileEn: 'Large floorplates near Marginal Pinheiros, commuter rail, and Congonhas.',
    rates: {
      B: { rent: 105, condo: 24, iptu: 13 },
      A: { rent: 145, condo: 30, iptu: 16 },
      AAA: { rent: 195, condo: 35, iptu: 20 },
    },
    suggestedBuildingSlugs: ['millenium-office-park', 'dynamic-vila-olimpia', 'jk-square'],
  },
  {
    id: 'paulista',
    namePt: 'Avenida Paulista',
    nameEn: 'Paulista Avenue',
    shortName: 'Paulista',
    profilePt: 'Conexão direta a múltiplas linhas de metrô e oferta mista de torres.',
    profileEn: 'Direct multi-line subway access and diverse Class A/AAA stock.',
    rates: {
      B: { rent: 95, condo: 24, iptu: 13 },
      A: { rent: 135, condo: 29, iptu: 16 },
      AAA: { rent: 185, condo: 35, iptu: 20 },
    },
    suggestedBuildingSlugs: ['edificio-cyk', 'alameda-santos-2477', 'inspira-pamplona'],
  },
  {
    id: 'berrini',
    namePt: 'Berrini / Chucri Zaidan',
    nameEn: 'Berrini / Chucri Zaidan',
    shortName: 'Berrini',
    profilePt: 'Grandes torres corporativas, boa proporção de vagas e preço competitivo.',
    profileEn: 'Large corporate campuses, generous parking ratios, and competitive rent.',
    rates: {
      B: { rent: 85, condo: 23, iptu: 12 },
      A: { rent: 115, condo: 28, iptu: 15 },
      AAA: { rent: 155, condo: 33, iptu: 18 },
    },
    suggestedBuildingSlugs: ['rm-square', 'o-parque-torre-orvalho', 'birmann-12'],
  },
  {
    id: 'pinheiros',
    namePt: 'Pinheiros',
    nameEn: 'Pinheiros',
    shortName: 'Pinheiros',
    profilePt: 'Edifícios boutique e torres modernas junto às linhas Amarela e Verde do metrô.',
    profileEn: 'Boutique and modern office towers steps from Yellow and Green subway lines.',
    rates: {
      B: { rent: 105, condo: 24, iptu: 12 },
      A: { rent: 145, condo: 29, iptu: 15 },
      AAA: { rent: 190, condo: 34, iptu: 19 },
    },
    suggestedBuildingSlugs: ['torre-faria-lima', 'inspira-pinheiros', 'niw-reboucas'],
  },
  {
    id: 'chacara-santo-antonio',
    namePt: 'Chácara Santo Antônio',
    nameEn: 'Chácara Santo Antônio',
    shortName: 'Ch. Sto. Antônio',
    profilePt: 'Melhor custo-benefício em lajes prontas com gerador total e metrô próximo.',
    profileEn: 'High value-for-money floorplates with backup power and metro access.',
    rates: {
      B: { rent: 65, condo: 20, iptu: 10 },
      A: { rent: 90, condo: 24, iptu: 12 },
      AAA: { rent: 120, condo: 28, iptu: 15 },
    },
    suggestedBuildingSlugs: ['birmann-12', 'o-parque-torre-orvalho', 'viva-torre-corporativa'],
  },
];

export function getRegionById(regionId: RegionId): RegionMarketData {
  return REGIONS_DATA.find((r) => r.id === regionId) ?? REGIONS_DATA[0];
}

export function getOfficeStandard(id: OfficeStandardId): OfficeStandardOption {
  return OFFICE_STANDARDS.find((s) => s.id === id) ?? OFFICE_STANDARDS[1];
}

export function getFitoutStandard(id: FitoutStandardId): FitoutStandardOption {
  return FITOUT_STANDARDS.find((f) => f.id === id) ?? FITOUT_STANDARDS[1];
}

export function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function calculateOfficeSimulation(inputs: SimulationInputs): SimulationResult {
  const people = Math.round(clamp(inputs.people, MIN_PEOPLE, MAX_PEOPLE));
  const hybridOccupancyPct = Math.round(
    clamp(inputs.hybridOccupancyPct, MIN_HYBRID_PCT, MAX_HYBRID_PCT)
  );
  const rentFreeMonths = Math.round(clamp(inputs.rentFreeMonths, 0, MAX_RENT_FREE_MONTHS));

  const officeOption = getOfficeStandard(inputs.officeStandard);
  const fitoutOption = getFitoutStandard(inputs.fitoutStandard);
  const region = getRegionById(inputs.regionId);
  const defaultRates = region.rates[inputs.buildingStandard];

  const rates: MonthlyRates = {
    rent: Math.max(0, inputs.customRates?.rent ?? defaultRates.rent),
    condo: Math.max(0, inputs.customRates?.condo ?? defaultRates.condo),
    iptu: Math.max(0, inputs.customRates?.iptu ?? defaultRates.iptu),
  };

  const bomaEfficiencyPct = Math.round(
    clamp(inputs.bomaEfficiencyPct ?? DEFAULT_BOMA_EFFICIENCY_PCT, 50, 100)
  );
  const simultaneousSeats = Math.max(1, Math.ceil(people * (hybridOccupancyPct / 100)));
  const carpetArea = simultaneousSeats * officeOption.densityM2;
  const bomaArea = Math.round(carpetArea / (bomaEfficiencyPct / 100));

  const monthlyRent = bomaArea * rates.rent;
  const monthlyCondo = bomaArea * rates.condo;
  const monthlyIptu = bomaArea * rates.iptu;
  const monthlyPackage = monthlyRent + monthlyCondo + monthlyIptu;
  const monthlyPackagePerBomaM2 = rates.rent + rates.condo + rates.iptu;

  const fitoutCapex = carpetArea * fitoutOption.ratePerCarpetM2;
  const rentFreeSavings = monthlyRent * rentFreeMonths;

  const occupancy60m =
    monthlyRent * (TCO_MONTHS - rentFreeMonths) + (monthlyCondo + monthlyIptu) * TCO_MONTHS;
  const tco60m = occupancy60m + fitoutCapex;
  const effectiveMonthlyTco = tco60m / TCO_MONTHS;

  const monthlyCostPerPerson = effectiveMonthlyTco / people;
  const monthlyCostPerSeat = effectiveMonthlyTco / simultaneousSeats;
  const monthlyOccupancyPerPerson = monthlyPackage / people;

  const occupancySharePct = tco60m > 0 ? (occupancy60m / tco60m) * 100 : 0;
  const fitoutSharePct = tco60m > 0 ? (fitoutCapex / tco60m) * 100 : 0;

  return {
    people,
    hybridOccupancyPct,
    simultaneousSeats,
    densityM2: officeOption.densityM2,
    bomaEfficiencyPct,
    carpetArea,
    bomaArea,
    rates,
    monthlyPackagePerBomaM2,
    monthlyRent,
    monthlyCondo,
    monthlyIptu,
    monthlyPackage,
    fitoutRatePerCarpetM2: fitoutOption.ratePerCarpetM2,
    fitoutCapex,
    rentFreeMonths,
    rentFreeSavings,
    occupancy60m,
    tco60m,
    effectiveMonthlyTco,
    monthlyCostPerPerson,
    monthlyCostPerSeat,
    monthlyOccupancyPerPerson,
    occupancySharePct,
    fitoutSharePct,
  };
}

export function formatBRL(value: number, language: 'pt' | 'en' = 'pt'): string {
  return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function formatNumber(value: number, language: 'pt' | 'en' = 'pt'): string {
  return new Intl.NumberFormat(language === 'en' ? 'en-US' : 'pt-BR', {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}
