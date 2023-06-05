import Pizza from "../../models/Pizza";
import { api } from "./api";

export const pizzaApi = api.injectEndpoints({
    endpoints: builder => ({
        createPizza: builder.mutation<null, Pizza>({
            query: (pizza) => ({
                body: pizza,
                url: '/',
                method: 'POST',
            }),
            invalidatesTags: () => [{
                type: 'Pizza'
            }]
        })
    })
})

export const { useCreatePizzaMutation } = pizzaApi