/**
 * LeadFlow Brand Colors
 * Primary: #467235 (Professional Green)
 */

export const COLORS = {
  // Primary Brand
  primary: {
    DEFAULT: '#467235',
    hover: '#365A29',
    dark: '#29451F',
    soft: '#EEF4EA',
  },
  
  // Semantic Colors
  success: '#2E7D32',
  warning: '#B7791F',
  danger: '#C62828',
  info: '#2563EB',
  
  // Light Mode
  light: {
    background: '#F8FAF7',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    text: {
      primary: '#172014',
      secondary: '#64705F',
      muted: '#64705F',
    },
    border: '#E2E8DF',
    neutral: {
      50: '#F8FAF7',
      100: '#F1F5EF',
      200: '#E2E8DF',
      300: '#CBD5C5',
      600: '#64705F',
      800: '#33402F',
      900: '#172014',
    }
  },
  
  // Dark Mode
  dark: {
    background: '#0E120C',
    secondary: '#141A12',
    surface: '#192118',
    elevated: '#202A1E',
    border: '#2C3828',
    text: {
      primary: '#F3F7F0',
      secondary: '#AAB5A5',
      muted: '#7F8C78',
    },
    primary: {
      DEFAULT: '#467235',
      hover: '#568B40',
      soft: '#20301C',
    },
    success: '#4CAF50',
    warning: '#D6A84F',
    danger: '#E57373',
  }
} as const;
