import React from 'react';
import { Octagon, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-white/10 text-gray-400 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4 inline-flex" aria-label="Octis Real Estate - Início">
              <Octagon className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-wide text-white leading-none">
                  OCTIS<span className="text-accent">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-sans mt-0.5">
                  Real Estate
                </span>
              </div>
            </a>
            <p className="font-light text-sm max-w-md text-gray-300 mb-5 leading-relaxed">
              Assessoria imobiliária para compra, venda, Sale & Leaseback e emissão de <strong>CRI (Certificados de Recebíveis Imobiliários)</strong> para incorporadoras e desenvolvimento imobiliário. Atendemos todas as classes de ativos em todo o Brasil.
            </p>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                São Paulo, SP — Atuação Nacional
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                thiago@octis.com.br
              </span>
            </div>
          </div>
          
          {/* Nav Links */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors font-light">Início</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors font-light">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors font-light">Serviços</a></li>
              <li><a href="#development" className="hover:text-accent transition-colors font-light">Imóveis Atendidos</a></li>
              <li><a href="#leadership" className="hover:text-accent transition-colors font-light">Experiência</a></li>
              <li><a href="#reddit" className="hover:text-accent transition-colors font-light">Artigos & Conteúdo</a></li>
              <li><a href="#duvidas-reddit" className="hover:text-accent transition-colors font-light">Comunidade Reddit</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors font-light">Dúvidas (FAQ)</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors font-light">Contato</a></li>
            </ul>
          </div>
          
          {/* Imóveis e Soluções */}
          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors font-light">Emissão de CRI</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors font-light">Sale & Leaseback</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors font-light">Compra e Venda de Imóveis</a></li>
              <li><a href="#development" className="hover:text-accent transition-colors font-light">Residencial (Econômico ao Luxo)</a></li>
              <li><a href="#development" className="hover:text-accent transition-colors font-light">Galpões de Todos os Portes</a></li>
              <li><a href="#development" className="hover:text-accent transition-colors font-light">Loteamentos e Terrenos</a></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Octis Real Estate. Todos os direitos reservados.</p>
          <p>São Paulo — SP, Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
