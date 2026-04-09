import { createSlice } from '@reduxjs/toolkit'

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState: {
   cartvalue:[]
  },
  reducers: {
    addtocart: (state,action) => {
    let data= state.cartvalue.find(item=>item.title===action.payload.title)
    if(data){
        data.quantity+=1
    }else{
        state.cartvalue.push({...action.payload,quantity:1})
    } 
    },
    incrementaddtocart: (state,action)=>{
        console.log();

        state.cartvalue.map(item=>{
            if(item.title===action.payload.title){
                item.quantity+=1
            }
        })
        

    },
    decrementaddtocart: (state,action)=>{
        

        state.cartvalue.map(item=>{
            if(item.title===action.payload.title){
               if(item.quantity>1){
                 item.quantity-=1
               }
            }
        })
        

    },
    deleteaddtocart: (state,action)=>{
        state.cartvalue.map((item,index)=>{
            if(item.title===action.payload.title){
             
              state.cartvalue.splice(index,1)


              
            }
        })
        

    },
   
  },
})
export const { addtocart, incrementaddtocart, decrementaddtocart, deleteaddtocart } =
  addToCartSlice.actions;

export default addToCartSlice.reducer