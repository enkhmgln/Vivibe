/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
  // Primary colors
  primary: {
    main: "#4A90E2", // Vibrant blue - main brand color
    light: "#6BA4E9", // Lighter blue for hover states
    dark: "#2C5282", // Darker blue for pressed states
  },

  // Accent colors
  accent: {
    mint: "#4FD1C5", // Mint green for success states
    purple: "#9F7AEA", // Soft purple for special elements
    coral: "#FC8181", // Coral for error/warning states
  },

  // Background colors
  background: {
    primary: "#FFFFFF", // Pure white
    secondary: "#F7FAFC", // Very light blue-gray
    tertiary: "#EDF2F7", // Light gray for cards
  },

  // Text colors
  text: {
    primary: "#2D3748", // Dark gray for primary text
    secondary: "#718096", // Medium gray for secondary text
    tertiary: "#A0AEC0", // Light gray for disabled text
  },

  // UI Elements
  ui: {
    border: "#E2E8F0", // Light gray for borders
    shadow: "rgba(0, 0, 0, 0.1)", // Soft shadow
    overlay: "rgba(45, 55, 72, 0.3)", // Modal overlay
  },

  // Status colors
  status: {
    success: "#48BB78", // Green
    warning: "#ECC94B", // Yellow
    error: "#F56565", // Red
    info: "#4299E1", // Blue
  },

  // Theme-specific colors
  light: {
    background: "#FFFFFF",
    text: "#2D3748",
    tint: "#4A90E2",
    tabIconDefault: "#718096",
    tabIconSelected: "#4A90E2",
  },

  dark: {
    background: "#1A202C",
    text: "#F7FAFC",
    tint: "#6BA4E9",
    tabIconDefault: "#A0AEC0",
    tabIconSelected: "#6BA4E9",
  },

  // Gradients
  gradients: {
    primary: ["#4A90E2", "#6BA4E9"],
    accent: ["#9F7AEA", "#4FD1C5"],
    success: ["#48BB78", "#4FD1C5"],
  },
};

// Helper function for shadow styles
export const createShadow = (elevation: number = 1) => ({
  shadowColor: Colors.ui.shadow,
  shadowOffset: {
    width: 0,
    height: elevation * 2,
  },
  shadowOpacity: 0.1 + elevation * 0.05,
  shadowRadius: elevation * 2,
  elevation: elevation,
});
