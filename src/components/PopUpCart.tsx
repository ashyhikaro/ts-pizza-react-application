import React, {useRef} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoCloseOutline} from 'react-icons/io5'
import Order from '../models/Order';
import SingleOrder from './SingleOrder';
import { PopupActions } from 'reactjs-popup/dist/types';
import { useOrder } from './hooks/useOrder';

const Cart: React.FC = () => {
    const {orders} = useOrder()

    const ref = useRef<PopupActions>(null);
    const closeTooltip = () => ref.current ? ref.current.close() : null;

    return (
        <Popup ref={ref} trigger={
            <AiOutlineShoppingCart className='cart-btn'/>
        } modal nested> 
            <div className='pop-up__container'>
                <div className='pop-up__header'>
                    <h2 className='pop-up_title'>Your order</h2>
                    <IoCloseOutline className='pop-up__closing' onClick={closeTooltip} />
                </div>

                <div className='order_list'>
                    {orders.map((orderItem: Order, index: number) => 
                        <SingleOrder key={orderItem.id} orderItem={orderItem} orders={orders}/>
                    )}
                </div>

                <h3 className='pop-up_total'>
                    Total: <span className='pop-up_total__number'>{orders.reduce((acc: number, val: Order) => acc += +val.total, 0).toFixed(2)} $</span>
                </h3>
            </div>
        </Popup>
    )
}

export default Cart;