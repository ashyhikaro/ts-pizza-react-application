import {useRef} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoCloseOutline} from 'react-icons/io5'
import Order from '../models/Order';
import SingleOrder from './SingleOrder';
import { PopupActions } from 'reactjs-popup/dist/types';

interface CartProps {
    orderList: Order[];
    setOrderList: (state: Order[]) => void;
}

const Cart: React.FC<CartProps> = ({orderList, setOrderList}) => {
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
                    {orderList.map((orderItem: Order, index: number) => 
                        <SingleOrder key={index} orderItem={orderItem} setOrderList={setOrderList} orderList={orderList}/>
                    )}
                </div>

                <h3 className='pop-up_total'>
                    Total: <span className='pop-up_total__number'>{orderList.reduce((acc: number, val: Order) => acc += +val.total, 0).toFixed(2)} $</span>
                </h3>
            </div>
        </Popup>
    )
}

export default Cart;