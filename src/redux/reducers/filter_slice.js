import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    nameFilter: [],
    dataFilter: "",
    genreFilter: "",
  },
  reducers: {
    setNameFilters: (state, action) => {
      state.nameFilter.push(action.payload);
    },

    setDateFilters: (state, action) => {
      state.dataFilter = action.payload;
    },

    setGenreFilters: (state, action) => {
      state.genreFilter = action.payload;
    },
    removeNameFilter: (state, action) => {
      const newNameFilters = state.nameFilter.filter(
        (item) => item !== action.payload
      );

      state.nameFilter = newNameFilters;
    },
    removeDateFilter: (state, action) => {
      state.dataFilter = "";
    },
    removeGenreFilter: (state, action) => {
      state.genreFilter = "";
    },
  },
});

export const {
  setDateFilters,
  setGenreFilters,
  setNameFilters,
  removeDateFilter,
  removeGenreFilter,
  removeNameFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
