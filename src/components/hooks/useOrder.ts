import { useTypedSelector } from './useTypedSelector'

export const useOrder = () => {
    const {orders} = useTypedSelector(state => state)

    return {orders}
}