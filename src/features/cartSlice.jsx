import { createSlice } from '@reduxjs/toolkit'
import data from '../Components/ProductData'

const initialState = {
  cart: [],
  items: data,
  totalQuantity: 1,
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.totalQuantity += 1
    },
    decrement: (state) => {
      if(state.totalQuantity <= 1){
        state.totalQuantity = 1
      }else{
        state.totalQuantity -= 1
      }
    },
    remove: (state) => {
      state.totalQuantity = 0
    },
  },
})

export const { increment, decrement, remove } = cartSlice.actions

export default cartSlice.reducer