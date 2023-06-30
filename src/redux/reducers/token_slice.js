import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";

export const getToken = createAsyncThunk(
  "token/fetchByData",
  async (userData) => {
    const response = await axios.post(
      "https://painassasin.online/user/token/",
      userData
    );
    console.log(response.data);
    return response.data;
  }
);

export const tokenSlice = createSlice({
  name: "themes",
  initialState: {
    value: "",
    status: null,
    error: null,
  },
  reducers: {
    saveToken: (state, token) => {
      state.value = token;
      console.log(state.value);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state) => {
        state.loadingStatus = "loading";
        state.error = null;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.status = "resolved"
        state.value = action.payload;
      })
      // Вызывается в случае ошибки
      .addCase(getToken.rejected, (state, action) => {
        state.loadingStatus = "failed";
        // https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-errors
        state.error = action.error;
      });
  },
});

export const { saveToken } = tokenSlice.actions;

export default tokenSlice.reducer;
