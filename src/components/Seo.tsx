import React, { useEffect } from 'react';
import { SITE_URL, BUSINESS_NAME, IMAGE_URL } from '../config/site';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  structuredData?: object;
}

export const Seo: React.FC<SeoProps> = ({ title, description, url, image, structuredData }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BUSINESS_NAME}` : BUSINESS_NAME;
    document.title = fullTitle;

    const setMeta = (selectorAttr: 'name' | 'property', key: string, content?: string) => {
      if (!content) return;
      const selector = `meta[${selectorAttr}="${key}"]`;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(selectorAttr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description || '');
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description || '');
    setMeta('property', 'og:image', image || IMAGE_URL);
    setMeta('property', 'og:url', url || SITE_URL);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description || '');
    setMeta('name', 'twitter:image', image || IMAGE_URL);

    // canonical link
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || SITE_URL;

    // structured data
    if (structuredData) {
      let script = document.head.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    return () => {
      // Do not remove meta tags on unmount to avoid flicker; keep them as site-level defaults
    };
  }, [title, description, url, image, structuredData]);

  return null;
};

export default Seo;
