import { createSlice } from '@reduxjs/toolkit'
import data from '../Components/ProductData'

const initialState = {
  products : data,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export default productSlice.reducer