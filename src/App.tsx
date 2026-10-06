/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { TrackRecordPage } from './pages/TrackRecordPage';
import { RedditArticlesPage } from './pages/RedditArticlesPage';
import { RedditQuestionsPage } from './pages/RedditQuestionsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0a1d37] selection:text-white flex flex-col justify-between">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Institutional Pages */}
              <Route path="/quem-somos" element={<AboutPage />} />
              <Route path="/sobre" element={<Navigate to="/quem-somos" replace />} />
              
              <Route path="/servicos" element={<ServicesPage />} />

              {/* Dedicated Service Pages with SEO-optimized Slugs */}
              <Route path="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" element={<ServiceDetailPage slug="funding-imobiliario-antecipacao-recebiveis-cri" />} />
              <Route path="/servicos/aluguel-comercial-busca-de-imoveis" element={<ServiceDetailPage slug="aluguel-comercial-busca-de-imoveis" />} />
              <Route path="/servicos/renegociacao-de-contratos-de-aluguel" element={<ServiceDetailPage slug="renegociacao-de-contratos-de-aluguel" />} />
              <Route path="/servicos/compra-e-venda-de-imoveis" element={<ServiceDetailPage slug="compra-e-venda-de-imoveis" />} />
              <Route path="/servicos/sale-and-leaseback" element={<ServiceDetailPage slug="sale-and-leaseback" />} />
              <Route path="/servicos/socios-investidores-e-parcerias" element={<ServiceDetailPage slug="socios-investidores-e-parcerias" />} />

              {/* SEO Aliases & Short Redirects */}
              <Route path="/servicos/cri" element={<Navigate to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" replace />} />
              <Route path="/servicos/financiamento-obras-cri" element={<Navigate to="/servicos/funding-imobiliario-antecipacao-recebiveis-cri" replace />} />
              <Route path="/servicos/aluguel-comercial" element={<Navigate to="/servicos/aluguel-comercial-busca-de-imoveis" replace />} />
              <Route path="/servicos/locacao-comercial" element={<Navigate to="/servicos/aluguel-comercial-busca-de-imoveis" replace />} />
              <Route path="/servicos/renegociacao-aluguel" element={<Navigate to="/servicos/renegociacao-de-contratos-de-aluguel" replace />} />
              <Route path="/servicos/compra-e-venda" element={<Navigate to="/servicos/compra-e-venda-de-imoveis" replace />} />
              <Route path="/servicos/sale-leaseback" element={<Navigate to="/servicos/sale-and-leaseback" replace />} />
              <Route path="/servicos/parcerias-terrenos" element={<Navigate to="/servicos/socios-investidores-e-parcerias" replace />} />

              {/* Dynamic Fallback for /servicos/:slug */}
              <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
              
              <Route path="/imoveis" element={<PropertiesPage />} />
              
              <Route path="/experiencia" element={<TrackRecordPage />} />
              <Route path="/lideranca" element={<Navigate to="/experiencia" replace />} />

              {/* Reddit Community & Knowledge Hub */}
              <Route path="/reddit" element={<RedditArticlesPage />} />
              <Route path="/artigos" element={<Navigate to="/reddit" replace />} />
              <Route path="/blog" element={<Navigate to="/reddit" replace />} />
              
              <Route path="/duvidas-reddit" element={<RedditQuestionsPage />} />
              <Route path="/faq" element={<Navigate to="/duvidas-reddit" replace />} />

              {/* Contact Page */}
              <Route path="/contato" element={<ContactPage />} />

              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
