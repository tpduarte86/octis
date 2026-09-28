/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Development } from './components/Development';
import { Partner } from './components/Partner';
import { Blog } from './components/Blog';
import { RedditCommunityQuestions } from './components/RedditCommunityQuestions';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Handle URL slug routing for /reddit or #duvidas-reddit or #reddit
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes('duvidas-reddit') || hash.includes('duvidas-reddit')) {
      const el = document.getElementById('duvidas-reddit');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (path.includes('reddit') || hash.includes('reddit')) {
      const el = document.getElementById('reddit');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-900 text-white font-sans selection:bg-accent selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Development />
        <Partner />
        <Blog />
        <RedditCommunityQuestions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
