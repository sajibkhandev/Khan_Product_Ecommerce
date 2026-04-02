import { configureStore } from '@reduxjs/toolkit'
import  breadCrumbSlice  from './slices/breadCrumbSlice'
import  addToCartSlice  from './slices/addToCartSlice'

export default configureStore({
  reducer: {
    breadcrumb:breadCrumbSlice,
    cartitem:addToCartSlice
  },
})