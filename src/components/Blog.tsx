import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronRight, Share2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Blog() {
  const { language } = useLanguage();
  const t = translations[language].blog;

  const [selectedCategory, setSelectedCategory] = useState(t.filterAll);
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // If selectedCategory is the "All" equivalent or not in categories, default to all
  const filteredArticles = selectedCategory === t.filterAll || !t.categories.includes(selectedCategory)
    ? t.articles
    : t.articles.filter(a => a.category === selectedCategory);

  const activeArticle = t.articles.find(a => a.id === activeArticleId) || null;

  const handleShare = () => {
    if (activeArticle) {
      const shareUrl = `${window.location.origin}/reddit#${activeArticle.id}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
      }
    }
  };

  return (
    <section id="reddit" data-slug="reddit" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <span id="blog" className="sr-only" />
      <span id="reddit-artigos" className="sr-only" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {t.categories.map((cat) => {
            const isActive = selectedCategory === cat || (cat === t.filterAll && selectedCategory === 'Todos');
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent text-brand-900 shadow-md font-semibold'
                    : 'bg-brand-800/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-brand-800/50 border border-white/10 hover:border-accent/40 flex flex-col justify-between p-7 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs text-gray-400">
                  <span className="font-semibold uppercase tracking-wider text-accent text-[11px] px-2 py-0.5 bg-accent/10 border border-accent/20">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-light text-[11px]">
                    <Clock className="w-3 h-3 text-accent" />
                    {article.readTime} {t.readTimeLabel}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 flex items-center gap-1.5 font-light">
                    <Calendar className="w-3.5 h-3.5 text-accent/80" />
                    {article.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveArticleId(article.id)}
                    className="text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    Ler artigo <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticleId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-brand-900 border border-accent/40 shadow-2xl z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-white/10 flex items-start justify-between gap-4 bg-brand-850">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                    <span className="font-semibold uppercase tracking-wider text-accent px-2.5 py-0.5 bg-accent/10 border border-accent/30 text-[11px]">
                      {activeArticle.category}
                    </span>
                    <span className="text-gray-400 flex items-center gap-1 font-light">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      {activeArticle.readTime} {t.readTimeLabel}
                    </span>
                    <span className="text-gray-400 flex items-center gap-1 font-light">
                      <Calendar className="w-3.5 h-3.5 text-accent" />
                      {activeArticle.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-white leading-snug">
                    {activeArticle.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticleId(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Close article"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
                
                {/* Takeaways Card */}
                <div className="p-5 bg-brand-800/80 border border-accent/20">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-accent mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {t.takeawaysTitle}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-200">
                    {activeArticle.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Introduction */}
                <p className="text-base md:text-lg text-white font-serif italic border-l-2 border-accent pl-4 py-1">
                  {activeArticle.content.intro}
                </p>

                {/* Sections */}
                {activeArticle.content.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3 pt-2">
                    <h3 className="text-lg md:text-xl font-serif text-white font-medium">
                      {sec.heading}
                    </h3>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                ))}

                {/* Conclusion */}
                <div className="pt-4 border-t border-white/10">
                  <p className="font-normal text-gray-200">
                    {activeArticle.content.conclusion}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="p-6 bg-brand-800 border border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-base font-serif text-white mb-1">
                      {t.ctaBoxTitle}
                    </h4>
                    <p className="text-xs text-gray-400 font-light">
                      {t.ctaBoxDesc}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setActiveArticleId(null)}
                    className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    {t.ctaBoxBtn}
                  </a>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 px-6 md:px-8 border-t border-white/10 flex items-center justify-between bg-brand-850">
                <button
                  type="button"
                  onClick={() => setActiveArticleId(null)}
                  className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
                >
                  ← {t.backBtn}
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent hover:text-white transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  {copied ? t.copiedText : t.shareBtn}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
