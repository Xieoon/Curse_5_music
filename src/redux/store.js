import { configureStore } from '@reduxjs/toolkit'
import  themeSlice  from './themes/theme_slice'

export default configureStore({
  reducer: {
    themes:themeSlice
  }
})