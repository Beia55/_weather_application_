import { FC, ReactElement } from "react";
import { TypographyStyled, LabelStyled } from "./styled";
import { useTheme } from "../../utils/helpers";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";
import { TypographyProps } from "./types";

export const Typography: FC<TypographyProps> = ({ children, type, isLabel, htmlFor }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);

  const handleColor = () => {
    switch (type) {
      case "error":
        return theme.colors.error;
      case "warning":
        return theme.colors.warning;
      case "success":
        return theme.colors.success;
      default:
        return theme.colors.secondary;
    }
  };

  return isLabel ? (
    <LabelStyled theme={theme} color={handleColor()} htmlFor={htmlFor}>
      {children}
    </LabelStyled>
  ) : (
    <TypographyStyled theme={theme} color={handleColor()}>
      {children}
    </TypographyStyled>
  );
};
