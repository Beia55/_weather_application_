import { FC, ReactElement } from "react";
import { Search } from "../../../components/search";
import { Typography } from "../../../components/typography";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {
  WeatherView,
  selectWeather,
  updateTownName,
  updateStartDate,
  updateEndDate,
  updateView,
  updateError,
} from "../../../store/weather";
import { FlexContainer, DatepickerStyled } from "../styled";
import { selectTheme } from "../../../store/theme";
import { useTheme } from "../../../utils/helpers";
import moment from "moment";

export const WeatherFilters: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme).theme;
  const theme = useTheme(currentTheme);
  const currentWeatherFilters = useAppSelector(selectWeather);

  const validateNoOfDays = (startDate: string, endDate: string): boolean => {
    const daysDifference = Math.abs(moment(startDate).diff(moment(endDate), "days"));
    if (daysDifference >= 0 && daysDifference <= 7) {
      dispatch(updateError(undefined));
      return true;
    } else {
      currentWeatherFilters.view === "daily" &&
        dispatch(updateError("The difference between start date and end date must be <= 7 !"));
      return false;
    }
  };

  return (
    <div>
      <Search placeholder="Search for town..." onSearch={(value) => dispatch(updateTownName(value))} />
      <Typography>Choose view</Typography>
      <FlexContainer theme={theme}>
        <div>
          <input
            checked={currentWeatherFilters.view === "daily"}
            type="radio"
            name="view"
            value="daily"
            id="daily"
            onChange={(e) => dispatch(updateView(e.target.value as WeatherView))}
          />
          <Typography isLabel htmlFor="daily">
            Daily View
          </Typography>
        </div>

        <div>
          <input
            checked={currentWeatherFilters.view === "hourly"}
            type="radio"
            name="view"
            value="hourly"
            id="hourly"
            onChange={(e) => dispatch(updateView(e.target.value as WeatherView))}
          />
          <Typography isLabel htmlFor="hourly">
            Hourly View
          </Typography>
        </div>
      </FlexContainer>
      <FlexContainer theme={theme}>
        <div>
          <Typography>From</Typography>
          <DatepickerStyled
            value={currentWeatherFilters.startDate}
            theme={theme}
            type="date"
            onChange={(e) => {
              validateNoOfDays(e.target.value, currentWeatherFilters.endDate || e.target.value);
              dispatch(updateStartDate(e.target.value));
            }}
          />
        </div>
        {currentWeatherFilters.view === "daily" && (
          <div>
            <Typography>To</Typography>
            <DatepickerStyled
              value={currentWeatherFilters.endDate}
              theme={theme}
              type="date"
              onChange={(e) => {
                validateNoOfDays(currentWeatherFilters.startDate, e.target.value);
                dispatch(updateEndDate(e.target.value));
              }}
            />
          </div>
        )}
      </FlexContainer>
      {currentWeatherFilters.view === "daily" && currentWeatherFilters.error && (
        <Typography type="error">{currentWeatherFilters.error}</Typography>
      )}
    </div>
  );
};
