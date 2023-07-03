import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    allCurentSongs: [],
    favoriteSongs:[],
    selectedSong: {},
  },
  reducers: {
    getAllSongs: (state, action) => {
      state.allCurentSongs = action.payload;
    },
    selectCurentSong: (state, action) => {
      state.selectedSong = action.payload;
    },
    selectAdjacentSong: (state,action)=>{
        console.log(state.allCurentSongs.findIndex((el)=>el.id === state.selectedSong.id));
        if(state.selectedSong.id  && action.payload === 'next' ){
            
            state.selectedSong = state.allCurentSongs[state.allCurentSongs.findIndex((el)=>el.id === state.selectedSong.id)+1]
        }
        if(state.selectedSong.id  && action.payload === 'prev' ){
            state.selectedSong = state.allCurentSongs[state.allCurentSongs.findIndex((el)=>el.id === state.selectedSong.id)-1]
        }
    },
   findFavoriteSongs: (state, action) => {
      state.favoriteSongs = action.payload
      },

  },
});

export const { getAllSongs, selectCurentSong,selectAdjacentSong,findFavoriteSongs } = songsSlice.actions;

export default songsSlice.reducer;
