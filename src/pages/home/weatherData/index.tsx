import { FC, ReactElement, useEffect } from "react";
import { selectWeather, updateFavoriteTowns } from "../../../store/weather";
import { selectTheme } from "../../../store/theme";
import { useTheme } from "../../../utils/helpers";
import {
  useLazyGetHourlyWeatherQuery,
  useLazyGetDaylyWeatherQuery,
  useLazyGetGeolocationQuery,
} from "../../../services/mainApi";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { Spinner } from "../../../components/spinner";
import { Typography } from "../../../components/typography";
import { AddToFavoritesButtonStyled, FlexContainer } from "../styled";
import { WeatherInfoCard } from "../../../components/weatherInfoCard";

export const WeatherDataDisplay: FC = (): ReactElement => {
  const currentTheme = useAppSelector(selectTheme);
  const theme = useTheme(currentTheme.theme);
  const { townName, view, startDate, endDate, error } = useAppSelector(selectWeather);

  const [
    getHourlyWeather,
    {
      data: hourlyData,
      isLoading: hourlyDataIsLoading,
      isFetching: hourlyDataIsFetchinghourlyData,
      isError: hourlyDataIsError,
    },
  ] = useLazyGetHourlyWeatherQuery();
  const [
    getDailyWeather,
    { data: dailyData, isLoading: dailyDataIsLoading, isFetching: dailyDataIsFetching, isError: dailyDataIsError },
  ] = useLazyGetDaylyWeatherQuery();
  const [
    getGeolocation,
    {
      data: geolocationData,
      isLoading: geolocationIsLoading,
      isFetching: geolocationIsFetching,
      isError: geolocationIsError,
    },
  ] = useLazyGetGeolocationQuery();

  useEffect(() => {
    if (view === "hourly") {
      getGeolocation({ city: townName })
        .unwrap()
        .then((resp) => {
          getHourlyWeather({
            lat: resp[0].latitude,
            lon: resp[0].longitude,
            start: startDate,
            end: startDate,
          });
        });
    } else {
      if (!error && startDate && endDate) {
        getGeolocation({ city: townName })
          .unwrap()
          .then((resp) => {
            getDailyWeather({
              lat: resp[0].latitude,
              lon: resp[0].longitude,
              start: startDate,
              end: endDate,
            });
          });
      }
    }
  }, [townName, view, startDate, endDate]);

  if (
    hourlyDataIsLoading ||
    hourlyDataIsFetchinghourlyData ||
    dailyDataIsLoading ||
    dailyDataIsFetching ||
    geolocationIsLoading ||
    geolocationIsFetching
  )
    return <Spinner />;

  if (hourlyDataIsError || dailyDataIsError || geolocationIsError)
    return <Typography type="error">We're sorry! An error occurred. Please try again latter :(</Typography>;

  return (
    <div>
      <FlexContainer theme={theme}>
        <AddToFavoritesButtonStyled theme={theme}>
          <i className="fa-solid fa-add" />
        </AddToFavoritesButtonStyled>
        <Typography>
          {geolocationData?.[0]?.name}, {geolocationData?.[0]?.country}
        </Typography>
      </FlexContainer>
      <Typography>
        Coordonates: latitude - {geolocationData?.[0]?.latitude}, longitude - {geolocationData?.[0]?.longitude}
      </Typography>
      <FlexContainer theme={theme}>
        {view === "daily"
          ? dailyData?.data.map((data, index) => <WeatherInfoCard key={index} weather={data} />)
          : hourlyData?.data.map((data, index) => <WeatherInfoCard key={index} weather={data} />)}
      </FlexContainer>
    </div>
  );
};
