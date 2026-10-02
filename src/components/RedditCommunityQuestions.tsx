import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ThumbsUp, ArrowUpRight, CheckCircle, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function RedditCommunityQuestions() {
  const { language } = useLanguage();
  const t = translations[language].redditQuestions;

  const [selectedFilter, setSelectedFilter] = useState(t.filterAll);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = t.questions.filter(q => {
    const matchesFilter = selectedFilter === t.filterAll || q.category === selectedFilter || selectedFilter === 'Todas as Linhas' || selectedFilter === 'All Lines of Business';
    const matchesSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.octisAnswer.paragraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="duvidas-reddit" className="py-20 md:py-28 bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
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

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {t.filters.map((cat) => {
              const isActive = selectedFilter === cat || (cat === t.filterAll && (selectedFilter === 'Todas as Linhas' || selectedFilter === 'All Lines of Business'));
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#0a1d37] text-white border-[#0a1d37]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white border border-gray-200 text-gray-800 text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#0a1d37] transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs text-gray-500 mb-6 font-light">
          {filteredQuestions.length} {t.answersCount}
        </div>

        {/* Questions Grid */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-7 md:p-8 bg-white border border-gray-200 hover:border-[#0a1d37] transition-all shadow-xs"
            >
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-semibold text-[#0a1d37] uppercase tracking-wider text-[11px]">
                    {q.category}
                  </span>
                  <span>·</span>
                  <span className="font-mono text-gray-400">{q.subreddit}</span>
                  <span>·</span>
                  <span>{q.author}</span>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#c59b27]" />
                    {q.upvotes}
                  </span>
                </div>
              </div>

              {/* Title & Context */}
              <h3 className="text-xl font-serif text-gray-900 mb-3 font-normal leading-snug">
                {q.question}
              </h3>
              
              <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed mb-6 italic border-l-2 border-gray-200 pl-4">
                "{q.context}"
              </p>

              {/* Verified Octis Answer */}
              <div className="p-6 bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-[#c59b27]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37]">
                    {t.verifiedBadge}
                  </span>
                </div>

                <h4 className="font-serif text-base text-gray-900 font-semibold mb-3">
                  {q.octisAnswer.title}
                </h4>

                <div className="space-y-3 text-xs sm:text-sm text-gray-700 font-light leading-relaxed mb-4">
                  {q.octisAnswer.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Why Octis */}
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-[11px] uppercase tracking-wider text-gray-700 font-semibold block mb-1">
                    {t.whyOctisBadge}
                  </span>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">
                    {q.octisAnswer.whyOctis}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 text-gray-500 font-light text-sm">
              <p>{t.noResults}</p>
              <button
                type="button"
                onClick={() => { setSelectedFilter(t.filterAll); setSearchQuery(''); }}
                className="mt-3 text-xs font-semibold text-[#0a1d37] hover:underline uppercase tracking-wider"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-8 bg-[#0a1d37] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-2xl mb-1 font-normal">
              {t.ctaTitle}
            </h4>
            <p className="text-xs sm:text-sm text-gray-200 font-light">
              {t.ctaDesc}
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-white text-[#0a1d37] hover:bg-gray-100 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0"
          >
            {t.ctaBtn}
          </a>
        </div>

      </div>
    </section>
  );
}
