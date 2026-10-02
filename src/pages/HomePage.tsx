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
        titlePt="Octis Real Estate | Renegociação de Aluguel, Escritórios, Galpões & CRI"
        titleEn="Octis Real Estate | Commercial Lease Renegotiation, Offices, Logistics & CRI"
        descriptionPt="Renegociação de contratos de aluguel comercial, ação revisional em escritórios e galpões, defesa contra aumento abusivo, compra, venda e financiamento de obras via CRI."
        descriptionEn="Commercial lease renegotiation, rent revision lawsuits for offices and warehouses, defense against rent hikes, property transactions, and CRI construction debt in Brazil."
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
