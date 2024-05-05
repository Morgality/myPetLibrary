import { configureStore } from '@reduxjs/toolkit'
import basket from "./counterSlice"

export const store = configureStore({
  reducer: {basket},
})