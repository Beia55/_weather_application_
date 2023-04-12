import { FC, ReactElement } from "react";
import { SpinnerStyled, SpinnerBoxStyled } from "./styled";
import { SpinnerProps } from "./types";
import { useTheme } from "../../utils/helpers";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";

export const Spinner: FC<SpinnerProps> = ({ color, size }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);

  const handleSize = () => {
    switch (size) {
      case "large":
        return "72px";
      case "small":
        return "24px";
      default:
        return "48px";
    }
  };

  return (
    <SpinnerBoxStyled>
      <SpinnerStyled color={color} size={handleSize()} theme={theme} />
    </SpinnerBoxStyled>
  );
};
