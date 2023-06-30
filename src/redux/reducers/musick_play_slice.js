import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSong = createAsyncThunk(
  "token/fetchByData",
  async (trackID) => {
    const response = await axios.get(
        `https://painassasin.online/catalog/track/${trackID}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const musickPlay = createSlice({
  name: "musickStatus",
  initialState: {
    trackID: "",
    status: null,
    track_file:null,
    error: null,
  },
  reducers: {
    saveToken: (state, token) => {
      console.log('1');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSong.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getSong.fulfilled, (state, action) => {
        state.status = "resolved"
        state.trackID = action.payload.id;
        state.track_file = action.payload.track_file
      })
      // Вызывается в случае ошибки
      .addCase(getSong.rejected, (state, action) => {
        state.loadingStatus = "failed";
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
        state.error = action.error;
      });
  },
});

export const { saveToken } = musickPlay.actions;

export default musickPlay.reducer;