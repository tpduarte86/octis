import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  path: string;
  schemaJson?: object;
  noindex?: boolean;
  ogType?: 'website' | 'article';
}

export function SEOHead({
  titlePt,
  titleEn,
  descriptionPt,
  descriptionEn,
  path,
  schemaJson,
  noindex = false,
  ogType = 'website',
}: SEOProps) {
  const { language } = useLanguage();

  const title = language === 'en' ? titleEn : titlePt;
  const description = language === 'en' ? descriptionEn : descriptionPt;

  // Strict Canonical URL Normalization:
  // Root path '/' retains trailing slash; subpaths have no trailing slash to prevent duplicate content flags
  const normalizedPath = path === '/' ? '/' : (path.startsWith('/') ? path : `/${path}`).replace(/\/+$/, '');
  const canonicalUrl = `https://octis.com.br${normalizedPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update Robots Directive (Crucial for 404s and preventing soft-404 indexing errors)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    if (noindex) {
      metaRobots.setAttribute('content', 'noindex, nofollow');
    } else {
      metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // 4. Update Canonical Link Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 5. Update OpenGraph Tags
    const updateMeta = (prop: string, val: string) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    };

    updateMeta('og:title', title);
    updateMeta('og:description', description);
    updateMeta('og:url', canonicalUrl);
    updateMeta('og:type', ogType);

    // 6. Update Twitter Tags
    const updateTwitter = (name: string, val: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    };

    updateTwitter('twitter:title', title);
    updateTwitter('twitter:description', description);

    // 7. Structured Data Schema JSON-LD
    let scriptTag = document.querySelector('script#octis-dynamic-schema');
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'octis-dynamic-schema');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, schemaJson, noindex, ogType]);

  return null;
}
