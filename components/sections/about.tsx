"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { siteConfig } from '@/config/site.config'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = {
    frontend: siteConfig.about.skills.filter(skill => skill.category === 'frontend'),
    backend: siteConfig.about.skills.filter(skill => skill.category === 'backend'),
    database: siteConfig.about.skills.filter(skill => skill.category === 'database'),
    devops: siteConfig.about.skills.filter(skill => skill.category === 'devops'),
    other: siteConfig.about.skills.filter(skill => skill.category === 'other'),
  }

  const bio = process.env.NEXT_PUBLIC_BIO || 'I build modern, scalable web applications and love solving complex problems.'

  return (
    <section id="about" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-grotesk text-gray-900 dark:text-gray-100">
            About <span className="bg-gradient-to-r from-accent-violet to-accent-violet/80 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto font-sans">
            {bio}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-grotesk text-accent-violet">Skills & Technologies</h3>
            
            {Object.entries(skillCategories).map(([category, skills]) => (
              skills.length > 0 && (
                <div key={category} className="mb-6">
                  <h4 className="text-lg lg:text-xl font-semibold mb-3 capitalize text-accent-violet font-grotesk">
                    {category}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-4 bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-lg hover:border-accent-violet transition-all duration-200"
                      >
                        <span className="font-medium text-gray-900 dark:text-gray-100 font-sans text-base lg:text-lg">{skill.name}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < skill.proficiency
                                  ? 'bg-accent-violet'
                                  : 'bg-gray-300 dark:bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="p-5 lg:p-7 bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
              <h4 className="text-xl lg:text-2xl font-semibold mb-4 font-grotesk text-accent-violet">What I Do</h4>
              <ul className="space-y-3 lg:space-y-4 text-gray-700 dark:text-gray-300 font-sans text-base lg:text-lg">
                <li>Build responsive and scalable web applications</li>
                <li>Design and implement RESTful APIs</li>
                <li>Optimize applications for performance and SEO</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Contribute to open source projects</li>
              </ul>
            </div>

            <div className="p-5 lg:p-7 bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg">
              <h4 className="text-xl lg:text-2xl font-semibold mb-4 font-grotesk text-accent-violet">My Approach</h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-base lg:text-lg">
                I believe in writing clean, maintainable code and creating user experiences 
                that are both beautiful and functional. I'm always learning new technologies 
                and best practices to stay current in this ever-evolving field.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 