import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme_slice";
import tokenSlice from "./reducers/token_slice";
import userSlice from './reducers/user_slice'
import { musicApi } from "./api/musicApi";
import { userApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    themes: themeSlice,
    token: tokenSlice, 
    users:userSlice,
    [musicApi.reducerPath]: musicApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([userApi.middleware, musicApi.middleware]),
});
