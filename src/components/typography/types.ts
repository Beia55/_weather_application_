import { ReactNode } from "react";
import { UseTheme } from "../../utils/types";

export type TypographyProps = {
  children: ReactNode;
  type?: "info" | "error" | "success" | "warning";
  isLabel?: boolean;
  htmlFor?: string;
};

export type StyledProps = {
  theme: UseTheme;
  color: string;
};
