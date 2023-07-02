import { createSlice } from "@reduxjs/toolkit";
import themes from "../../themes/themes";

export const themeSlice = createSlice({
  name: "themes",
  initialState: {
    value: themes.dark,
  },
  reducers: {
    changeTheme: (state) => {
      if (state.value.name === "dark") {
        state.value = themes.light;
        return;
      }
      if (state.value.name === "light") {
        state.value = themes.dark;
        return;
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
