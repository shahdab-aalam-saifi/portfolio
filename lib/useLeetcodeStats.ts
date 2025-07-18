import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site.config';

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

// Use a public LeetCode stats API that doesn't have CORS issues
const LEETCODE_STATS_API = 'https://leetcode-stats-api.herokuapp.com';

export function useLeetcodeStats(username?: string) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    // Don't fetch if LeetCode stats are disabled
    if (!siteConfig.showLeetCodeStats) {
      setLoading(false);
      return;
    }

    async function fetchLeetCodeData() {
      try {
        setLoading(true);
        setError(null);

        const targetUsername = username || siteConfig.leetcode.username;

        console.log('Attempting to fetch LeetCode data for:', targetUsername);
        
        // Fetch from public LeetCode stats API
        const response = await fetch(`${LEETCODE_STATS_API}/${targetUsername}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'error') {
          throw new Error(data.message || 'Failed to fetch LeetCode data');
        }

        // Create stats object from the public API response
        const leetcodeStats: LeetCodeStats = {
          username: data.username,
          totalSolved: data.totalSolved,
          ranking: data.ranking,
          rating: data.rating,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          submissionCalendar: data.submissionCalendar || {},
          recentSubmissions: data.recentSubmissions || [],
        };

        setStats(leetcodeStats);
      } catch (err) {
        console.error('Failed to fetch LeetCode stats:', err);
        setError(err instanceof Error ? err.message : 'Failed to load LeetCode stats');
      } finally {
        setLoading(false);
      }
    }

    fetchLeetCodeData();
  }, [username]);

  return { stats, loading, error };
}

// Helper function to get difficulty color
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'text-green-500';
    case 'medium':
      return 'text-yellow-500';
    case 'hard':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
}

// Helper function to format ranking
export function formatRanking(ranking: number): string {
  if (ranking < 1000) {
    return ranking.toString();
  } else if (ranking < 1000000) {
    return `${(ranking / 1000).toFixed(1)}k`;
  } else {
    return `${(ranking / 1000000).toFixed(1)}M`;
  }
}

// Helper function to calculate completion percentage
export function calculateCompletionPercentage(stats: LeetCodeStats): number {
  const totalProblems = stats.easySolved + stats.mediumSolved + stats.hardSolved;
  // Assuming there are approximately 2000+ problems on LeetCode
  const totalAvailableProblems = 2500;
  return Math.round((totalProblems / totalAvailableProblems) * 100);
} 