import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/theme_slice";
import tokenSlice from "./reducers/token_slice";
import logSlice from "./reducers/loged_slice";
import musickPlay from "./reducers/musick_play_slice";

export default configureStore({
  reducer: {
    themes: themeSlice,
    token: tokenSlice,
    logStatus: logSlice,
    musickStatus: musickPlay,
  },
});
