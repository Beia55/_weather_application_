import type { Theme, ThemeBreakpoints, ThemeSizes, ThemeFonts, ThemeBorders } from "./theme.types";

export const breakpoints: ThemeBreakpoints = {
  xs: 0,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
  xxl: 1500,
};

export const fonts: ThemeFonts = {
  weight: {
    small: 200,
    regular: 400,
    bold: 700,
  },
  size: {
    tinny: "0.75rem",
    small: "0.875rem",
    regular: "1.125rem",
    large: "1.5rem",
    extraLarge: "1.875rem",
  },
  lineHeight: {
    tinny: "1rem",
    small: "1.25rem",
    regular: "1.75rem",
    large: "2rem",
    extraLarge: "2.25rem",
  },
};

export const sizes: ThemeSizes = {
  none: "0",
  xs: "8px",
  s: "16px",
  m: "24px",
  l: "32px",
  xl: "48px",
  xxl: "60px",
};

export const borders: ThemeBorders = {
  radius: {
    small: "6px",
    regular: "8px",
  },
  width: {
    small: "1px",
    regular: "2px",
  },
  style: {
    solid: "solid",
  },
};

export const theme: Theme = {
  light: {
    colors: {
      primary: "#FFFFFF",
      secondary: "#000000",
      success: "#228896",
      error: "#FF5656",
      warning: "#F3A953",
      neutral: "#F5F5F5",
    },
  },
  dark: {
    colors: {
      primary: "#000000",
      secondary: "#FFFFFF",
      success: "#68B984",
      error: "#F87474",
      warning: "#FFB562",
      neutral: "#475053",
    },
  },
  rainy: {
    colors: {
      primary: "#001253",
      secondary: "#ECECEC",
      success: "#36AE7C",
      error: "#E14D2A",
      warning: "#FD841F",
      neutral: "#318FB5",
    },
  },
  sunny: {
    colors: {
      primary: "#FDE3D9",
      secondary: "#1B262C",
      success: "#ABCDCB",
      error: "#FD5959",
      warning: "#F47645",
      neutral: "#EDF7FA",
    },
  },
  fonts,
  breakpoints,
  sizes,
  borders,
};
