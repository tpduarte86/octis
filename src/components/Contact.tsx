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
    <section id="contact" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Left Column: Direct Info & Location */}
        <div>
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            {t.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-300 font-light text-base md:text-lg mb-8 leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-brand-800/40 border border-white/5">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{t.emailLabel}</h4>
                <a 
                  href="mailto:contato@octis.com.br" 
                  className="text-gray-300 font-light hover:text-accent transition-colors flex items-center gap-1.5 text-base"
                >
                  contato@octis.com.br <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-brand-800/40 border border-white/5">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{t.locationLabel}</h4>
                <p className="text-gray-300 font-light text-sm">{t.locationVal}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-brand-800/40 border border-white/5">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">{t.hoursLabel}</h4>
                <p className="text-gray-300 font-light text-sm">{t.hoursVal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-brand-800/70 border border-white/10 p-7 md:p-9 shadow-xl relative">
          <h3 className="text-2xl font-serif text-white mb-2">{t.formTitle}</h3>
          <p className="text-sm text-gray-400 font-light mb-6">
            {t.formSubtitle}
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent/30 text-accent text-sm flex items-center gap-3">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>{t.successNotice}</span>
            </div>
          )}
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="name">
                  {t.nameLabel}
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="company">
                  {t.companyLabel}
                </label>
                <input 
                  type="text" 
                  id="company"
                  name="company"
                  className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                  placeholder={t.companyPlaceholder}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="email">
                  {t.emailInputLabel}
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="phone">
                  {t.phoneLabel}
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent text-sm"
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="mandateType">
                {t.mandateLabel}
              </label>
              <select
                id="mandateType"
                name="mandateType"
                defaultValue={t.mandates[0]?.value}
                className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:border-accent text-sm"
              >
                {t.mandates.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1.5 font-medium" htmlFor="message">
                {t.messageLabel}
              </label>
              <textarea 
                id="message"
                name="message"
                rows={3}
                required
                className="w-full bg-brand-900/80 border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-accent resize-none text-sm"
                placeholder={t.messagePlaceholder}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-brand-900 font-semibold py-3.5 uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {t.submitBtn}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
