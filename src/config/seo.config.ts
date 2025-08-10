export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
}

export const defaultSEO: SEOConfig = {
  title: "Shivanshu Singh - Full Stack Developer | React, Django, Python Expert",
  description: "Professional Full Stack Developer specializing in React, Django, Python, and modern web technologies. Building exceptional user experiences and solving complex problems with innovative solutions.",
  keywords: "Full Stack Developer, React Developer, Django Developer, Python Developer, Web Development, Frontend Developer, Backend Developer, Portfolio, Shivanshu Singh",
  image: "https://shivanshu-portfolio-seven.vercel.app/og-image.jpg",
  url: "https://shivanshu-portfolio-seven.vercel.app/",
  type: "website"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    ...defaultSEO,
    title: "Shivanshu Singh - Full Stack Developer | React, Django, Python Expert",
    description: "Professional Full Stack Developer specializing in React, Django, Python, and modern web technologies. Building exceptional user experiences and solving complex problems with innovative solutions.",
    keywords: "Full Stack Developer, React Developer, Django Developer, Python Developer, Web Development, Frontend Developer, Backend Developer, Portfolio, Shivanshu Singh"
  },
  
  about: {
    ...defaultSEO,
    title: "About - Shivanshu Singh | Full Stack Developer Portfolio",
    description: "Learn more about Shivanshu Singh, a passionate Full Stack Developer with expertise in React, Django, and Python. Discover my journey, skills, and passion for web development.",
    keywords: "About Shivanshu Singh, Full Stack Developer Background, Web Developer Experience, React Django Python Developer, Developer Portfolio About",
    url: "https://shivanshu-portfolio-seven.vercel.app/about",
    type: "profile"
  },
  
  experience: {
    ...defaultSEO,
    title: "Experience - Shivanshu Singh | Full Stack Developer Work History",
    description: "Explore my professional experience as a Full Stack Developer. View my work history, skills development, and achievements in React, Django, and Python development.",
    keywords: "Full Stack Developer Experience, React Developer Work History, Django Developer Experience, Python Developer Portfolio, Developer Work Experience",
    url: "https://shivanshu-portfolio-seven.vercel.app/experience",
    type: "profile"
  },
  
  projects: {
    ...defaultSEO,
    title: "Projects - Shivanshu Singh | Full Stack Developer Portfolio",
    description: "Browse my latest projects showcasing expertise in React, Django, and Python. See real-world applications of modern web technologies and innovative solutions.",
    keywords: "React Projects, Django Projects, Python Projects, Full Stack Developer Portfolio, Web Development Projects, Developer Portfolio Projects",
    url: "https://shivanshu-portfolio-seven.vercel.app/projects",
    type: "website"
  },
  
  profile: {
    ...defaultSEO,
    title: "Profile - Shivanshu Singh | Full Stack Developer Skills & Expertise",
    description: "Detailed profile of Shivanshu Singh, Full Stack Developer. Explore my technical skills, certifications, and expertise in modern web development technologies.",
    keywords: "Developer Profile, Full Stack Developer Skills, React Django Python Skills, Web Developer Expertise, Technical Skills Portfolio",
    url: "https://shivanshu-portfolio-seven.vercel.app/profile",
    type: "profile"
  },
  
  contact: {
    ...defaultSEO,
    title: "Contact - Shivanshu Singh | Full Stack Developer",
    description: "Get in touch with Shivanshu Singh, Full Stack Developer. Available for freelance projects, collaborations, and opportunities in React, Django, and Python development.",
    keywords: "Contact Full Stack Developer, Hire React Developer, Django Developer Contact, Python Developer Hire, Web Developer Contact",
    url: "https://shivanshu-portfolio-seven.vercel.app/contact",
    type: "website"
  }
};

export const getSEOConfig = (page: string): SEOConfig => {
  return pageSEO[page] || defaultSEO;
};

export const generateStructuredData = (page: string) => {
  const config = getSEOConfig(page);
  
  const baseData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shivanshu Singh",
    "jobTitle": "Full Stack Developer",
    "description": config.description,
    "url": config.url,
    "sameAs": [
      "https://github.com/shivanshu-singh",
      "https://linkedin.com/in/shivanshu-singh"
    ],
    "knowsAbout": [
      "React", "Django", "Python", "JavaScript", "TypeScript", 
      "Web Development", "Full Stack Development", "Frontend Development", 
      "Backend Development", "API Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  // Add page-specific structured data
  if (page === 'projects') {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projects Portfolio",
      "description": config.description,
      "url": config.url,
      "mainEntity": {
        "@type": "Person",
        "name": "Shivanshu Singh",
        "jobTitle": "Full Stack Developer"
      }
    };
  }

  if (page === 'contact') {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Information",
      "description": config.description,
      "url": config.url,
      "mainEntity": {
        "@type": "Person",
        "name": "Shivanshu Singh",
        "jobTitle": "Full Stack Developer"
      }
    };
  }

  return baseData;
};
