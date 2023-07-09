import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    nameFilter:[],
    dataFilter:'',
    genreFilter:'',
  },
  reducers: {
    setFilters: (state, action) => {
     state.nameFilter.push(action.payload.names)
     state.dataFilter = action.payload.data
     state.genreFilter = action.payload.genre
    },

 


  },
});

export const { setFilters} = filterSlice.actions;

export default filterSlice.reducer;