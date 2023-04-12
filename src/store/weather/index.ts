import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

export type WeatherView = "daily" | "hourly";
export type WeatherState = {
  favoriteTowns: string[];
  townName: string;
  view: WeatherView;
  startDate: string;
  endDate?: string;
  error?: string;
};

const initialState: WeatherState = {
  favoriteTowns: [],
  townName: "Oradea",
  view: "daily",
  startDate: moment(new Date()).format("YYYY-MM-DD"),
};

export const weatherSlice = createSlice({
  name: "weatherState",
  initialState,
  reducers: {
    updateTownName(state, { payload }: PayloadAction<string>) {
      state.townName = payload;
    },
    updateStartDate(state, { payload }: PayloadAction<string>) {
      state.startDate = payload;
    },
    updateEndDate(state, { payload }: PayloadAction<string>) {
      state.endDate = payload;
    },
    updateView(state, { payload }: PayloadAction<WeatherView>) {
      state.view = payload;
      payload === "hourly" && (state.error = undefined);
    },
    updateFavoriteTowns(state, { payload }: PayloadAction<string>) {
      state.favoriteTowns.find((town) => town === payload)
        ? (state.favoriteTowns = state.favoriteTowns.filter((town) => town !== payload))
        : state.favoriteTowns.push(payload);
    },
    updateError(state, { payload }: PayloadAction<string | undefined>) {
      state.error = payload;
    },
  },
});

export const { updateTownName, updateStartDate, updateEndDate, updateView, updateFavoriteTowns, updateError } =
  weatherSlice.actions;
export const selectWeather = (state: { weatherState: WeatherState }) => state.weatherState;
export const weatherReducer = weatherSlice.reducer;
