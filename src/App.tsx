/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Partner } from './components/Partner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-accent selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
