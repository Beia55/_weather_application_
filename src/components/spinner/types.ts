import { UseTheme } from "../../utils/types";

export type SpinnerProps = {
  size?: "small" | "regular" | "large";
  color?: string;
};

export type SpinnerStyledProps = {
  theme: UseTheme;
  color?: string;
  size?: string;
};
