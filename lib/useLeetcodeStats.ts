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



const LEETCODE_API_URL = '/api/leetcode';

export function useLeetcodeStats(username?: string) {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        setLoading(true);
        setError(null);

        const targetUsername = username || siteConfig.leetcode.username;

        const response = await fetch(`${LEETCODE_API_URL}?username=${encodeURIComponent(targetUsername)}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
          console.error('API error:', data.error);
          throw new Error(data.error);
        }

        if (data.errors) {
          console.error('GraphQL errors:', data.errors);
          throw new Error('Failed to fetch LeetCode data');
        }

        const matchedUser = data.data?.matchedUser;
        const allQuestionsCount = data.data?.allQuestionsCount;

        if (!matchedUser) {
          throw new Error('User not found');
        }

        // Parse submission stats
        const submitStats = matchedUser.submitStats?.acSubmissionNum || [];
        let easySolved = 0;
        let mediumSolved = 0;
        let hardSolved = 0;
        let totalSolved = 0;

        submitStats.forEach((stat: any) => {
          const count = stat.count || 0;
          switch (stat.difficulty) {
            case 'Easy':
              easySolved = count;
              break;
            case 'Medium':
              mediumSolved = count;
              break;
            case 'Hard':
              hardSolved = count;
              break;
            case 'All':
              totalSolved = count;
              break;
          }
        });

        // Create stats object
        const leetcodeStats: LeetCodeStats = {
          username: matchedUser.username,
          totalSolved,
          ranking: matchedUser.profile?.ranking || 0,
          rating: 0, // Contest rating not available in this query
          easySolved,
          mediumSolved,
          hardSolved,
          submissionCalendar: {},
          recentSubmissions: [],
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