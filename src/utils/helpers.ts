import { theme } from "../theme";
import type { ThemeVariant, UseTheme } from "./types";

export const useTheme = (themeOption: ThemeVariant): UseTheme => {
  const { dark, light, sunny, rainy, ...restOfProps } = theme;
  let themeColors;
  switch (themeOption) {
    case "dark":
      themeColors = dark;
      break;
    case "rainy":
      themeColors = rainy;
      break;
    case "sunny":
      themeColors = sunny;
      break;
    default:
      themeColors = light;
  }

  return { colors: themeColors.colors, ...restOfProps };
};
