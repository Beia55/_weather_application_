import { ReactNode } from "react";
import { UseTheme } from "../../utils/types";

export type TemplateProps = {
  children: ReactNode;
};

export type StyledProps = {
  theme: UseTheme;
};
