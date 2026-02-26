import { configureStore } from '@reduxjs/toolkit'
import  breadCrumbSlice  from './slices/breadCrumbSlice'

export default configureStore({
  reducer: {
    breadcrumb:breadCrumbSlice
  },
})