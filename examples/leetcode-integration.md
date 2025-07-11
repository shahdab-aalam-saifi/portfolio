# LeetCode Integration Example

This portfolio fetches LeetCode statistics through a Next.js API route that acts as a proxy to avoid CORS issues.

## How It Works

### 1. API Route Proxy
The system uses a Next.js API route at `/api/leetcode` that acts as a proxy to LeetCode's GraphQL API:

```typescript
// app/api/leetcode/route.ts
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  
  // Forward request to LeetCode GraphQL API
  const response = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: LEETCODE_QUERY,
      variables: { username },
    }),
  });
  
  return NextResponse.json(await response.json());
}
```

### 2. Custom Hook
The `useLeetcodeStats` hook calls the internal API route:

```typescript
import { useLeetcodeStats } from '@/lib/useLeetcodeStats';

function LeetCodeSection() {
  const { stats, profile, loading, error } = useLeetcodeStats();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h2>Problems Solved: {stats?.totalSolved}</h2>
      <p>Ranking: {stats?.ranking}</p>
      {profile?.realName && <p>Name: {profile.realName}</p>}
    </div>
  );
}
```

### 3. Configuration
Simply update your username in `config/site.config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  // ... other config
  leetcode: {
    username: "your-leetcode-username",
  },
  // ... other config
};
```

## Features

### ✅ What's Included
- **Real-time Stats**: Always shows current LeetCode data
- **Problem Breakdown**: Easy/Medium/Hard counts
- **Global Ranking**: Current LeetCode ranking
- **Error Handling**: Graceful fallbacks if API fails
- **Loading States**: Proper loading indicators
- **CORS-Free**: Uses internal API route to avoid CORS issues

### 🔧 Technical Details
- **API Route**: `/api/leetcode`
- **GraphQL Endpoint**: `https://leetcode.com/graphql` (server-side)
- **HTTP Method**: GET (frontend) → POST (server-side)
- **Headers**: `Content-Type: application/json`
- **CORS**: Handled by Next.js API route
- **Error Handling**: Comprehensive error states
- **TypeScript**: Fully typed interfaces

### 📊 Data Retrieved
- Total problems solved
- Easy/Medium/Hard breakdown
- Global ranking
- Contest rating (if available)

## Benefits

1. **CORS-Free**: No CORS issues since requests go through same origin
2. **Real-time Data**: Always current LeetCode stats
3. **Simple Deployment**: Uses Next.js built-in API routes
4. **Better Performance**: Server-side API calls are faster
5. **Automatic Updates**: Stats update automatically
6. **Error Handling**: Comprehensive error handling on both client and server

## Troubleshooting

### API Route Issues
If you encounter issues with the API route, check:

1. **File Location**: Ensure `app/api/leetcode/route.ts` exists
2. **Next.js Version**: Requires Next.js 13+ with App Router
3. **Development Server**: Restart the dev server after changes
4. **Network Tab**: Check browser network tab for API calls

### Error Handling
The hook includes comprehensive error handling:
- Network errors
- GraphQL errors
- User not found
- Invalid responses

### Fallback Data
If the API fails, the component gracefully handles the error and shows appropriate messaging. 