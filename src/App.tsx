/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, type ComponentType, type ComponentProps } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Keep HomePage eager so initial landing on "/" needs zero extra route chunks
import { HomePage } from './pages/HomePage';

function lazyWithPreload<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) {
  let Loaded: T | null = null;
  let promise: Promise<{ default: T }> | null = null;

  const load = () => {
    if (!promise) {
      promise = factory().then((mod) => {
        Loaded = mod.default;
        return mod;
      });
    }
    return promise;
  };

  const LazyComponent = lazy(load);

  const PreloadableComponent = (props: ComponentProps<T>) => {
    if (Loaded) {
      const Resolved = Loaded;
      return <Resolved {...props} />;
    }
    return <LazyComponent {...props} />;
  };

  return Object.assign(PreloadableComponent, { preload: load });
}

// Secondary routes split into dedicated lazy chunks
const AboutPage = lazyWithPreload(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ServicesPage = lazyWithPreload(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazyWithPreload(() =>
  import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const TenantRepresentationPage = lazyWithPreload(() =>
  import('./pages/TenantRepresentationPage').then((m) => ({ default: m.TenantRepresentationPage }))
);
const PropertiesPage = lazyWithPreload(() =>
  import('./pages/PropertiesPage').then((m) => ({ default: m.PropertiesPage }))
);
const TrackRecordPage = lazyWithPreload(() =>
  import('./pages/TrackRecordPage').then((m) => ({ default: m.TrackRecordPage }))
);
const RedditArticlesPage = lazyWithPreload(() =>
  import('./pages/RedditArticlesPage').then((m) => ({ default: m.RedditArticlesPage }))
);
const ArticleDetailPage = lazyWithPreload(() =>
  import('./pages/ArticleDetailPage').then((m) => ({ default: m.ArticleDetailPage }))
);
const RedditQuestionsPage = lazyWithPreload(() =>
  import('./pages/RedditQuestionsPage').then((m) => ({ default: m.RedditQuestionsPage }))
);
const ContactPage = lazyWithPreload(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const BuildingsDirectoryPage = lazyWithPreload(() =>
  import('./pages/BuildingsDirectoryPage').then((m) => ({ default: m.BuildingsDirectoryPage }))
);
const BuildingDetailPage = lazyWithPreload(() =>
  import('./pages/BuildingDetailPage').then((m) => ({ default: m.BuildingDetailPage }))
);
const OfficeLeasingPage = lazyWithPreload(() =>
  import('./pages/OfficeLeasingPage').then((m) => ({ default: m.OfficeLeasingPage }))
);
const WarehouseLeasingPage = lazyWithPreload(() =>
  import('./pages/WarehouseLeasingPage').then((m) => ({ default: m.WarehouseLeasingPage }))
);
const NotFoundPage = lazyWithPreload(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const TENANT_REP_PATHS = new Set([
  '/servicos/tenant-representation',
  '/tenant-representation',
  '/servicos/representacao-de-inquilinos',
  '/servicos/representacao-de-ocupantes',
  '/servicos/aluguel-comercial-busca-de-imoveis',
  '/servicos/aluguel-comercial',
  '/servicos/locacao-comercial',
]);

/**
 * Preloads the matching lazy route chunk prior to React hydration so direct
 * landings on prerendered subpages hydrate synchronously without a Suspense flash.
 */
export async function preloadRoute(pathname: string): Promise<void> {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  if (normalized === '/') return;

  if (normalized === '/quem-somos' || normalized === '/sobre') {
    await AboutPage.preload();
  } else if (normalized === '/servicos') {
    await ServicesPage.preload();
  } else if (TENANT_REP_PATHS.has(normalized)) {
    await TenantRepresentationPage.preload();
  } else if (normalized.startsWith('/servicos/')) {
    await ServiceDetailPage.preload();
  } else if (normalized === '/imoveis') {
    await PropertiesPage.preload();
  } else if (
    normalized === '/alugar-escritorio-sao-paulo' ||
    normalized === '/alugar-escritorio' ||
    normalized === '/imovel-corporativo-sao-paulo'
  ) {
    await OfficeLeasingPage.preload();
  } else if (
    normalized === '/alugar-galpao-logistico' ||
    normalized === '/alugar-galpao' ||
    normalized === '/galpao-logistico'
  ) {
    await WarehouseLeasingPage.preload();
  } else if (normalized === '/edificios') {
    await BuildingsDirectoryPage.preload();
  } else if (normalized.startsWith('/edificios/')) {
    await BuildingDetailPage.preload();
  } else if (normalized === '/experiencia' || normalized === '/lideranca') {
    await TrackRecordPage.preload();
  } else if (normalized === '/reddit' || normalized === '/artigos' || normalized === '/blog') {
    await RedditArticlesPage.preload();
  } else if (
    normalized.startsWith('/reddit/') ||
    normalized.startsWith('/artigos/') ||
    normalized.startsWith('/blog/')
  ) {
    await ArticleDetailPage.preload();
  } else if (normalized === '/duvidas-reddit' || normalized === '/faq') {
    await RedditQuestionsPage.preload();
  } else if (normalized === '/contato') {
    await ContactPage.preload();
  } else {
    await NotFoundPage.preload();
  }
}

export function AppRoutes() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0a1d37] selection:text-white flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Institutional Pages */}
              <Route path="/quem-somos" element={<AboutPage />} />
              <Route path="/sobre" element={<Navigate to="/quem-somos" replace />} />

              <Route path="/servicos" element={<ServicesPage />} />

              {/* Dedicated Service Pages with SEO-optimized Slugs */}
              <Route path="/servicos/tenant-representation" element={<TenantRepresentationPage />} />
              <Route path="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" element={<ServiceDetailPage slug="funding-imobiliario-antecipacao-recebiveis-cri" />} />
              <Route path="/servicos/renegociacao-de-contratos-de-aluguel" element={<ServiceDetailPage slug="renegociacao-de-contratos-de-aluguel" />} />
              <Route path="/servicos/compra-e-venda-de-imoveis" element={<ServiceDetailPage slug="compra-e-venda-de-imoveis" />} />
              <Route path="/servicos/sale-and-leaseback" element={<ServiceDetailPage slug="sale-and-leaseback" />} />
              <Route path="/servicos/socios-investidores-e-parcerias" element={<ServiceDetailPage slug="socios-investidores-e-parcerias" />} />

              {/* SEO Aliases & Short Redirects for Services */}
              <Route path="/tenant-representation" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/representacao-de-inquilinos" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/representacao-de-ocupantes" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/aluguel-comercial-busca-de-imoveis" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/cri" element={<Navigate to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" replace />} />
              <Route path="/servicos/financiamento-obras-cri" element={<Navigate to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" replace />} />
              <Route path="/servicos/financiamento-de-obras" element={<Navigate to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" replace />} />
              <Route path="/servicos/aluguel-comercial" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/locacao-comercial" element={<Navigate to="/servicos/tenant-representation" replace />} />
              <Route path="/servicos/renegociacao-aluguel" element={<Navigate to="/servicos/renegociacao-de-contratos-de-aluguel" replace />} />
              <Route path="/servicos/renegociacao-contratos" element={<Navigate to="/servicos/renegociacao-de-contratos-de-aluguel" replace />} />
              <Route path="/servicos/revisao-aluguel" element={<Navigate to="/servicos/renegociacao-de-contratos-de-aluguel" replace />} />
              <Route path="/servicos/compra-e-venda" element={<Navigate to="/servicos/compra-e-venda-de-imoveis" replace />} />
              <Route path="/servicos/sale-leaseback" element={<Navigate to="/servicos/sale-and-leaseback" replace />} />
              <Route path="/servicos/slb" element={<Navigate to="/servicos/sale-and-leaseback" replace />} />
              <Route path="/servicos/vender-e-alugar" element={<Navigate to="/servicos/sale-and-leaseback" replace />} />
              <Route path="/servicos/parcerias-terrenos" element={<Navigate to="/servicos/socios-investidores-e-parcerias" replace />} />

              {/* Dynamic Fallback for /servicos/:slug */}
              <Route path="/servicos/:slug" element={<ServiceDetailPage />} />

              <Route path="/imoveis" element={<PropertiesPage />} />
              <Route path="/alugar-escritorio-sao-paulo" element={<OfficeLeasingPage />} />
              <Route path="/alugar-escritorio" element={<Navigate to="/alugar-escritorio-sao-paulo" replace />} />
              <Route path="/imovel-corporativo-sao-paulo" element={<Navigate to="/alugar-escritorio-sao-paulo" replace />} />
              <Route path="/alugar-galpao-logistico" element={<WarehouseLeasingPage />} />
              <Route path="/alugar-galpao" element={<Navigate to="/alugar-galpao-logistico" replace />} />
              <Route path="/galpao-logistico" element={<Navigate to="/alugar-galpao-logistico" replace />} />
              <Route path="/edificios" element={<BuildingsDirectoryPage />} />
              <Route path="/edificios/:slug" element={<BuildingDetailPage />} />

              <Route path="/experiencia" element={<TrackRecordPage />} />
              <Route path="/lideranca" element={<Navigate to="/experiencia" replace />} />

              {/* Reddit Community & Knowledge Hub */}
              <Route path="/reddit" element={<RedditArticlesPage />} />
              <Route path="/reddit/:id" element={<ArticleDetailPage />} />

              {/* Aliases for Articles and Blog */}
              <Route path="/artigos" element={<Navigate to="/reddit" replace />} />
              <Route path="/artigos/:id" element={<ArticleDetailPage />} />

              <Route path="/blog" element={<Navigate to="/reddit" replace />} />
              <Route path="/blog/:id" element={<ArticleDetailPage />} />

              <Route path="/duvidas-reddit" element={<RedditQuestionsPage />} />
              <Route path="/faq" element={<Navigate to="/duvidas-reddit" replace />} />

              {/* Contact Page */}
              <Route path="/contato" element={<ContactPage />} />

              {/* Proper 404 Page to prevent Soft-404 and duplicate indexing errors */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
