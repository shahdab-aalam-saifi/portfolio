import { siteConfig } from '@/config/site.config';

export function getProfileValue(key: 'name' | 'email' | 'location', fallback: string = ''): string {
  try {
    const value = siteConfig.profile?.[key];
    return value || fallback;
  } catch (error) {
    console.warn(`Failed to get profile.${key}:`, error);
    return fallback;
  }
}

export function getPersonalValue(key: 'name' | 'title' | 'bio' | 'avatar' | 'location' | 'email', fallback: string = ''): string {
  try {
    const value = siteConfig.personal?.[key];
    return value || fallback;
  } catch (error) {
    console.warn(`Failed to get personal.${key}:`, error);
    return fallback;
  }
}

// Safe accessors for common values
export const profileName = () => getProfileValue('name', 'Developer');
export const profileEmail = () => getProfileValue('email', 'contact@example.com');
export const profileLocation = () => getProfileValue('location', 'Location not specified');
export const personalTitle = () => getPersonalValue('title', 'Developer');
export const personalBio = () => getPersonalValue('bio', 'A passionate developer.'); 