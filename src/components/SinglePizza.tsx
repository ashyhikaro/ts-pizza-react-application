import React from 'react'
import Pizza from '../models/Pizza'
import { useActions } from './hooks/useActions';

interface SinglePizzaProps {
    pizza: Pizza;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({pizza}) => {
    const {addOrder} = useActions()

    console.log(pizza)
   
    return (
        <div className='pizza'>
            <img src={require(`../images/${pizza.img}`)} alt={pizza.title} className='pizza-img'/>
            <div className='discription-container'>
                <h4 className='pizza-title'>{pizza.title}</h4>
                <p className='pizza-description'>{pizza.discription}</p>

                <div className='order-container'>
                    <span className='pizza-price'>{pizza.price} $</span>
                    <button className='order-btn' id={String(pizza.id)} onClick={() => addOrder(pizza)}>order</button>
                </div>
            </div>
        </div>
    )
}

export default SinglePizza;