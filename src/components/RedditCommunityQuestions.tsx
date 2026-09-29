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
    <section id="duvidas-reddit" className="py-20 md:py-28 bg-brand-900 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-accent uppercase tracking-widest text-xs font-semibold mb-3 px-3 py-1 bg-accent/10 border border-accent/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
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
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-accent text-brand-900 font-semibold shadow-md'
                      : 'bg-brand-800/80 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
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
              className="w-full bg-brand-800/80 border border-white/10 pl-9 pr-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-8">
          {filteredQuestions.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-brand-800/50 border border-white/10 hover:border-accent/40 p-6 md:p-8 transition-colors shadow-lg"
            >
              {/* Question Header (Reddit style) */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5 text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-accent">{item.subreddit}</span>
                  <span>•</span>
                  <span className="font-mono text-gray-400">{item.author}</span>
                  <span>•</span>
                  <span className="text-[11px] px-2 py-0.5 bg-brand-900/80 border border-white/10 text-gray-300">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 font-light text-xs">
                  <span className="flex items-center gap-1.5 text-accent/90">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    {item.upvotes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {item.commentsCount} {t.answersCount}
                  </span>
                </div>
              </div>

              {/* The Reddit Question */}
              <h3 className="text-xl md:text-2xl font-serif text-white mb-3 leading-snug">
                "{item.question}"
              </h3>
              
              <div className="bg-brand-900/60 p-4 border-l-2 border-gray-600 mb-6 text-sm text-gray-300 font-light leading-relaxed italic">
                {item.context}
              </div>

              {/* The Octis Real Estate Verified Solution */}
              <div className="bg-brand-850 p-6 border border-accent/20 relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent">
                    {t.verifiedBadge}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-white mb-3">
                  {item.octisAnswer.title}
                </h4>

                <div className="space-y-3 text-sm text-gray-300 font-light leading-relaxed mb-5">
                  {item.octisAnswer.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Why Octis Real Estate Box */}
                <div className="p-4 bg-brand-900 border border-accent/30 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">
                      {t.whyOctisBadge}
                    </p>
                    <p className="text-sm text-gray-200 font-light leading-relaxed">
                      {item.octisAnswer.whyOctis}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="p-12 text-center bg-brand-800/40 border border-white/10 text-gray-400">
              <p className="text-base mb-2">{t.noResults}</p>
              <button
                type="button"
                onClick={() => { setSelectedFilter(t.filterAll); setSearchQuery(''); }}
                className="text-xs text-accent uppercase tracking-wider underline hover:text-white"
              >
                {t.clearFilters}
              </button>
            </div>
          )}
        </div>

        {/* Direct CTA Box */}
        <div className="mt-14 p-8 bg-brand-800/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif text-white mb-1">
              {t.ctaTitle}
            </h3>
            <p className="text-sm text-gray-300 font-light">
              {t.ctaDesc}
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-accent hover:bg-accent/90 text-brand-900 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md inline-flex items-center gap-2"
          >
            {t.ctaBtn} <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
