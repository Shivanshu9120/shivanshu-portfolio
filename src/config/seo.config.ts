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
  keywords: "Full Stack Developer, React Developer, Django Developer, Python Developer, Web Development, Frontend Developer, Backend Developer, Portfolio, Shivanshu Singh, Shivanshu Singh Portfolio, Shivanshu Singh Lucknow",
  image: "https://shivanshu-portfolio-seven.vercel.app/og-image.jpg",
  url: "https://shivanshu-portfolio-seven.vercel.app/",
  type: "website"
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    ...defaultSEO,
    title: "Shivanshu Singh - Full Stack Developer | React, Django, Python Expert",
    description: "Professional Full Stack Developer specializing in React, Django, Python, and modern web technologies. Building exceptional user experiences and solving complex problems with innovative solutions.",
    keywords: "Full Stack Developer, React Developer, Django Developer, Python Developer, Web Development, Frontend Developer, Backend Developer, Portfolio, Shivanshu Singh, Shivanshu Singh Portfolio, Shivanshu Singh Lucknow"
  },
  
  about: {
    ...defaultSEO,
    title: "About - Shivanshu Singh | Full Stack Developer Portfolio",
    description: "Learn more about Shivanshu Singh, a passionate Full Stack Developer with expertise in React, Django, and Python. Discover my journey, skills, and passion for web development.",
    keywords: "About Shivanshu Singh, Full Stack Developer Background, Web Developer Experience, React Django Python Developer, Developer Portfolio About, Shivanshu Singh Lucknow",
    url: "https://shivanshu-portfolio-seven.vercel.app/about",
    type: "profile"
  },
  
  experience: {
    ...defaultSEO,
    title: "Experience - Shivanshu Singh | Full Stack Developer Work History",
    description: "Explore my professional experience as a Full Stack Developer. View my work history, skills development, and achievements in React, Django, and Python development.",
    keywords: "Full Stack Developer Experience, React Developer Work History, Django Developer Experience, Python Developer Portfolio, Developer Work Experience, Shivanshu Singh Lucknow",
    url: "https://shivanshu-portfolio-seven.vercel.app/experience",
    type: "profile"
  },
  
  projects: {
    ...defaultSEO,
    title: "Projects - Shivanshu Singh | Full Stack Developer Portfolio",
    description: "Browse my latest projects showcasing expertise in React, Django, and Python. See real-world applications of modern web technologies and innovative solutions.",
    keywords: "React Projects, Django Projects, Python Projects, Full Stack Developer Portfolio, Web Development Projects, Developer Portfolio Projects, Shivanshu Singh Projects",
    url: "https://shivanshu-portfolio-seven.vercel.app/projects",
    type: "website"
  },
  
  profile: {
    ...defaultSEO,
    title: "Profile - Shivanshu Singh | Full Stack Developer Skills & Expertise",
    description: "Detailed profile of Shivanshu Singh, Full Stack Developer. Explore my technical skills, certifications, and expertise in modern web development technologies.",
    keywords: "Developer Profile, Full Stack Developer Skills, React Django Python Skills, Web Developer Expertise, Technical Skills Portfolio, Shivanshu Singh Skills",
    url: "https://shivanshu-portfolio-seven.vercel.app/profile",
    type: "profile"
  },
  
  contact: {
    ...defaultSEO,
    title: "Contact - Shivanshu Singh | Full Stack Developer",
    description: "Get in touch with Shivanshu Singh, Full Stack Developer. Available for freelance projects, collaborations, and opportunities in React, Django, and Python development.",
    keywords: "Contact Full Stack Developer, Hire React Developer, Django Developer Contact, Python Developer Hire, Web Developer Contact, Shivanshu Singh Contact",
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
    "url": "https://shivanshu-portfolio-seven.vercel.app/",
    "image": "https://shivanshu-portfolio-seven.vercel.app/circular_favicon.png",
    "sameAs": [
      "https://github.com/Shivanshu9120",
      "https://www.linkedin.com/in/shivanshu-singh-7bb733220/",
      "https://x.com/Shivaanshusingh?t=nSV4Rcsf_cj9kzI9zyofkg&s=09",
      "https://leetcode.com/u/Shivanshu_018/",
      "https://www.geeksforgeeks.org/user/kshatriyas1g55/"
    ],
    "knowsAbout": [
      "React", "Django", "Python", "JavaScript", "TypeScript", 
      "Web Development", "Full Stack Development", "Frontend Development", 
      "Backend Development", "API Development", "MongoDB", "Node.js", "Express",
      "SQL", "Git", "DevOps", "Tailwind CSS", "MERN Stack"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.8467",
      "longitude": "80.9462"
    },
    "telephone": "+919140284510",
    "email": "kshatriyasarkar214@gmail.com",
    "gender": "Male",
    "nationality": "Indian",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance",
      "url": "https://shivanshu-portfolio-seven.vercel.app/"
    }
  };

  // Add page-specific structured data
  if (page === 'projects') {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projects Portfolio | Shivanshu Singh",
      "description": config.description,
      "url": config.url,
      "about": baseData,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 6,
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "name": "Seamaster AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "RAG-based AI chatbot designed for seafarers to retrieve maritime knowledge."
          },
          {
            "@type": "SoftwareApplication",
            "name": "Explorers",
            "applicationCategory": "SocialNetworkingApplication",
            "operatingSystem": "All",
            "description": "Curation and recommendation platform allowing users to discover and share themed lists."
          },
          {
            "@type": "SoftwareApplication",
            "name": "Club Management Website",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "description": "MERN stack platform with role-based dashboards for club management."
          },
          {
            "@type": "SoftwareApplication",
            "name": "Full Stack Chat Application",
            "applicationCategory": "CommunicationApplication",
            "operatingSystem": "All",
            "description": "Real-time chat app built with MERN stack and Socket.io."
          }
        ]
      }
    };
  }

  if (page === 'contact') {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Shivanshu Singh",
      "description": config.description,
      "url": config.url,
      "mainEntity": baseData
    };
  }

  return baseData;
};
