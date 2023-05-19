import React from 'react'
import Order from '../models/Order';
import SinglePizza from './SinglePizza';
import pizzasMenuList from '../data/PizzasData';

interface DisplayPizzasProps {
    setOrderList: (state: Order[]) => void;
}

const DisplayPizzas: React.FC<DisplayPizzasProps> = ({setOrderList}) => {
    return (
        <div className='container'>
            {pizzasMenuList.map((pizza) => {
                return <SinglePizza 
                            key={pizza.id} 
                            pizza={pizza} 
                            setOrderList={setOrderList}
                        />
            })}
        </div>
    )
}

export default DisplayPizzas;