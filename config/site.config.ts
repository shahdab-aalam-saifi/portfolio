export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  techStack: string[];
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  proficiency: number; // 1-5
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  techStack: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  ranking: number;
  rating: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  submissionCalendar: Record<string, number>;
  recentSubmissions: Array<{
    title: string;
    titleSlug: string;
    timestamp: number;
    statusDisplay: string;
    lang: string;
  }>;
}

export interface LeetCodeProfile {
  username: string;
  realName?: string;
  userAvatar?: string;
  countryName?: string;
  company?: string;
  jobTitle?: string;
  aboutMe?: string;
  school?: string;
  websites?: string[];
  skillTags?: string[];
  reputation?: number;
  solutionCount?: number;
  starRating?: number;
}

export interface SiteConfig {
  personal: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
    location: string;
    email: string;
  };
  profile: {
    name: string;
    email: string;
    location: string;
  };
  about: {
    description: string;
    skills: Skill[];
  };
  projects: Project[];
  experience: Experience[];
  social: SocialLink[];
  leetcode: {
    username: string;
  };
  github: {
    username: string;
    pinnedRepos?: string[];
  };
  showLeetCodeStats?: boolean;
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Shahdab Aalam Saifi",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.",
    avatar: "/avatar.jpg",
    location: "Pune, Maharashtra",
    email: "saalamsaifi@gmail.com",
  },
  profile: {
    name: "Shahdab Aalam Saifi",
    email: "saalamsaifi@gmail.com",
    location: "Pune, Maharashtra",
  },
  about: {
    description: "I'm a full-stack developer with expertise in React, Node.js, and cloud technologies. I specialize in building scalable web applications and have a passion for clean code and user experience. When I'm not coding, you can find me contributing to open source projects or solving algorithmic challenges on LeetCode.",
    skills: [
      { name: "React", icon: "react", category: "frontend", proficiency: 5 },
      { name: "Next.js", icon: "nextjs", category: "frontend", proficiency: 5 },
      { name: "TypeScript", icon: "typescript", category: "frontend", proficiency: 4 },
      { name: "Tailwind CSS", icon: "tailwind", category: "frontend", proficiency: 4 },
      { name: "Node.js", icon: "nodejs", category: "backend", proficiency: 4 },
      { name: "Express", icon: "express", category: "backend", proficiency: 4 },
      { name: "PostgreSQL", icon: "postgresql", category: "database", proficiency: 3 },
      { name: "MongoDB", icon: "mongodb", category: "database", proficiency: 3 },
      { name: "Docker", icon: "docker", category: "devops", proficiency: 3 },
      { name: "AWS", icon: "aws", category: "devops", proficiency: 3 },
      { name: "Python", icon: "python", category: "backend", proficiency: 3 },
      { name: "Git", icon: "git", category: "other", proficiency: 4 },
    ],
  },
  projects: [
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and SEO optimization.",
      image: "/projects/portfolio.jpg",
      githubUrl: "https://github.com/shahdab-aalam-saifi/portfolio",
      liveUrl: "https://shahdab-aalam-saifi.vercel.app",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "/projects/ecommerce.jpg",
      githubUrl: "https://github.com/shahdab-aalam-saifi/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      featured: true,
    },
    {
      id: "task-manager",
      title: "Task Manager App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/projects/task-manager.jpg",
      githubUrl: "https://github.com/shahdab-aalam-saifi/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      featured: true,
    },
  ],
  experience: [
    {
      id: "senior-developer",
      company: "Allstate",
      position: "Product Engineer",
      location: "Pune, Maharashtra",
      startDate: "2020-03",
      current: true,
      description: [
        "Developed and maintained software solutions using Java, Spring Boot, and React.js to fulfill diverse user requirements.",
        "Collaborated seamlessly across departments, contributing to successful project outcomes.",
        "Applied acquired expertise from Oracle Certified Associate, Java SE 8 certification to enforce coding best practices and ensure code quality.",
        "Designed user-friendly website components using React.js, ensuring seamless integration with the Spring Boot backend.",
        "Managed and organized data within databases, optimizing data retrieval efficiency and ensuring effective storage.",
        "Proficiently managed a range of software functions, including eSignature integration and user authentication, enhancing application versatility.",
        "Spearheaded the creation of prototypes to explore and evaluate emerging technologies, fostering innovative business solutions.",
        "Provided invaluable technical support to cross-functional teams, promoting a culture of knowledge sharing and collaborative growth.",
        "Developed comprehensive software guides, enhancing user comprehension of application functionality and usage.",
        "Skillfully addressed intricate software issues, troubleshooting and optimizing performance to guarantee an uninterrupted user experience.",
        "Collaborated with colleagues on Proof of Concept (POC) initiatives, driving exploration of new business areas and enhancing solution offerings.",
      ],
      techStack: ["Java", "Spring Boot", "React.js", "Oracle", "Microsoft SQL Server", "Docker", "DataDog", "Automation Testing"],
    }, {
      id: "senior-executive",
      company: "Vodafone",
      position: "Senior Executive",
      location: "Pune, Maharashtra",
      startDate: "2017-09",
      endDate: "2020-03",
      current: false,
      description: [
        "Collaborated with the product owner to successfully implement 3 new features named Network Monitoring, Notification Capture and Dynamic Events into the library, ensuring a seamless integration with the existing codebase.",
        "Regularly analyzed events on Splunk, resulting in valuable insights that led to the implementation of 10 new features and improvements suggested to the product owner.",
        "Conducted extensive testing of the library, achieving a 95% quality and reliability rate before deployment.",
        "Worked closely with 21 clients to assist in the integration of the library with their applications, providing exceptional technical support and guidance.",
        "Investigated and successfully resolved 8 issues raised by clients, identifying the root cause and delivering effective solutions for improved client satisfaction.",
      ],
      techStack: ["Java", "React", "Splunk", "Testing"],
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/shahdab-aalam-saifi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shahdab-aalam-saifi",
      icon: "linkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/shahdab-aalam-saifi",
      icon: "leetcode",
    },
  ],
  leetcode: {
    username: "shahdab-aalam-saifi",
  },
  github: {
    username: "shahdab-aalam-saifi",
    pinnedRepos: ["portfolio", "ecommerce-platform", "task-manager"],
  },
  showLeetCodeStats: true,
}; 