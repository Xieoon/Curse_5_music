import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: false,
    id: null,
    email: null,
    userName: null,
    token: null,
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action) => {
        state.isLogin = true
        state.id = action.payload.id
        state.email = action.payload.email
        state.userName = action.payload.userName
        state.token = action.payload.token
      },
      removeUser: (state) => {            
        state.id = ''
        state.email = ''
        state.userName = ''
        state.token = ''
      },
    },
  })

  export default userSlice.reducer
  export const { setUser,removeUser} = userSlice.actions
  export const isLogin = (state) => state.users.isLogin