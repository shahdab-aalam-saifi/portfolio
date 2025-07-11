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
      company: "TechCorp",
      position: "Senior Full Stack Developer",
      location: "Pune, Maharashtra",
      startDate: "2022-01",
      current: true,
      description: [
        "Led development of multiple web applications using React, Node.js, and cloud technologies",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes",
        "Collaborated with cross-functional teams to deliver high-quality products",
      ],
      techStack: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    }, {
      id: "senior-developer2",
      company: "TechCorp",
      position: "Senior Full Stack Developer",
      location: "Pune, Maharashtra",
      startDate: "2022-01",
      current: true,
      description: [
        "Led development of multiple web applications using React, Node.js, and cloud technologies",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines and improved deployment processes",
        "Collaborated with cross-functional teams to deliver high-quality products",
      ],
      techStack: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
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
}; 