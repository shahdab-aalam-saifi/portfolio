"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Terminal, Code } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { profileName, profileEmail, profileLocation, personalTitle, personalBio } from '@/lib/config-utils'
import { useEffect, useState } from 'react'

export function HomeSection() {
  const name = profileName()
  const title = personalTitle()
  const email = profileEmail()
  const location = profileLocation()
  const bio = personalBio()
  const [displayed, setDisplayed] = useState('')
  const [showingName, setShowingName] = useState(true)

  useEffect(() => {
    let i = 0
    let forward = true
    let timeout: NodeJS.Timeout
    const text = showingName ? `I'm ${name}` : `I'm a ${title}`
    setDisplayed('')
    function type() {
      if (forward) {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i > text.length) {
          forward = false
          timeout = setTimeout(type, 1200)
          return
        }
      } else {
        setDisplayed(text.slice(0, i - 1))
        i--
        if (i < 0) {
          setShowingName((prev) => !prev)
          return
        }
      }
      timeout = setTimeout(type, 100)
    }
    type()
    return () => {
      clearTimeout(timeout)
    }
  }, [showingName, name, title])

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white dark:bg-[#10151a] transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/10 to-accent-violet/20 dark:from-accent-violet/20 dark:to-accent-violet/30">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300b4d8' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          {/* Animated < > and typing name/title, no circle */}
          <div className="mb-8 flex justify-center items-center">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-violet select-none dark:text-white">&lt;</span>
            <div className="px-2 sm:px-4 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-dankmono typing-cursor text-gray-900 dark:text-white whitespace-nowrap leading-none">{displayed}</span>
            </div>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent-violet select-none dark:text-white">&gt;</span>
          </div>

          {/* Bio */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-sans">
            {bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-accent-violet text-white font-sans font-semibold shadow hover:bg-accent-violet/80 transition-colors duration-200 flex items-center gap-2 text-lg"
            >
              View My Work
            </a>
            <a
              href={`mailto:${email}`}
              className="px-8 py-3 rounded-lg border border-accent-violet text-accent-violet font-sans font-semibold hover:bg-accent-violet hover:text-white transition-colors duration-200 flex items-center gap-2 text-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Location */}
          <div className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 font-sans">
            📍 {location}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToNext}
              className="flex flex-col items-center text-accent-violet hover:text-accent-violet/80 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg mb-2 font-sans">Scroll Down</span>
              <ChevronDown className="w-5 h-5 animate-bounce-slow" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 