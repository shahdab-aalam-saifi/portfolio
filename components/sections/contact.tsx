"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Twitter, Code } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { profileName, profileEmail, profileLocation } from '@/lib/config-utils'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    leetcode: Code,
  }

  const email = profileEmail()
  const location = profileLocation()

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-grotesk text-gray-900 dark:text-gray-100">
            Get In <span className="bg-gradient-to-r from-accent-violet to-accent-violet/80 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-4 lg:p-6 bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg"
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 font-grotesk text-accent-violet">Let's Connect</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-violet" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-accent-violet transition-colors duration-200 font-sans text-sm lg:text-base"
                >
                  {email}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 text-accent-violet">📍</span>
                <span className="text-gray-700 dark:text-gray-300 font-sans text-sm lg:text-base">
                  {location}
                </span>
              </div>
            </div>

            <div className="mt-6 lg:mt-8">
              <h4 className="text-base lg:text-lg font-semibold mb-4 font-grotesk text-accent-violet">Available for:</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 font-sans text-sm lg:text-base">
                <li>Full-time opportunities</li>
                <li>Freelance projects</li>
                <li>Open source contributions</li>
                <li>Technical discussions</li>
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-4 lg:p-6 bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg"
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 font-grotesk text-accent-violet">Follow Me</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
              {siteConfig.social.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 lg:p-4 rounded-lg bg-gray-100 dark:bg-[#232b36] hover:bg-accent-violet/10 border border-gray-200 dark:border-gray-700 hover:border-accent-violet transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5 text-accent-violet" />
                    <span className="font-medium text-gray-900 dark:text-gray-100 font-sans text-sm lg:text-base">{social.name}</span>
                  </a>
                )
              })}
            </div>

            <div className="mt-6 lg:mt-8">
              <h4 className="text-base lg:text-lg font-semibold mb-4 font-grotesk text-accent-violet">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="#projects"
                  className="block text-accent-violet hover:text-accent-violet/80 transition-colors duration-200 font-sans text-sm lg:text-base"
                >
                  → View My Projects
                </a>
                <a
                  href="#experience"
                  className="block text-accent-violet hover:text-accent-violet/80 transition-colors duration-200 font-sans text-sm lg:text-base"
                >
                  → Check My Experience
                </a>
                <a
                  href="#leetcode"
                  className="block text-accent-violet hover:text-accent-violet/80 transition-colors duration-200 font-sans text-sm lg:text-base"
                >
                  → See My LeetCode Stats
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 font-sans">
            © {new Date().getFullYear()} {profileName()}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 