import { ThemeColors, Theme } from "../theme/theme.types";

export type ThemeVariant = "light" | "dark" | "rainy" | "sunny";
export type UseTheme = { colors: ThemeColors } & Pick<Theme, "fonts" | "breakpoints" | "sizes" | "borders">;

export type WeatherParams = {
  start: string;
  end: string;
  lat?: number;
  lon?: number;
};

export type WeatherItem = {
  date?: string; //	The date string (YYYY-MM-DD)
  tavg?: number; //	The average air temperature in °C
  tmin?: number; //	The minimum air temperature in °C
  tmax?: number; //	The maximum air temperature in °C
  prcp?: number; //	The daily precipitation total in mm
  snow?: number; //	The maximum snow depth in mm
  wdir?: number; //	The average wind direction in degrees (°)
  wspd?: number; //	The average wind speed in km/h
  wpgt?: number; //	The peak wind gust in km/h
  pres?: number; //	The average sea-level air pressure in hPa
  tsun?: number; //	The daily sunshine total in minutes (m)
  coco?: number;
  dwpt?: number;
  rhum?: number;
  temp?: number;
  time?: string;
};

export type WeatherResponse = {
  data: WeatherItem[];
};

export type GeolocationParams = {
  city: string;
};

export type GeolocationResponse = {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}[];
