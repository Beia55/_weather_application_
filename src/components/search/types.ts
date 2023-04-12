import { UseTheme } from "../../utils/types";

export type SearchProps = {
  onSearch?: (e: string) => void;
  placeholder?: string;
};

export type StyledProps = {
  theme: UseTheme;
};
