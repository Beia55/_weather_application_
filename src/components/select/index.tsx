import { FC, ReactElement } from "react";
import { SelectProps } from "./types";
import { SelectStyled } from "./styled";
import { useTheme } from "../../utils/helpers";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";

export const Select: FC<SelectProps> = ({ options = [], onChange, firstItemLabel }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);

  return (
    <SelectStyled theme={theme} onChange={(event) => onChange?.(event.target.value)} defaultValue="">
      <option value="">{firstItemLabel ?? "Select item"}</option>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </SelectStyled>
  );
};
