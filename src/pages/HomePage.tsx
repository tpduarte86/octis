import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Development } from '../components/Development';
import { Blog } from '../components/Blog';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        titlePt="Octis Real Estate | Negócios Imobiliários & Financiamento de Obras Brasil"
        titleEn="Octis Real Estate | Real Estate Transactions & CRI Debt Brazil"
        descriptionPt="A Octis Real Estate conecta proprietários, incorporadoras e investidores para compra, venda, aluguel comercial, Sale & Leaseback e financiamento de obras via CRI."
        descriptionEn="Octis Real Estate connects property owners, developers, and investors for commercial leasing, acquisitions, dispositions, Sale & Leaseback, and CRI debt funding."
        path="/"
      />

      <Hero />
      <Services />
      <Development />
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}
