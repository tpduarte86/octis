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
        <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-accent selection:text-brand-900 flex flex-col justify-between">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* Dedicated Institutional Pages */}
              <Route path="/quem-somos" element={<AboutPage />} />
              <Route path="/sobre" element={<Navigate to="/quem-somos" replace />} />
              
              <Route path="/servicos" element={<ServicesPage />} />
              
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
