import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Logo Container */}
        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          {/* SAS Initials with clean font */}
          <span className="text-white font-bold text-xl tracking-wide font-sans">
            SAS
          </span>
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
      </div>
      
      {/* Full Name with clean font */}
      <div className="hidden sm:block">
        <div className="text-gray-900 dark:text-gray-100 font-semibold text-lg font-sans">
          Shahdab Aalam Saifi
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium font-sans">
          Full Stack Developer
        </div>
      </div>
    </Link>
  )
}

// SVG version with clean fonts and violet theme
export function LogoSVG() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        className="group-hover:scale-105 transition-transform duration-300"
        aria-label="SAS – Shahdab Aalam Saifi Logo"
      >
        {/* Background with violet gradient */}
        <defs>
          <linearGradient id="violetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Rounded rectangle background */}
        <rect 
          x="2" 
          y="2" 
          width="44" 
          height="44" 
          rx="12" 
          fill="url(#violetGradient)"
          className="group-hover:shadow-lg transition-shadow duration-300"
          filter="url(#glow)"
        />
        
        {/* SAS Text with clean font styling */}
        <text 
          x="24" 
          y="32" 
          textAnchor="middle" 
          fill="white" 
          fontSize="16" 
          fontWeight="bold"
          letterSpacing="1"
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
        >
          SAS
        </text>
        
        {/* Subtle border */}
        <rect 
          x="2" 
          y="2" 
          width="44" 
          height="44" 
          rx="12" 
          fill="none" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
      </svg>
      
      {/* Full Name with clean font */}
      <div className="hidden sm:block">
        <div className="text-gray-900 dark:text-gray-100 font-semibold text-lg font-sans">
          Shahdab Aalam Saifi
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium font-sans">
          Full Stack Developer
        </div>
      </div>
    </Link>
  )
}

// Alternative version with clean, professional styling
export function CreativeLogo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div className="relative">
        {/* Clean logo container */}
        <div className="w-12 h-12 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 relative overflow-hidden">
          {/* SAS Initials with clean font */}
          <span className="text-white font-bold text-xl tracking-wide relative z-10 font-sans">
            SAS
          </span>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-purple-600/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
      </div>
      
      {/* Full Name with clean font */}
      <div className="hidden sm:block">
        <div className="text-gray-900 dark:text-gray-100 font-bold text-lg tracking-wide font-sans">
          Shahdab Aalam Saifi
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wide font-sans">
          Full Stack Developer
        </div>
      </div>
    </Link>
  )
} 