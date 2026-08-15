export const APP_NAME = 'LeadFlow';
export const APP_TAGLINE = 'Recover the leads you\'re already paying for.';

export const ROUTES = {
  // Marketing
  HOME: '/',
  PRODUCT: '/product',
  FEATURES: '/features',
  HOW_IT_WORKS: '/how-it-works',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  
  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  VERIFY_PHONE: '/verify-phone',
  
  // Dashboard
  DASHBOARD: '/dashboard',
  LEADS: '/leads',
  LEAD_DETAILS: (id: string) => `/leads/${id}`,
  CONVERSATIONS: '/conversations',
  CONVERSATION_DETAILS: (id: string) => `/conversations/${id}`,
  FOLLOW_UPS: '/followups',
  BOOKINGS: '/bookings',
  BOOKING_DETAILS: (id: string) => `/bookings/${id}`,
  ANALYTICS: '/analytics',
  AI_INSIGHTS: '/ai',
  WHATSAPP: '/whatsapp',
  
  // Settings
  SETTINGS: '/settings',
  SETTINGS_BUSINESS: '/settings/business',
  SETTINGS_TEAM: '/settings/team',
  SETTINGS_AI: '/settings/ai',
  SETTINGS_FOLLOWUPS: '/settings/followups',
  SETTINGS_NOTIFICATIONS: '/settings/notifications',
  SETTINGS_SECURITY: '/settings/security',
  SETTINGS_API: '/settings/api',
} as const;

export const LEAD_STATUSES = [
  { value: 'NEW', label: 'New', color: '#2563EB' },
  { value: 'HOT', label: 'Hot', color: '#C62828' },
  { value: 'WARM', label: 'Warm', color: '#B7791F' },
  { value: 'COLD', label: 'Cold', color: '#64705F' },
  { value: 'FOLLOW_UP', label: 'Follow Up', color: '#467235' },
  { value: 'CONVERTED', label: 'Converted', color: '#2E7D32' },
  { value: 'LOST', label: 'Lost', color: '#64705F' },
] as const;

export const SERVICES = [
  'AC Repair',
  'AC Service',
  'Installation',
  'Gas Refill',
  'Maintenance',
] as const;

export const USER_ROLES = [
  { value: 'OWNER', label: 'Owner' },
  { value: 'ADMIN', label: 'Admin' },
  { value: 'MANAGER', label: 'Manager' },
  { value: 'AGENT', label: 'Agent' },
  { value: 'VIEWER', label: 'Viewer' },
] as const;

export const BUSINESS_TYPES = [
  'AC Services',
  'Plumbing Services',
  'Electrical Services',
  'Cleaning Services',
  'Pest Control',
  'Home Repair',
  'Other',
] as const;
