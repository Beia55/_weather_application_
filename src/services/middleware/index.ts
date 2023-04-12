import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";

export const errorHandling: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      // TODO: add a error alert here
      console.error(action.payload);
    }

    return next(action);
  };
