import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WeatherResponse, WeatherParams, GeolocationParams, GeolocationResponse } from "../../utils/types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_X_KEY || "");
      headers.set("X-RapidAPI-Host", process.env.REACT_APP_API_X_HOST || "");
      headers.set("content-type", "application/json");

      return headers;
    },
  }),
  endpoints: ({ query }) => ({
    getHourlyWeather: query<WeatherResponse, WeatherParams>({
      query: (params) => ({
        url: "hourly",
        params: { ...params, station: process.env.REACT_APP_API_STATION },
      }),
    }),
    getDaylyWeather: query<WeatherResponse, WeatherParams>({
      query: (params) => ({
        url: "daily",
        params: { ...params, station: process.env.REACT_APP_API_STATION },
      }),
    }),
  }),
});

export const { useLazyGetHourlyWeatherQuery, useLazyGetDaylyWeatherQuery } = mainApi;

export const mainNinjaApi = createApi({
  reducerPath: "mainNinjaApi",
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_NINJAS_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("X-Api-Key", process.env.REACT_APP_API_NINJAS_API_KEY || "");
      headers.set("content-type", "application/json");

      return headers;
    },
  }),
  endpoints: ({ query }) => ({
    getGeolocation: query<GeolocationResponse, GeolocationParams>({
      query: (params) => ({
        url: "geocoding",
        params,
      }),
    }),
  }),
});

export const { useLazyGetGeolocationQuery } = mainNinjaApi;
