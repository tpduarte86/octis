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
        titlePt="Octis Real Estate | Escritórios, Galpões, Aluguel & CRI"
        titleEn="Octis Real Estate | Offices, Logistics, Leases & CRI"
        descriptionPt="Tenant Representation, renegociação de aluguel em escritórios e galpões, compra, venda e CRI imobiliário em São Paulo e todo o Brasil."
        descriptionEn="Tenant Representation, commercial lease renegotiation, corporate offices, warehouses, and CRI real estate funding across Brazil."
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
