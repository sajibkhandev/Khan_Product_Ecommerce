import { createSlice } from '@reduxjs/toolkit'

export const breadCrumbSlice = createSlice({
  name: 'breads',
  initialState: {
    currentValue: "",
    previousValue: "",
  },
  reducers: {
    addbreadcrumb: (state,action) => {
        state.previousValue=state.currentValue
        state.currentValue=action.payload
        
        
       
      
    },
   
  },
})
export const { addbreadcrumb, } = breadCrumbSlice.actions

export default breadCrumbSlice.reducer