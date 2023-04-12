export type ThemeColors = {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  warning: string;
  neutral: string;
};

export type ThemeBreakpoints = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export type ThemeFonts = {
  weight: {
    small: number;
    regular: number;
    bold: number;
  };
  size: {
    tinny: string;
    small: string;
    regular: string;
    large: string;
    extraLarge: string;
  };
  lineHeight: {
    tinny: string;
    small: string;
    regular: string;
    large: string;
    extraLarge: string;
  };
};

export type ThemeBorders = {
  radius: {
    small: string;
    regular: string;
  };
  width: {
    small: string;
    regular: string;
  };
  style: {
    solid: string;
  };
};

export type ThemeSizes = {
  none: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export type Theme = {
  light: {
    colors: ThemeColors;
  };
  dark: {
    colors: ThemeColors;
  };
  rainy: {
    colors: ThemeColors;
  };
  sunny: {
    colors: ThemeColors;
  };
  fonts: ThemeFonts;
  breakpoints: ThemeBreakpoints;
  sizes: ThemeSizes;
  borders: ThemeBorders;
};
