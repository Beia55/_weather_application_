import { FC, ReactElement } from "react";
import { ContainerStyled } from "./styled";
import { useAppSelector } from "../../store/hooks";
import { selectTheme } from "../../store/theme";
import { useTheme } from "../../utils/helpers";
import { WeatherFilters } from "./filters";
import { WeatherDataDisplay } from "./weatherData";
import { Typography } from "../../components/typography";

const Home: FC = (): ReactElement => {
  const currentTheme = useAppSelector(selectTheme).theme;
  const theme = useTheme(currentTheme);

  return (
    <ContainerStyled theme={theme}>
      <section>
        <Typography>Criteria</Typography>
        <WeatherFilters />
      </section>
      <section>
        <Typography>Weather Data</Typography>
        <WeatherDataDisplay />
      </section>
    </ContainerStyled>
  );
};

export default Home;
