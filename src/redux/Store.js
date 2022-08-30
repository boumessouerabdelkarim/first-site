import { configureStore } from '@reduxjs/toolkit'
import ContactSlice from './ContactSlice'
export const Store = configureStore({
  reducer: {
    contact:ContactSlice,
  },
})