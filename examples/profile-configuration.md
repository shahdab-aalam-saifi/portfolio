# Profile Configuration Example

This portfolio now has a configurable profile system that allows you to easily update personal information.

## Configuration Structure

### Basic Profile Information

The `profile` object contains the essential contact information:

```typescript
// config/site.config.ts
export const siteConfig: SiteConfig = {
  profile: {
    name: "Your Name",
    email: "your.email@example.com", 
    location: "Your City, Country",
  },
  // ... other config
};
```

### Extended Personal Information

The `personal` object contains additional information for the portfolio:

```typescript
personal: {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your professional bio description",
  avatar: "/path/to/avatar.jpg",
  location: "Your Location",
  email: "your.email@example.com",
},
```

## Where These Values Are Used

### Profile Values (Basic Info)
- **Name**: Page titles, metadata, footer copyright
- **Email**: Contact section, mailto links
- **Location**: Contact section, home page location display

### Personal Values (Extended Info)
- **Name**: Used in typing animation
- **Title**: Page titles, metadata
- **Bio**: Home page description, metadata
- **Avatar**: Profile image (if implemented)
- **Location**: Alternative location display
- **Email**: Alternative email display

## Safe Access

The system includes safe accessors that provide fallback values:

```typescript
import { profileName, profileEmail, profileLocation } from '@/lib/config-utils'

// These functions return fallback values if config is missing
const name = profileName() // Returns "Developer" if missing
const email = profileEmail() // Returns "contact@example.com" if missing
const location = profileLocation() // Returns "Location not specified" if missing
```

## Example Updates

### Change Your Name
```typescript
profile: {
  name: "Jane Smith", // Update this
  email: "jane.smith@example.com",
  location: "New York, USA",
},
```

### Change Your Email
```typescript
profile: {
  name: "Your Name",
  email: "new.email@example.com", // Update this
  location: "Your Location",
},
```

### Change Your Location
```typescript
profile: {
  name: "Your Name", 
  email: "your.email@example.com",
  location: "London, UK", // Update this
},
```

## Benefits

✅ **Centralized Configuration**: All personal info in one place  
✅ **Safe Fallbacks**: Graceful handling of missing values  
✅ **Type Safety**: TypeScript interfaces ensure correct structure  
✅ **Easy Updates**: Change values without touching component code  
✅ **Consistent Display**: Same values used across all components  

## Migration from Hardcoded Values

The system automatically replaced all hardcoded references:
- ❌ `"John Doe"` → ✅ `profileName()`
- ❌ `"john.doe@email.com"` → ✅ `profileEmail()`
- ❌ `"San Francisco, CA"` → ✅ `profileLocation()`

All values now update dynamically from the configuration file. 