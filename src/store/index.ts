import { configureStore, Store, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { themeReducer } from "./theme";
import { weatherReducer } from "./weather";
import { errorHandling } from "../services/middleware";
import { mainApi, mainNinjaApi } from "../services/mainApi";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["themeState", "weatherState"],
};

const rootReducer = combineReducers({
  themeState: themeReducer,
  weatherState: weatherReducer,
  [mainApi.reducerPath]: mainApi.reducer,
  [mainNinjaApi.reducerPath]: mainNinjaApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([mainApi.middleware, mainNinjaApi.middleware, errorHandling]),
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
