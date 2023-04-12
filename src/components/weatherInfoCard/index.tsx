import { FC, ReactElement } from "react";
import { WeatherInfoCardProps } from "./types";
import { InfoCardStyled } from "./styled";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";
import { useTheme } from "../../utils/helpers";
import { Typography } from "../typography";

export const WeatherInfoCard: FC<WeatherInfoCardProps> = ({ weather }): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);

  return (
    <InfoCardStyled theme={theme}>
      {Object.entries(weather).map(([key, value]) => (
        <li key={key}>
          <Typography>
            {key}: {value}
          </Typography>
        </li>
      ))}
    </InfoCardStyled>
  );
};
