import { unstable_cache } from 'next/cache';
import { siteConfig } from '@/config/site';

type PlatformProblemCounts = {
  leetcode: number | null;
  geeksforgeeks: number | null;
};

function isCount(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

async function fetchLeetCodeCount(): Promise<number | null> {
  try {
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: siteConfig.links.leetcode,
      },
      body: JSON.stringify({
        query:
          'query userProblemsSolved($username: String!) { matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count } } } }',
        variables: { username: siteConfig.links.leetcodeUsername },
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return null;

    const result = await response.json();
    const counts = result?.data?.matchedUser?.submitStats?.acSubmissionNum;
    const total = counts?.find(
      (item: { difficulty?: string }) => item.difficulty === 'All'
    )?.count;

    return isCount(total) ? total : null;
  } catch {
    return null;
  }
}

async function fetchGeeksForGeeksCount(): Promise<number | null> {
  try {
    const url = new URL(
      'https://authapi.geeksforgeeks.org/api-get/user-profile-info/'
    );
    url.search = new URLSearchParams({
      handle: siteConfig.links.geeksforgeeksUsername,
      article_count: 'false',
      redirect: 'true',
    }).toString();

    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return null;

    const result = await response.json();
    const count = result?.data?.total_problems_solved;
    return isCount(count) ? count : null;
  } catch {
    return null;
  }
}

const getCachedPlatformProblemCounts = unstable_cache(
  async (): Promise<PlatformProblemCounts> => {
    const [leetcode, geeksforgeeks] = await Promise.all([
      fetchLeetCodeCount(),
      fetchGeeksForGeeksCount(),
    ]);

    return { leetcode, geeksforgeeks };
  },
  ['coding-platform-problem-counts-v1'],
  { revalidate: 60 * 60 }
);

export function getCodingProblemStats() {
  return getCachedPlatformProblemCounts();
}
