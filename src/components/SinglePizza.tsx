import React from 'react'
import Pizza from '../models/Pizza'
import Order from '../models/Order'
import pizzasMenuList from '../data/PizzasData'

interface SinglePizzaProps {
    pizza: Pizza;
    setOrderList: (state: any) => void;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({pizza, setOrderList}) => {
    const addToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const {id} = e.currentTarget

        let foundedPizza: Order = JSON.parse(JSON.stringify(pizzasMenuList.filter(pizza => +id === pizza.id)[0]))
        foundedPizza.count = 1
        foundedPizza.total = foundedPizza.price

        setOrderList((state: any) => {
            const existOrder: Order = state.filter((order: Order) => foundedPizza.id === order.id)[0]

            if (existOrder) {
                existOrder.count++
                existOrder.total = existOrder.count * existOrder.price
                return [...state.filter((order: Order) => existOrder.id !== order.id), existOrder]
            } else {
                return [...state, foundedPizza]
            }
            
        })
    }
   
    return (
        <div className='pizza'>
            <img src={require(`../images/${pizza.img}`)} alt={pizza.title} className='pizza-img'/>
            <div className='discription-container'>
                <h2 className='pizza-title'>{pizza.title}</h2>
                <p className='pizza-description'>{pizza.discription}</p>

                <div className='order-container'>
                    <span className='pizza-price'>{pizza.price} $</span>
                    <button className='order-btn' id={String(pizza.id)} onClick={addToCart}>order</button>
                </div>
            </div>
        </div>
    )
}

export default SinglePizza;