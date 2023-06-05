import React from 'react'
import Order from '../models/Order';
import {AiFillDelete} from 'react-icons/ai'
import { useActions } from './hooks/useActions';

interface SingleOrderProps {
    orderItem: Order;
    orders: Order[];
}

const SingleOrder: React.FC<SingleOrderProps> = ({orderItem, orders}) => {

    const {removeOrder, plusCountOfOrder, minusCountOfOrder} = useActions()

    return (
        <div className='order_list__item'>
            <img src={require(`../images/${orderItem.img}`)}  alt={orderItem.title} className='order_img' />
            <div className='order_discription'>
                <div className='order_header'>
                    <h4 className='order_title'>{orderItem.title}</h4>
                    <AiFillDelete onClick={() => removeOrder(orderItem)} className='order__delete_btn'/>
                </div>
                
                <span className='order_price'>Price: {orderItem.price} $</span>
                <p>Amount: {orderItem.count}</p>

                <div className='order_count_panel'>
                    <button onClick={() => plusCountOfOrder(orderItem)}>+</button>
                    <button onClick={() => minusCountOfOrder(orderItem)}>-</button>
                </div>

                <p>Total: {orderItem.total} $</p>
            </div>
        </div>
    )
}

export default SingleOrder;