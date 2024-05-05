import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
  basket: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToBasket: (state, action) => {

      state.basket.push(action.payload)

    },
    removeFromBasket: (state, action) => {

      const product = state.basket.find(item => item.id === action.payload)

        if (!product) return

        if (product.count > 1) {
          product.count -= 1
        } else {
          state.basket = state.basket.filter(item => item.id !== action.payload)
        }

    },

    rmAll: (state) => {
      state.basket = []
    },

    addCount : (state, action) => {
      const product = state.basket.find(item => item.id === action.payload)
      product.count += 1
    }
  },
})

export const { addToBasket, removeFromBasket, rmAll, addCount } = counterSlice.actions

export default counterSlice.reducer