import React from 'react'
import Order from '../models/Order';
import {AiFillDelete} from 'react-icons/ai'

interface SingleOrderProps {
    orderItem: Order;
    setOrderList: (state: Order[]) => void;
    orderList: Order[];
}

const SingleOrder: React.FC<SingleOrderProps> = ({orderItem, setOrderList, orderList}) => {

    const handleAmount = (direction: string): void => {
        let newOrder: Order = JSON.parse(JSON.stringify(orderItem))
        let newOrderList: Order[] = JSON.parse(JSON.stringify(orderList))

        if (direction === 'plus') {
            newOrder.count++
        } else {
            if (newOrder.count > 1) {
                newOrder.count--
            }
        }

        let total: number = newOrder.count * newOrder.price
        newOrder.total = +total.toFixed(2)

        let orderIndex: number = newOrderList.findIndex((val: Order) => val.id === newOrder.id)
        newOrderList.splice(orderIndex, 1, newOrder)

        setOrderList(newOrderList)
    }

    const handleDelete = (): void => {
        let newOrderList: Order[] = JSON.parse(JSON.stringify(orderList))
        let orderIndex: number = newOrderList.findIndex((val: Order) => val.id === orderItem.id)

        newOrderList.splice(orderIndex, 1)
        setOrderList(newOrderList)
    }

    return (
        <div className='order_list__item'>
            <img src={require(`../images/${orderItem.img}`)}  alt={orderItem.title} className='order_img' />
            <div className='order_discription'>
                <div className='order_header'>
                    <h4 className='order_title'>{orderItem.title}</h4>
                    <AiFillDelete onClick={handleDelete} className='order__delete_btn'/>
                </div>
                
                <span className='order_price'>Price: {orderItem.price} $</span>
                <p>Amount: {orderItem.count}</p>

                <div className='order_count_panel'>
                    <button onClick={() => handleAmount('plus')}>+</button>
                    <button onClick={() => handleAmount('minus')}>-</button>
                </div>

                <p>Total: {orderItem.total} $</p>
            </div>
        </div>
    )
}

export default SingleOrder;