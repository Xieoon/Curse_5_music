import { createSlice } from "@reduxjs/toolkit";



export const logSlice = createSlice({
  name: "logStatus",
  initialState: {
    status: false,
  },
  reducers: {
    setLogIn: (state) => {
    state.status = true
    },
    setLogOut:(state)=>{
        state.status = false
    }
  },
});

export const { setLogIn,setLogOut } = logSlice.actions;

export default logSlice.reducer;