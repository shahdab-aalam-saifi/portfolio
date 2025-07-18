import { HomeSection } from '@/components/sections/home'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { LeetCodeSection } from '@/components/sections/leetcode'
import { ContactSection } from '@/components/sections/contact'
import { siteConfig } from '@/config/site.config'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      {siteConfig.showLeetCodeStats && <LeetCodeSection />}
      <ContactSection />
    </div>
  )
} 