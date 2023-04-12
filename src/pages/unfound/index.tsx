import { FC, ReactElement } from "react";
import { UnfoundPAgeStyled } from "./styled";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";
import { useTheme } from "../../utils/helpers";

const UnfoundPage: FC = (): ReactElement => {
  const currentTheme = useAppSelector(selectTheme).theme;
  const theme = useTheme(currentTheme);

  return <UnfoundPAgeStyled theme={theme}>Unfound Page</UnfoundPAgeStyled>;
};

export default UnfoundPage;
