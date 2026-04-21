import { createSlice } from '@reduxjs/toolkit'

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    value: [],
    
  },
  reducers: {
    addwishlist: (state,action) => {
        
        state.value.push(action.payload)
        
        
        
      
    },
   
  },
})
export const { addwishlist, } = wishlistSlice.actions

export default wishlistSlice.reducer