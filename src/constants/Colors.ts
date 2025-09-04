// Primary brand colors
const primary = {
  50: "#F3F0FF",
  100: "#E9E5FF",
  200: "#D6CCFF",
  300: "#B8A3FF",
  400: "#9C7AFF",
  500: "#8B5CF6", // Main brand color
  600: "#7C3AED",
  700: "#6D28D9",
  800: "#5B21B6",
  900: "#4C1D95",
};

// Neutral colors
const neutral = {
  50: "#F9FAFB",
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

// Semantic colors
const semantic = {
  success: "#10B981",
  error: "#EF4444",
  warning: "#F59E0B",
  info: "#3B82F6",
};

// Status colors
const status = {
  online: "#10B981",
  offline: "#6B7280",
  pending: "#F59E0B",
  errorStatus: "#EF4444",
};

// Email provider colors
const emailProviders = {
  gmail: "#EA4335",
  outlook: "#0078D4",
  yahoo: "#6001D2",
  apple: "#000000",
};

export default {
  light: {
    // Primary colors
    primary: primary[500],
    primaryLight: primary[100],
    primaryDark: primary[700],

    // Background colors
    background: "#FFFFFF",
    backgroundSecondary: neutral[50],
    backgroundTertiary: neutral[100],

    // Text colors
    text: neutral[900],
    textSecondary: neutral[600],
    textTertiary: neutral[500],
    textMuted: neutral[400],

    // Border colors
    border: neutral[200],
    borderLight: neutral[100],
    borderDark: neutral[300],

    // Surface colors
    surface: "#FFFFFF",
    surfaceElevated: "#FFFFFF",
    surfaceOutlined: "#FFFFFF",
    surfaceFilled: neutral[50],

    // Interactive colors
    tint: primary[500],
    tabIconDefault: neutral[400],
    tabIconSelected: primary[500],

    // Semantic colors
    success: semantic.success,
    error: semantic.error,
    warning: semantic.warning,
    info: semantic.info,

    // Status colors
    online: status.online,
    offline: status.offline,
    pending: status.pending,
    errorStatus: status.errorStatus,

    // Email provider colors
    ...emailProviders,

    // Shadow colors
    shadow: "#000000",
    shadowPrimary: primary[500],
  },

  // Dark theme (for future use)
  dark: {
    // Primary colors
    primary: primary[400],
    primaryLight: primary[200],
    primaryDark: primary[600],

    // Background colors
    background: neutral[900],
    backgroundSecondary: neutral[800],
    backgroundTertiary: neutral[700],

    // Text colors
    text: neutral[50],
    textSecondary: neutral[300],
    textTertiary: neutral[400],
    textMuted: neutral[500],

    // Border colors
    border: neutral[700],
    borderLight: neutral[800],
    borderDark: neutral[600],

    // Surface colors
    surface: neutral[800],
    surfaceElevated: neutral[700],
    surfaceOutlined: neutral[800],
    surfaceFilled: neutral[700],

    // Interactive colors
    tint: primary[400],
    tabIconDefault: neutral[500],
    tabIconSelected: primary[400],

    // Semantic colors
    success: semantic.success,
    error: semantic.error,
    warning: semantic.warning,
    info: semantic.info,

    // Status colors
    online: status.online,
    offline: status.offline,
    pending: status.pending,
    errorStatus: status.errorStatus,

    // Email provider colors
    ...emailProviders,

    // Shadow colors
    shadow: "#000000",
    shadowPrimary: primary[400],
  },
};
