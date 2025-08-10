import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, generateStructuredData } from '../config/seo.config';

interface SEOProps {
  page?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  page,
  title,
  description,
  keywords,
  image,
  url,
  type
}) => {
  const location = useLocation();
  
  // Get SEO config for the page
  const pageConfig = page ? getSEOConfig(page) : null;
  const seoConfig = {
    title: title || pageConfig?.title || "Shivanshu Singh - Full Stack Developer | React, Django, Python Expert",
    description: description || pageConfig?.title || "Professional Full Stack Developer specializing in React, Django, Python, and modern web technologies. Building exceptional user experiences and solving complex problems.",
    keywords: keywords || pageConfig?.keywords || "Full Stack Developer, React Developer, Django Developer, Python Developer, Web Development, Frontend Developer, Backend Developer, Portfolio, Shivanshu Singh",
    image: image || pageConfig?.image || "https://shivanshu-portfolio.com/og-image.jpg",
    url: url || pageConfig?.url || `https://shivanshu-portfolio.com${location.pathname}`,
    type: type || pageConfig?.type || "website"
  };
  
  const currentUrl = seoConfig.url;

  useEffect(() => {
    // Update document title
    document.title = seoConfig.title;

    // Update meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateNameTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Open Graph tags
    updateMetaTag('og:title', seoConfig.title);
    updateMetaTag('og:description', seoConfig.description);
    updateMetaTag('og:image', seoConfig.image);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', seoConfig.type);

    // Update Twitter tags
    updateMetaTag('twitter:title', seoConfig.title);
    updateMetaTag('twitter:description', seoConfig.description);
    updateMetaTag('twitter:image', seoConfig.image);
    updateMetaTag('twitter:url', currentUrl);

    // Update other meta tags
    updateNameTag('description', seoConfig.description);
    updateNameTag('keywords', seoConfig.keywords);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Update structured data
    if (page) {
      const structuredData = generateStructuredData(page);
      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [seoConfig, currentUrl, page]);

  return null; // This component doesn't render anything
};

export default SEO;
