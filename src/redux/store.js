import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from "./features/pcbuilder/pcbuilderSlice"
export const store = configureStore({
  reducer: {
    pcbuilder: pcBuilderReducer
  },
})