import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronRight, Share2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function Blog({ showHeader = true }: { showHeader?: boolean }) {
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
    <section id="reddit" data-slug="reddit" className="py-20 md:py-28 bg-[#f8fafc] border-t border-gray-200 relative">
      <span id="blog" className="sr-only" />
      <span id="reddit-artigos" className="sr-only" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[#0a1d37] uppercase tracking-widest text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 bg-[#c59b27]" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-4 font-normal leading-tight">
              {t.title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {t.categories.map((cat) => {
            const isActive = selectedCategory === cat || (cat === t.filterAll && selectedCategory === 'Todos');
            return (
              <button
                key={cat}
                type="button"
                data-button-navy={isActive ? "true" : undefined}
                style={isActive ? { color: '#ffffff', WebkitTextFillColor: '#ffffff' } : undefined}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                  isActive
                    ? 'bg-[#0a1d37] !text-white text-white border-[#0a1d37]'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-gray-200 p-7 flex flex-col justify-between hover:border-[#0a1d37] hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Clean unboxed metadata with dot separators */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="font-semibold text-[#0a1d37] uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-light">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {article.readTime} {t.readTimeLabel}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-gray-900 mb-3 leading-snug font-normal">
                  <Link
                    to={`/reddit/${article.id}`}
                    className="hover:text-[#c59b27] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Key Takeaways */}
                <div className="border-t border-gray-100 pt-3 mb-6">
                  <span className="text-[11px] text-gray-700 uppercase tracking-wider font-semibold block mb-2">
                    {t.takeawaysTitle}
                  </span>
                  <ul className="space-y-1 text-xs text-gray-600 font-light">
                    {article.takeaways.slice(0, 3).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-light flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>

                <Link
                  to={`/reddit/${article.id}`}
                  className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors inline-flex items-center gap-1"
                >
                  {language === 'en' ? 'Read Article' : 'Ler Artigo'} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal for Article Reading */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
              onClick={() => setActiveArticleId(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-white border border-gray-300 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-7 md:p-10 shadow-2xl relative text-gray-900"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveArticleId(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 cursor-pointer p-1"
                  aria-label="Close article modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Article Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="font-semibold text-[#0a1d37] uppercase tracking-wider">
                      {activeArticle.category}
                    </span>
                    <span>·</span>
                    <span>{activeArticle.readTime} {t.readTimeLabel}</span>
                    <span>·</span>
                    <span>{activeArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 font-normal leading-tight mb-4">
                    {activeArticle.title}
                  </h2>

                  <p className="text-base text-gray-700 font-light leading-relaxed border-l-2 border-[#c59b27] pl-4 italic">
                    {activeArticle.content.intro}
                  </p>
                </div>

                {/* Article Content Sections */}
                <div className="space-y-6 text-sm text-gray-700 font-light leading-relaxed border-t border-gray-100 pt-6">
                  {activeArticle.content.sections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="text-base font-serif text-gray-900 font-semibold mb-2">
                        {section.heading}
                      </h4>
                      <div className="space-y-2">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Conclusion */}
                  <div className="p-5 bg-gray-50 border border-gray-200 mt-6">
                    <h5 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-2">
                      {language === 'en' ? 'Octis Real Estate Takeaway' : 'Conclusão Octis Real Estate'}
                    </h5>
                    <p className="text-sm text-gray-700">
                      {activeArticle.content.conclusion}
                    </p>
                  </div>
                </div>

                {/* Share and Back */}
                <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveArticleId(null)}
                    className="text-xs font-semibold uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {t.backBtn}
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>{t.copiedText}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>{t.shareBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
