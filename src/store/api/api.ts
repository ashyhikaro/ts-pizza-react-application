import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Pizza from '../../models/Pizza'

const API_URL = "http://localhost:4300/pizzas"

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ["Pizza"],

    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),

    endpoints: builder => ({
        getPizzas: builder.query<Pizza[], string>({
            query: (searchTerm) => `/?_sort=id&_order=desc&q=${searchTerm}`,
            providesTags: (res, err, searchTerm) => [{
                type: 'Pizza',
                id: searchTerm
            }]
        }),
    })
})

export const { useGetPizzasQuery } = api