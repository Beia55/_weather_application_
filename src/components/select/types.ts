import { UseTheme } from "../../utils/types";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: SelectOption[];
  onChange?: (e: string) => void;
  firstItemLabel?: string;
};

export type SelectStyledProps = {
  theme: UseTheme;
};
