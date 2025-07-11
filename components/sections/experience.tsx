"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building } from 'lucide-react'
import { siteConfig } from '@/config/site.config'

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-gray-100">
            Work <span className="bg-gradient-to-r from-accent-violet to-accent-violet/80 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            My professional journey in software development.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12"
            >
              {/* Experience Item */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Left Side - Duration, Organization, Location */}
                <div className="text-left md:w-48 flex-shrink-0">
                  <div className="mb-2">
                    <div className="text-sm text-accent-violet font-medium font-sans">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })} - {exp.current ? 'Present' : new Date(exp.endDate!).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 font-sans">
                      {exp.company}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 font-sans">
                    <MapPin className="w-3 h-3 text-accent-violet" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right Side - Experience Card */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700">
                    {/* Job Title */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-sans mb-3">
                        {exp.position}
                      </h4>
                    </div>
                    
                    {/* Responsibilities */}
                    <div className="space-y-3 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300 font-sans"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                        >
                          <span className="text-accent-violet mt-1.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-accent-violet/10 text-accent-violet text-xs font-medium font-sans border border-accent-violet/20 hover:bg-accent-violet/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 