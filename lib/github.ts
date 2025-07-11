import { siteConfig } from '@/config/site.config';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

// Note: For production, you should use environment variables for the GitHub token
// const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // 'Authorization': `token ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // 'Authorization': `token ${GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    return repos.filter((repo: GitHubRepo) => !repo.name.includes('.github.io'));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

export async function fetchPinnedRepos(username: string, pinnedRepos?: string[]): Promise<GitHubRepo[]> {
  try {
    if (!pinnedRepos || pinnedRepos.length === 0) {
      return [];
    }

    const repos = await fetchGitHubRepos(username);
    return repos.filter(repo => pinnedRepos?.includes(repo.name) || false);
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    return [];
  }
}

// Fallback function that returns mock data when API is not available
export function getMockGitHubData() {
  return {
    user: {
      login: siteConfig.github.username,
      id: 123456,
      avatar_url: 'https://avatars.githubusercontent.com/u/123456?v=4',
      name: siteConfig.personal.name,
      bio: siteConfig.personal.bio,
      public_repos: 25,
      followers: 150,
      following: 50,
      created_at: '2019-01-01T00:00:00Z',
    },
    repos: siteConfig.projects.map(project => ({
      id: Math.random() * 1000,
      name: project.id,
      full_name: `${siteConfig.github.username}/${project.id}`,
      description: project.description,
      html_url: project.githubUrl,
      homepage: project.liveUrl || null,
      stargazers_count: Math.floor(Math.random() * 100),
      forks_count: Math.floor(Math.random() * 50),
      language: project.techStack[0] || 'JavaScript',
      topics: project.techStack,
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z',
    })),
  };
} 