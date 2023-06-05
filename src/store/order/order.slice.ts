import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Order from "../../models/Order";
import Pizza from "../../models/Pizza";

const initialState: Order[] = []

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        addOrder: (state, {payload: pizza}: PayloadAction<Pizza>) => {
            const isExist = state.some(o => o.id === pizza.id)
            
            if(isExist) {
                const index = state.findIndex(item => item.id === pizza.id)
                
                if (index !== -1) {
                    state[index].count++
                    state[index].total = state[index].count * state[index].price
                    state[index].total = +state[index].total.toFixed(2)
                }
            } else {
                state.push({
                    ...pizza,
                    "count": 1,
                    "total": pizza.price
                })
            }
            
        },
        removeOrder: (state, {payload: order}: PayloadAction<Order>) => {
            const index = state.findIndex(item => item.id === order.id)
            state.splice(index, 1)
        },
        plusCountOfOrder: (state, {payload: order}: PayloadAction<Order>) => {
            const index = state.findIndex(item => item.id === order.id)
            state[index].count++
            state[index].total = state[index].count * state[index].price
            state[index].total = +state[index].total.toFixed(2)
        },
        minusCountOfOrder: (state, {payload: order}: PayloadAction<Order>) => {
            const index = state.findIndex(item => item.id === order.id)
            state[index].count--
            state[index].total = state[index].count * state[index].price
            state[index].total = +state[index].total.toFixed(2)
        }
    }
})

export const {actions, reducer} = orderSlice