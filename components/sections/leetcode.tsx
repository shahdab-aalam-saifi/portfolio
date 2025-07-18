"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Target, TrendingUp, Code, Loader2 } from 'lucide-react'
import { useLeetcodeStats, formatRanking, calculateCompletionPercentage } from '@/lib/useLeetcodeStats'
import { siteConfig } from '@/config/site.config'

export function LeetCodeSection() {
  if (!siteConfig.showLeetCodeStats) {
    return (
      <section id="leetcode" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mt-4 font-sans">LeetCode stats are hidden.</p>
          </div>
        </div>
      </section>
    )
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { stats, loading, error } = useLeetcodeStats()

  if (loading) {
    return (
      <section id="leetcode" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
        <div className="container-max">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-accent-violet" />
            <p className="text-gray-600 dark:text-gray-400 mt-4 font-sans">Loading LeetCode stats...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="leetcode" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
        <div className="container-max">
          <div className="text-center">
            <p className="text-red-500 mt-4 font-sans">Error loading LeetCode stats: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  if (!stats) {
    return (
      <section id="leetcode" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mt-4 font-sans">No LeetCode data available</p>
          </div>
        </div>
      </section>
    )
  }

  const completionPercentage = calculateCompletionPercentage(stats)

  return (
    <section id="leetcode" className="section-padding bg-white dark:bg-[#10151a] transition-colors duration-300">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-gray-900 dark:text-gray-100">
            LeetCode <span className="bg-gradient-to-r from-accent-violet to-accent-violet/80 bg-clip-text text-transparent">Stats</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            My journey in competitive programming and algorithmic problem solving.
          </p>
          {error && (
            <p className="text-sm text-red-500 mt-2 font-sans">
              {error} - Showing cached data
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-accent-violet" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-accent-violet font-sans">{stats.totalSolved}</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans text-center">Problems Solved</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-500 font-sans">{formatRanking(stats.ranking)}</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans text-center">Global Ranking</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent-violet" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-accent-violet font-sans">{stats.rating}</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans text-center">Contest Rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-500 font-sans">{completionPercentage}%</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-sans text-center">Completion Rate</p>
          </motion.div>
        </div>



        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 font-sans text-accent-violet">
              <span className="w-3 h-3 bg-accent-violet rounded-full"></span>
              Easy Problems
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-violet mb-2 font-sans">{stats.easySolved}</div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-accent-violet h-2 rounded-full" 
                  style={{ width: `${(stats.easySolved / 800) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-sans">~800 total</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 font-sans text-yellow-500">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              Medium Problems
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2 font-sans">{stats.mediumSolved}</div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${(stats.mediumSolved / 1600) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-sans">~1600 total</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-white dark:bg-[#181f27] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 font-sans text-red-500">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Hard Problems
            </h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2 font-sans">{stats.hardSolved}</div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full" 
                  style={{ width: `${(stats.hardSolved / 600) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-sans">~600 total</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href={`https://leetcode.com/${stats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-accent-violet text-white font-sans font-semibold shadow hover:bg-accent-violet/80 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            View My LeetCode Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
} 