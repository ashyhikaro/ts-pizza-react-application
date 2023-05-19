import React, {useState} from 'react'
// import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import Pizza from '../models/Pizza'
import Order from '../models/Order'
import pizzasMenuList from '../data/PizzasData'
// import EditPizzaForm from './EditPizzaForm'

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
    setOrderList: (state: any) => void;
}

const SinglePizza: React.FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza, setOrderList}) => {
    const [edit, setEdit] = useState<boolean>(false)
   
    // const handleToggleEdit = (): void => {
    //     setEdit(!edit)
    // }

    // const handleDelete = (): void => {
    //     deletePizza(pizza.id)
    // }

    const addToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const {id} = e.currentTarget

        let foundedPizza: Order = JSON.parse(JSON.stringify(pizzasMenuList.filter(pizza => +id === pizza.id)[0]))
        foundedPizza.count = 1
        foundedPizza.total = foundedPizza.price

        setOrderList((state: any) => {
            const existOrder: Order = state.filter((order: Order) => foundedPizza.id === order.id)[0]

            if (existOrder) {
                existOrder.count++
                existOrder.total = +existOrder.count * existOrder.price
                return [...state.filter((order: Order) => existOrder.id !== order.id), existOrder]
            } else {
                return [...state, foundedPizza]
            }
            
        })
    }
   
    return (
        <div className='pizza' >
            <img src={`/images/${pizza.img}`} alt={pizza.title} className='pizza-img'/>

            <div className='discription-container'>
                <h2 className='pizza-title'>{pizza.title}</h2>
                <p className='pizza-description'>{pizza.discription}</p>

                <div className='order-container'>
                    <span className='pizza-price'>{pizza.price} $</span>
                    <button className='order-btn' id={String(pizza.id)} onClick={addToCart}>order</button>
                </div>
            </div>

            {/* <div className='pizza-controls'>
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div> */}

            {/* {edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/> : null} */}
        </div>
    )
}

export default SinglePizza;