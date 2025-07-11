# Tech-Themed Portfolio Website

A modern, tech-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a terminal-inspired design with dark mode, monospaced fonts, and developer-focused aesthetics.

## 🚀 Features

- **Tech-Themed Design**: Terminal-inspired UI with green accents and monospaced fonts
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode Default**: Tech-focused dark theme with terminal aesthetics
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Config-Driven**: All content managed through `config/site.config.ts`
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📋 Sections

- **Home**: Terminal-style hero with typing animation
- **About**: Skills display with proficiency indicators
- **Projects**: Featured projects with GitHub integration
- **Experience**: Timeline of work experience
- **LeetCode**: Coding statistics and achievements
- **Contact**: Social links and contact information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom tech theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: JetBrains Mono, Fira Code, Inter
- **Intersection Observer**: react-intersection-observer

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration Guide

All personal info and content live in `/config/site.config.ts`:

### Personal Information

```typescript
personal: {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio description",
  avatar: "/avatar.jpg",
  location: "Your Location",
  email: "your.email@example.com",
}

// Basic profile information (used for contact details)
profile: {
  name: "Your Name",
  email: "your.email@example.com",
  location: "Your Location",
}
```

### Skills Configuration

Configure your skills with proficiency levels (1-5):

```typescript
skills: [
  { 
    name: "React", 
    icon: "react", 
    category: "frontend", 
    proficiency: 5 
  },
  { 
    name: "Node.js", 
    icon: "nodejs", 
    category: "backend", 
    proficiency: 4 
  },
]
```

Categories: `frontend`, `backend`, `database`, `devops`, `other`

### Projects Configuration

Add your projects to the `projects` array:

```typescript
projects: [
  {
    id: "project-id",
    title: "Project Title",
    description: "Project description",
    image: "/projects/project.jpg", // Optional
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com", // Optional
    techStack: ["React", "Node.js", "TypeScript"],
    featured: true, // Featured projects appear first
  },
]
```

### Experience Configuration

Add your work experience:

```typescript
experience: [
  {
    id: "job-id",
    company: "Company Name",
    position: "Job Title",
    location: "Location",
    startDate: "2022-01",
    endDate: "2023-12", // Optional
    current: true, // Set to true if currently employed
    description: ["Achievement 1", "Achievement 2"],
    techStack: ["React", "Node.js"],
  },
]
```

### Social Links Configuration

Configure your social media profiles:

```typescript
social: [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/username",
    icon: "leetcode",
  },
]
```

### LeetCode Stats Configuration

The portfolio now fetches LeetCode statistics directly from the LeetCode GraphQL API. Simply configure your username:

```typescript
leetcode: {
  username: "your-leetcode-username",
}
```

The system will automatically fetch:
- Total problems solved
- Easy/Medium/Hard breakdown
- Global ranking

**Note**: The LeetCode data is fetched through a Next.js API route to avoid CORS issues.

### GitHub Configuration

Configure GitHub integration:

```typescript
github: {
  username: "your-github-username",
  pinnedRepos: ["repo1", "repo2"], // Optional
}
```

## 🔌 API Integration Setup

### GitHub Integration

The portfolio can fetch your GitHub data automatically. To enable this:

1. **Optional**: Create a GitHub Personal Access Token
2. **Add to environment variables**:
   ```bash
   GITHUB_TOKEN=your_github_token
   ```

### LeetCode Integration

The portfolio automatically fetches your LeetCode statistics using a Next.js API route that acts as a proxy:

- **CORS-Free**: Uses internal API route to avoid CORS issues
- **Real-time Data**: Always shows your current LeetCode stats
- **Problem Breakdown**: Shows Easy/Medium/Hard problem counts
- **Global Ranking**: Displays your current LeetCode ranking

The integration uses:
- **API Route**: `app/api/leetcode/route.ts` - handles server-side requests to LeetCode
- **Custom Hook**: `lib/useLeetcodeStats.ts` - manages frontend state and API calls
- **Error Handling**: Comprehensive error handling on both client and server
3. **Update the config** with your GitHub username:
   ```typescript
   github: {
     username: "your-github-username",
     pinnedRepos: ["repo1", "repo2"], // Optional
   }
   ```

### LeetCode Integration

Currently uses mock data from the config. For real-time data:

1. **Implement LeetCode API authentication** (requires session cookies)
2. **Update `lib/leetcode.ts`** with proper API calls
3. **Add environment variables** for authentication

## 🎨 Tech Theme Customization

### Colors

The tech theme uses a dark color palette with green accents:

```javascript
// tailwind.config.js
colors: {
  terminal: {
    bg: '#0a0a0a',
    fg: '#00ff00',
    selection: '#264f78',
    cursor: '#ffffff',
  },
  code: {
    bg: '#1e1e1e',
    fg: '#d4d4d4',
    comment: '#6a9955',
    keyword: '#569cd6',
    string: '#ce9178',
    number: '#b5cea8',
  },
}
```

### Fonts

Monospaced fonts for the tech aesthetic:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
  code: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
}
```

### Animations

Terminal-style animations:

```javascript
animation: {
  'typing': 'typing 3.5s steps(40, end)',
  'blink': 'blink 1s infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `out`
3. **Deploy automatically**

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **SEO**: Meta tags, structured data, and sitemap
- **Accessibility**: WCAG 2.1 AA compliant

## 🔍 SEO

The portfolio includes:

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt

## 🛡️ Security

- **Content Security Policy**: Configured for production
- **HTTPS**: Enforced in production
- **XSS Protection**: Built-in Next.js protection
- **CSRF Protection**: Automatic with Next.js

## 📝 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional
npm run type-check   # TypeScript type checking
npm run analyze      # Bundle analysis
```

## 🎯 Tech Theme Features

- **Terminal-style cards** with green borders and glow effects
- **Monospaced fonts** (JetBrains Mono, Fira Code) for code-like appearance
- **Green accent colors** throughout the interface
- **Typing animations** for terminal-like text effects
- **Glow effects** on interactive elements
- **Dark background** with subtle patterns
- **Code-style scrollbars** with green accents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Monospaced font
- [Fira Code](https://github.com/tonsky/FiraCode) - Monospaced font

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/username/portfolio/issues) page
2. Create a new issue with your question
3. Contact me directly at [your-email@example.com](mailto:your-email@example.com)

---

Made with ❤️ by [Shahdab Aalam Saifi](https://github.com/shahdab-aalam-saifi) 