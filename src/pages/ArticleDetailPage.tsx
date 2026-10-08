import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, Clock, Calendar, Share2, CheckCircle2, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/content';

export function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = translations[language].blog;
  const [copied, setCopied] = React.useState(false);

  const article = t.articles.find((a) => a.id === id);

  if (!article) {
    // If it's an old legacy blog URL like 'bim-aprofundando-o-conceito', redirect to the main Reddit & Articles hub
    return <Navigate to="/reddit" replace />;
  }

  const otherArticles = t.articles.filter((a) => a.id !== article.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.summary,
    url: `https://octis.com.br/reddit/${article.id}`,
    datePublished: '2026-03-25',
    dateModified: '2026-10-07',
    inLanguage: language === 'pt' ? 'pt-BR' : 'en-US',
    author: {
      '@type': 'Organization',
      name: 'Octis Real Estate',
      url: 'https://octis.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Octis Real Estate',
      url: 'https://octis.com.br',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://octis.com.br/reddit/${article.id}`,
    },
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-gray-900">
      <SEOHead
        titlePt={`${article.title} | Octis Real Estate`}
        titleEn={`${article.title} | Octis Real Estate`}
        descriptionPt={article.summary}
        descriptionEn={article.summary}
        path={`/reddit/${article.id}`}
        schemaJson={schemaJson}
        ogType="article"
      />

      {/* Header & Breadcrumbs */}
      <section className="py-12 md:py-16 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-500 mb-6 uppercase tracking-wider flex-wrap">
            <Link to="/" className="hover:text-[#0a1d37] transition-colors">
              {language === 'en' ? 'Home' : 'Início'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/reddit" className="hover:text-[#0a1d37] transition-colors">
              {language === 'en' ? 'Articles & Reddit' : 'Artigos & Reddit'}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0a1d37] font-semibold truncate max-w-xs md:max-w-md">
              {article.category}
            </span>
          </nav>

          {/* Meta & Category */}
          <div className="flex items-center gap-3 text-xs text-gray-600 mb-4 flex-wrap">
            <span className="px-2.5 py-1 bg-white border border-gray-200 text-[#0a1d37] font-semibold uppercase tracking-wider text-[11px]">
              {article.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-light">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {article.readTime} {t.readTimeLabel}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-light">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight font-normal">
            {article.title}
          </h1>

          {/* Summary Lead */}
          <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed mb-6">
            {article.summary}
          </p>

          {/* Share Action */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a1d37] hover:text-[#c59b27] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? t.copiedText : t.shareBtn}
            </button>
            {copied && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          
          {/* Key Takeaways Callout Box */}
          <div className="bg-[#f8fafc] border border-gray-200 p-6 md:p-8 mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#0a1d37] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#c59b27]" />
              {t.takeawaysTitle}
            </h2>
            <ul className="space-y-2.5">
              {article.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 font-light leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] shrink-0 mt-2" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intro Paragraph */}
          <div className="text-base sm:text-lg text-gray-800 font-light leading-relaxed mb-10 pb-8 border-b border-gray-100">
            {article.content.intro}
          </div>

          {/* Structured Content Sections */}
          <div className="space-y-10 mb-12">
            {article.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-2xl font-serif text-gray-900 font-normal">
                  {section.heading}
                </h2>
                <div className="space-y-3.5">
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Conclusion & CTA */}
          <div className="bg-[#0a1d37] text-white p-8 md:p-10 text-center my-12">
            <h3 className="text-2xl font-serif font-normal mb-3 text-white">
              {t.ctaBoxTitle}
            </h3>
            <p className="text-sm font-light text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
              {article.content.conclusion}
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0a1d37] hover:bg-gray-100 font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              {t.ctaBoxBtn} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Related Articles Strip */}
          <div className="pt-12 border-t border-gray-200">
            <h3 className="text-lg font-serif text-gray-900 mb-6 font-normal">
              {language === 'en' ? 'More Articles & Insights:' : 'Outros Artigos & Análises:'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherArticles.slice(0, 4).map((rel) => (
                <Link
                  key={rel.id}
                  to={`/reddit/${rel.id}`}
                  className="p-5 border border-gray-200 hover:border-[#0a1d37] transition-all bg-[#f8fafc] group"
                >
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#0a1d37] block mb-1">
                    {rel.category}
                  </span>
                  <div className="text-sm font-serif text-gray-900 group-hover:text-[#c59b27] font-normal leading-snug line-clamp-2 mb-2">
                    {rel.title}
                  </div>
                  <span className="text-xs text-gray-500 font-light flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {rel.readTime} {t.readTimeLabel}
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </div>
  );
}
