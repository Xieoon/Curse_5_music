import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme_slice";
import songsSlice from "./reducers/songs_slice";
import userSlice from "./reducers/user_slice";
import { musicApi } from "./api/musicApi";
import { userApi } from "./api/userApi";
import filterSlice from "./reducers/filter_slice";

export const store = configureStore({
  reducer: {
    songs: songsSlice,
    themes: themeSlice,
    filters: filterSlice,
    users: userSlice,
    [musicApi.reducerPath]: musicApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat([userApi.middleware, musicApi.middleware]),
});
