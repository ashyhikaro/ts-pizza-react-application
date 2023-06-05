import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { reducer as orderReducers } from './order/order.slice'
import { api } from './api/api'

const reducers = combineReducers({
    orders: orderReducers,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>