/**
 * Centralized Theme Configuration with Fluent UI Tokens
 * All colors, sizes, and styles are defined here and accessible via Fluent tokens
 */

import { createLightTheme } from '@fluentui/react-components';

// Color Palette
export const colors = {
  // Primary Brand Colors
  primary: {
    darkest: '#1a3a52',      // Dark navy - used for text, titles
    dark: '#2d5a7b',         // Medium navy - primary action color
    main: '#3d6fa8',         // Light navy - gradients
    light: '#004578',        // Hover state for primary buttons
  },
  
  // Accent Colors
  accent: {
    beige: '#E8D4C0',        // Beige accent for badges and highlights
  },
  
  // Neutral Colors
  neutral: {
    white: '#ffffff',
    offWhite: '#f8f9fa',
    lightGray: '#f3f2f1',
    lightGray2: '#f2f2f2',
    mediumGray: '#616161',
    darkGray: '#262626',
    border: '#e5e5e5',
    disabled: '#999999',
  },
  
  // Background Colors
  background: {
    default: '#ffffff',
    light: '#faf9f8',
    lightBlue: '#eaf4ff',
    accentLight: 'rgba(232, 212, 192, 0.12)',
    accentDarkLight: 'rgba(45, 90, 123, 0.08)',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Semantic Colors
  status: {
    error: '#d13438',
    success: '#107c10',
  },
  
  // UI Colors
  button: {
    primary: '#0067b8',
    primaryHover: '#005a9e',
    text: '#ffffff',
  },
};

// Typography Sizes
export const typography = {
  fontSize: {
    xs: '11px',
    sm: '12px',
    base: '14px',
    md: '15px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '3.5xl': '3.5rem',
    // Additional sizes
    '0.8rem': '0.8rem',
    '0.85rem': '0.85rem',
    '0.875rem': '0.875rem',
    '0.9rem': '0.9rem',
    '0.95rem': '0.95rem',
    '1rem': '1rem',
    '1.05rem': '1.05rem',
    '1.1rem': '1.1rem',
    '1.125rem': '1.125rem',
    '1.2rem': '1.2rem',
    '1.25rem': '1.25rem',
    '1.3rem': '1.3rem',
    '1.5rem': '1.5rem',
    '1.75rem': '1.75rem',
    '2rem': '2rem',
    '2.2rem': '2.2rem',
    '2.5rem': '2.5rem',
    '2.75rem': '2.75rem',
    '3rem': '3rem',
    '4rem': '4rem',
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
};

// Border Radius
export const borderRadius = {
  xs: '2px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '20px',  // Rounded buttons
  full: '50%',
};

// Shadows
export const shadows = {
  sm: '0 2px 8px rgba(0, 0, 0, 0.08)',
  md: '0 6px 16px rgba(0, 103, 184, 0.35)',
  lg: '0 20px 60px rgba(0, 0, 0, 0.3)',
  hover: '0 8px 20px rgba(0, 103, 184, 0.45)',
};

// Gradients
export const gradients = {
  primaryHero: 'linear-gradient(135deg, #1a3a52 0%, #2d5a7b 50%, #3d6fa8 100%)',
  primaryHero2: 'linear-gradient(135deg, #1a3a52 0%, #2d5a7b 30%, #3d6fa8 100%)',
  buttonGradient: `linear-gradient(135deg, #0067b8 0%, #005a9e 100%)`,
};

// Create custom Fluent theme with brand colors and custom tokens for all design values
export const customTheme = createLightTheme({
  // Brand Color Tokens
  colorBrandForeground1: colors.primary.dark,
  colorBrandForeground2: colors.primary.main,
  colorBrandForegroundInverted: colors.button.text,
  colorBrandBackground: colors.button.primary,
  colorBrandBackgroundHover: colors.button.primaryHover,
  colorBrandBackgroundPressed: colors.primary.light,
  colorBrandBorder1: colors.button.primary,
  colorBrandBorder2: colors.primary.main,
  
  // Neutral Color Tokens
  colorNeutralForeground1: colors.neutral.darkGray,
  colorNeutralForeground2: colors.neutral.mediumGray,
  colorNeutralForegroundInverted: colors.button.text,
  colorNeutralBackground1: colors.neutral.white,
  colorNeutralBackground2: colors.background.offWhite,
  colorNeutralBackground3: colors.background.light,
  
  // Status Color Tokens
  colorStatusErrorForeground1: colors.status.error,
  colorStatusSuccessForeground1: colors.status.success,
  
  // Custom Primary Color Tokens
  colorPrimaryDarkest: colors.primary.darkest,
  colorPrimaryDark: colors.primary.dark,
  colorPrimaryMain: colors.primary.main,
  colorPrimaryLight: colors.primary.light,
  colorAccentBeige: colors.accent.beige,
  colorNeutralBorder: colors.neutral.border,
  colorNeutralWhite: colors.neutral.white,
  colorNeutralOffWhite: colors.neutral.offWhite,
  colorNeutralLightGray: colors.neutral.lightGray,
  colorNeutralMediumGray: colors.neutral.mediumGray,
  colorNeutralDarkGray: colors.neutral.darkGray,
  colorNeutralDisabled: colors.neutral.disabled,
  colorBackgroundOverlay: colors.background.overlay,
  colorBackgroundLightBlue: colors.background.lightBlue,
  
  // Button Color Tokens
  colorButtonPrimary: colors.button.primary,
  colorButtonPrimaryHover: colors.button.primaryHover,
  colorButtonText: colors.button.text,
  
  // Typography - Font Size Tokens
  fontSizeXs: typography.fontSize.xs,
  fontSizeSm: typography.fontSize.sm,
  fontSizeBase: typography.fontSize.base,
  fontSizeMd: typography.fontSize.md,
  fontSizeLg: typography.fontSize.lg,
  fontSizeXl: typography.fontSize.xl,
  fontSize2xl: typography.fontSize['2xl'],
  fontSize3xl: typography.fontSize['3xl'],
  fontSize3_5xl: typography.fontSize['3.5xl'],
  fontSize0_8rem: typography.fontSize['0.8rem'],
  fontSize0_85rem: typography.fontSize['0.85rem'],
  fontSize0_875rem: typography.fontSize['0.875rem'],
  fontSize0_9rem: typography.fontSize['0.9rem'],
  fontSize0_95rem: typography.fontSize['0.95rem'],
  fontSize1rem: typography.fontSize['1rem'],
  fontSize1_05rem: typography.fontSize['1.05rem'],
  fontSize1_1rem: typography.fontSize['1.1rem'],
  fontSize1_125rem: typography.fontSize['1.125rem'],
  fontSize1_2rem: typography.fontSize['1.2rem'],
  fontSize1_25rem: typography.fontSize['1.25rem'],
  fontSize1_3rem: typography.fontSize['1.3rem'],
  fontSize1_5rem: typography.fontSize['1.5rem'],
  fontSize1_75rem: typography.fontSize['1.75rem'],
  fontSize2rem: typography.fontSize['2rem'],
  fontSize2_2rem: typography.fontSize['2.2rem'],
  fontSize2_5rem: typography.fontSize['2.5rem'],
  fontSize2_75rem: typography.fontSize['2.75rem'],
  fontSize3rem: typography.fontSize['3rem'],
  fontSize4rem: typography.fontSize['4rem'],
  
  // Typography - Font Weight Tokens
  fontWeightNormal: typography.fontWeight.normal,
  fontWeightMedium: typography.fontWeight.medium,
  fontWeightSemibold: typography.fontWeight.semibold,
  fontWeightBold: typography.fontWeight.bold,
  
  // Typography - Line Height Tokens
  lineHeightTight: typography.lineHeight.tight,
  lineHeightNormal: typography.lineHeight.normal,
  lineHeightRelaxed: typography.lineHeight.relaxed,
  
  // Spacing Tokens
  spacingXs: spacing.xs,
  spacingSm: spacing.sm,
  spacingMd: spacing.md,
  spacingLg: spacing.lg,
  spacingXl: spacing.xl,
  spacing2xl: spacing['2xl'],
  spacing3xl: spacing['3xl'],
  spacing4xl: spacing['4xl'],
  
  // Border Radius Tokens
  borderRadiusXs: borderRadius.xs,
  borderRadiusSm: borderRadius.sm,
  borderRadiusMd: borderRadius.md,
  borderRadiusLg: borderRadius.lg,
  borderRadiusXl: borderRadius.xl,
  borderRadiusFull: borderRadius.full,
  
  // Shadow Tokens
  shadowSm: shadows.sm,
  shadowMd: shadows.md,
  shadowLg: shadows.lg,
  shadowHover: shadows.hover,
  
  // Gradient Tokens
  gradientPrimaryHero: gradients.primaryHero,
  gradientPrimaryHero2: gradients.primaryHero2,
  gradientButtonGradient: gradients.buttonGradient,
});

// Export as a single theme tokens object - all styles should be accessed through this
export const themeTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  gradients,
};

// Hook to get theme values - use this in components instead of importing colors/typography/spacing directly
export const useThemeTokens = () => {
  return themeTokens;
};

export default customTheme;

