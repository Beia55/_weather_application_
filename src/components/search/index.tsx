import { FC, ReactElement, useState } from "react";
import { SearchProps } from "./types";
import { SearchStyled, SearchContainerStyled, SearchButtonStyled } from "./styled";
import { useTheme } from "../../utils/helpers";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";

export const Search: FC<SearchProps> = ({ onSearch, placeholder }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);

  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <SearchContainerStyled theme={theme}>
      <SearchStyled theme={theme} type="search" placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
      <SearchButtonStyled theme={theme} onClick={() => value && onSearch?.(value)}>
        <i className="fa-solid fa-search" />
      </SearchButtonStyled>
    </SearchContainerStyled>
  );
};
