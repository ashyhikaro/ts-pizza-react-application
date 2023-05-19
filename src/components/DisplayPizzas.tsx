import React from 'react'
import Pizza from '../models/Pizza'
import Order from '../models/Order';
import SinglePizza from './SinglePizza';
import pizzasMenuList from '../data/PizzasData';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
    setOrderList: (state: Order[]) => void;
}

const DisplayPizzas: React.FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza, setOrderList}) => {
    return (
        <div className='container'>
            {pizzasMenuList.map((pizza) => {
                return <SinglePizza 
                            key={pizza.id} 
                            updatePizza={updatePizza} 
                            deletePizza={deletePizza} 
                            pizza={pizza} 
                            setOrderList={setOrderList}
                        />
            })}
        </div>
    )
}

export default DisplayPizzas;