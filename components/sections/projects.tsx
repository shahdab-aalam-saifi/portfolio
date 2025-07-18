"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star, GitBranch, Code } from 'lucide-react'
import { siteConfig } from '@/config/site.config'

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-gray-100">
            Featured <span className="bg-gradient-to-r from-accent-violet to-accent-violet/80 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center max-w-6xl mx-auto">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col"
            >
              {project.image && (
                <div className="h-48 bg-gradient-to-br from-accent-violet to-accent-violet/80 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white font-sans">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>
              )}
              
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 font-sans">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 font-sans">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-accent-violet/10 text-accent-violet text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent-violet hover:text-accent-violet/80 transition-colors duration-200 font-sans"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent-violet/80 hover:text-accent-violet transition-colors duration-200 font-sans"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 