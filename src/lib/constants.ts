/**
 * Application Constants
 * Centralized configuration for the portfolio application
 */

// ============================================
// SCROLL CONFIGURATION
// ============================================
export const SCROLL_CONFIG = {
  VISIBILITY_THRESHOLD: 300,
  SMOOTH_BEHAVIOR: 'smooth' as ScrollBehavior,
  CIRCLE_RADIUS: 24,
  PASSIVE_LISTENER: true,
} as const;

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export const NAVIGATION_CONFIG = {
  ITEMS_DISTANCE: 90, // Distance from center button in pixels
  TRANSITION_DELAY: 50, // Delay between each item animation in ms
  ICON_SIZE: 'w-5 h-5',
  MOBILE_BREAKPOINT: 1024, // lg breakpoint
} as const;

// ============================================
// ANIMATION CONFIGURATION
// ============================================
export const ANIMATION_CONFIG = {
  // Hero blob animations
  BLOB_DELAYS: [0, 2000, 4000] as const,
  
  // General animation durations
  FADE_DURATION: 600,
  SLIDE_DURATION: 600,
  SCALE_DURATION: 400,
  
  // Stagger delays for lists
  STAGGER_DELAY: 100,
  
  // Hover transitions
  HOVER_DURATION: 300,
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================
export const CONTACT_INFO = {
  // Personal
  NAME: 'Haryono',
  TITLE: 'IT Network & Infrastructure Specialist',
  
  // Contact methods
  PHONE: '628112633779',
  PHONE_DISPLAY: '+62 811-2633-779',
  EMAIL: 'masharyono02@gmail.com',
  
  // Social media
  LINKEDIN: 'https://www.linkedin.com/in/haryon0/',
  GITHUB: 'https://github.com/yourusername', // Update with actual GitHub
  WHATSAPP: 'https://wa.me/628112633779',
  
  // Location
  LOCATION: 'Indonesia',
  TIMEZONE: 'Asia/Jakarta',
} as const;

// ============================================
// PROJECT CATEGORIES
// ============================================
export const PROJECT_CATEGORIES = {
  INFRASTRUCTURE: 'Infrastructure',
  NETWORK: 'Network',
  COMMUNICATION: 'Communication',
  TELECOMMUNICATIONS: 'Telecommunications',
} as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[keyof typeof PROJECT_CATEGORIES];

// ============================================
// CATEGORY STYLING
// ============================================
export const CATEGORY_STYLES: Record<ProjectCategory, {
  color: string;
  gradient: string;
  icon: string;
}> = {
  [PROJECT_CATEGORIES.INFRASTRUCTURE]: {
    color: 'bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800',
    gradient: 'from-blue-500 to-blue-600',
    icon: '🏗️'
  },
  [PROJECT_CATEGORIES.NETWORK]: {
    color: 'bg-green-500/10 text-green-600 border-green-200 dark:border-green-800',
    gradient: 'from-green-500 to-green-600',
    icon: '🌐'
  },
  [PROJECT_CATEGORIES.COMMUNICATION]: {
    color: 'bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-800',
    gradient: 'from-purple-500 to-purple-600',
    icon: '📡'
  },
  [PROJECT_CATEGORIES.TELECOMMUNICATIONS]: {
    color: 'bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-800',
    gradient: 'from-orange-500 to-orange-600',
    icon: '📞'
  }
} as const;

// ============================================
// SKILLS CONFIGURATION
// ============================================
export const SKILLS = {
  NETWORK: ['Cisco', 'MikroTik', 'Juniper', 'VPN', 'VLAN', 'Routing & Switching'],
  SECURITY: ['Firewall', 'IDS/IPS', 'SIEM', 'SOC', 'Penetration Testing', 'Security Audit'],
  SYSTEMS: ['Windows Server', 'Linux', 'VMware', 'Docker', 'Kubernetes', 'Active Directory'],
  CLOUD: ['AWS', 'Azure', 'GCP', 'Hybrid Cloud', 'Cloud Migration', 'Infrastructure as Code'],
  VOIP: ['Asterisk', 'FreePBX', 'SIP', 'VoIP Gateway', 'Call Center Systems'],
  MONITORING: ['Zabbix', 'Nagios', 'PRTG', 'Grafana', 'ELK Stack', 'Splunk'],
} as const;

// ============================================
// EXPERIENCE YEARS
// ============================================
export const STATS = {
  YEARS_EXPERIENCE: '8+',
  PROJECTS_COMPLETED: '50+',
  CERTIFICATIONS: '15+',
  CLIENT_SATISFACTION: '99%',
} as const;

// ============================================
// SEO CONFIGURATION
// ============================================
export const SEO_CONFIG = {
  TITLE: 'Haryono - IT Network & Infrastructure Specialist',
  DESCRIPTION: 'Profesional IT dengan pengalaman 8+ tahun dalam infrastruktur jaringan, VoIP, cybersecurity, dan technical support. Ahli dalam memimpin proyek IT dan implementasi solusi teknologi enterprise.',
  KEYWORDS: [
    'IT Infrastructure',
    'Network Engineer',
    'VoIP Specialist',
    'Cybersecurity',
    'Technical Support',
    'System Administrator',
    'Cloud Computing',
    'Network Security',
    'IT Project Management',
    'Indonesia'
  ],
  AUTHOR: 'Haryono',
  SITE_URL: 'https://yourportfolio.com', // Update with actual URL
  IMAGE: '/og-image.jpg', // Update with actual OG image
  LOCALE: 'id_ID',
  TYPE: 'website',
} as const;

// ============================================
// NAVIGATION ITEMS
// ============================================
export const NAV_ITEMS = [
  { label: 'Home', href: '#hero', section: 'hero' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Experience', href: '#experience', section: 'experience' },
  { label: 'Projects', href: '#projects', section: 'projects' },
  { label: 'Certifications', href: '#certifications', section: 'certifications' },
  { label: 'Contact', href: '#contact', section: 'contact' },
] as const;

// ============================================
// BREAKPOINTS (matching Tailwind)
// ============================================
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// ============================================
// Z-INDEX LAYERS
// ============================================
export const Z_INDEX = {
  DROPDOWN: 10,
  STICKY: 20,
  FIXED: 30,
  MODAL_BACKDROP: 40,
  MODAL: 50,
  POPOVER: 60,
  TOOLTIP: 70,
} as const;

// ============================================
// ERROR MESSAGES
// ============================================
export const ERROR_MESSAGES = {
  GENERIC: 'Oops! Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The page you are looking for does not exist.',
  FORM_VALIDATION: 'Please check the form for errors.',
  CONTACT_SEND_FAILED: 'Failed to send message. Please try again or contact via email.',
  CONTACT_SEND_SUCCESS: 'Message sent successfully! I will get back to you soon.',
} as const;

// ============================================
// FORM VALIDATION
// ============================================
export const VALIDATION_RULES = {
  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE_PATTERN: /^[\d\s\-\+\(\)]+$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
} as const;

// ============================================
// LOCAL STORAGE KEYS
// ============================================
export const STORAGE_KEYS = {
  THEME: 'portfolio-theme',
  LANGUAGE: 'portfolio-language',
  CONSENT: 'portfolio-consent',
} as const;

// ============================================
// EXTERNAL LINKS
// ============================================
export const EXTERNAL_LINKS = {
  CV_DOWNLOAD: '/cv-haryono.pdf',
  PORTFOLIO_PDF: '/portfolio-haryono.pdf',
  LINKEDIN: CONTACT_INFO.LINKEDIN,
  GITHUB: CONTACT_INFO.GITHUB,
  WHATSAPP: CONTACT_INFO.WHATSAPP,
} as const;

// ============================================
// API ENDPOINTS (if needed in future)
// ============================================
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  ANALYTICS: '/api/analytics',
} as const;

// ============================================
// FEATURE FLAGS
// ============================================
export const FEATURES = {
  DARK_MODE: true,
  ANALYTICS: false,
  NEWSLETTER: false,
  BLOG: false,
  TESTIMONIALS: false,
  MULTILINGUAL: false,
} as const;

// Type exports for TypeScript
export type ScrollConfig = typeof SCROLL_CONFIG;
export type NavigationConfig = typeof NAVIGATION_CONFIG;
export type ContactInfo = typeof CONTACT_INFO;
export type SeoConfig = typeof SEO_CONFIG;
