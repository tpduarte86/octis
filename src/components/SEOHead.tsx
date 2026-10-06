import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  path: string;
  schemaJson?: object;
}

export function SEOHead({ titlePt, titleEn, descriptionPt, descriptionEn, path, schemaJson }: SEOProps) {
  const { language } = useLanguage();

  const title = language === 'en' ? titleEn : titlePt;
  const description = language === 'en' ? descriptionEn : descriptionPt;
  const canonicalUrl = `https://octis.com.br${path}`;

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

    // 3. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
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

    // 5. Update Twitter Tags
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

    // 6. Structured Data Schema JSON-LD
    let scriptTag = document.querySelector('script#octis-schema-json');
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'octis-schema-json');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, schemaJson]);

  return null;
}
