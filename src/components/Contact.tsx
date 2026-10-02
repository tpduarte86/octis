import React, { useState } from 'react';
import { Mail, ArrowUpRight, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const company = formData.get('company') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const mandateType = formData.get('mandateType') as string;
    const message = formData.get('message') as string;
    
    if (!name || !email || !message) return;

    setSubmitted(true);

    const subject = encodeURIComponent(
      language === 'en'
        ? `[Website Inquiry] Interest: ${mandateType || 'General'} - ${company || name}`
        : `[Contato Site] Interesse: ${mandateType || 'Geral'} - ${company || name}`
    );
    const body = encodeURIComponent(
      language === 'en'
        ? `Name: ${name}\nCompany/Name: ${company}\nEmail: ${email}\nPhone: ${phone}\nPrimary Interest: ${mandateType}\n\nMessage:\n${message}\n\n(Sent via official website of Octis Real Estate)`
        : `Nome: ${name}\nEmpresa/Nome: ${company}\nEmail: ${email}\nTelefone: ${phone}\nInteresse Principal: ${mandateType}\n\nMensagem:\n${message}\n\n(Enviado pelo site oficial da Octis Real Estate)`
    );
    
    window.location.href = `mailto:contato@octis.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-gray-200 text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Left Column: Direct Info & Location */}
        <div>
          <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
            <span className="w-1.5 h-1.5 bg-[#c59b27]" />
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 font-normal leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-600 font-light text-base md:text-lg mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-6 bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">{t.emailLabel}</h4>
                <a 
                  href="mailto:contato@octis.com.br" 
                  className="text-gray-900 font-medium hover:text-[#0a1d37] transition-colors flex items-center gap-1.5 text-base"
                >
                  contato@octis.com.br <ArrowUpRight className="w-4 h-4 text-[#c59b27]" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">{t.locationLabel}</h4>
                <p className="text-gray-800 font-light text-sm">{t.locationVal}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#f8fafc] border border-gray-200">
              <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-[#0a1d37]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">{t.hoursLabel}</h4>
                <p className="text-gray-800 font-light text-sm">{t.hoursVal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form (Clean CBRE Style) */}
        <div className="bg-[#f8fafc] border border-gray-200 p-8 md:p-10 shadow-sm relative">
          <h3 className="text-2xl font-serif text-gray-900 mb-2 font-normal">{t.formTitle}</h3>
          <p className="text-sm text-gray-600 font-light mb-6">
            {t.formSubtitle}
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-amber-50/80 border border-amber-200 text-amber-950 text-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#c59b27]" shrink-0 />
              <span>{t.successNotice}</span>
            </div>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="name">
                  {t.nameLabel}
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="company">
                  {t.companyLabel}
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm"
                  placeholder={t.companyPlaceholder}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="email">
                  {t.emailInputLabel}
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="phone">
                  {t.phoneLabel}
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm"
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="mandateType">
                {t.mandateLabel}
              </label>
              <select
                id="mandateType"
                name="mandateType"
                className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm cursor-pointer"
              >
                {t.mandates.map((m) => (
                  <option key={m.value} value={m.value} className="bg-white text-gray-900 py-1">
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-700 mb-1 font-semibold" htmlFor="message">
                {t.messageLabel}
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                required
                className="w-full bg-white border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0a1d37] focus:ring-1 focus:ring-[#0a1d37] text-sm resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#0a1d37] hover:bg-[#122b4f] text-white py-3.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.submitBtn}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
