import { configureStore } from '@reduxjs/toolkit'
import  breadCrumbSlice  from './slices/breadCrumbSlice'
import  addToCartSlice  from './slices/addToCartSlice'
import  wishlistSlice  from './slices/wishlistSlice'

export default configureStore({
  reducer: {
    breadcrumb:breadCrumbSlice,
    cartitem:addToCartSlice,
    wishlistSlice:wishlistSlice
  },
})