import React from 'react';
import { Octagon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Octagon className="w-6 h-6 text-accent" />
              <span className="font-serif text-xl font-semibold tracking-wide text-white">
                OCTIS<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              Boutique especializada em real estate e capital markets para investidores institucionais.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-wider">Navegação</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-200 hover:text-accent transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-200 hover:text-accent transition-colors text-sm">A Boutique</a></li>
                <li><a href="#services" className="text-gray-200 hover:text-accent transition-colors text-sm">Serviços</a></li>
                <li><a href="#leadership" className="text-gray-200 hover:text-accent transition-colors text-sm">Liderança</a></li>
                <li><a href="#contact" className="text-gray-200 hover:text-accent transition-colors text-sm">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6 uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-200 hover:text-accent transition-colors text-sm">Privacidade</a></li>
                <li><a href="#" className="text-gray-200 hover:text-accent transition-colors text-sm">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Octis Capital. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-sm text-center md:text-right">
            São Paulo, SP — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
