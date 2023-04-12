import { UseTheme } from "../../utils/types";

export type keyValue = { [key: string]: string | number | undefined };
export type WeatherInfoCardProps = {
  weather: keyValue;
};

export type StyledProps = {
  theme: UseTheme;
};
