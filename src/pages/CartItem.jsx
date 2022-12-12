import React from 'react';
import { FaTrash } from 'react-icons/fa';
import CartAmountToggle from '../component/CartAmountToggle';
import { useGlobalCart } from '../context/CartContext';
import FormatPrice from "../helpers/FormatPrice"

const CartItem = ({ id, name, image, color, amount, price }) => {

    const { setDecrease, setIncrease, removeItem } = useGlobalCart()


    return (
        <div className='cart grid grid-five-column'>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className="color-div">
                        <p>Colors: </p>
                        <div className="color-style"
                            style={{ backgroundColor: color, color: color }}>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)} />

            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>

            <div>
                <FaTrash className="remove_icon"
                    onClick={() => removeItem(id)}
                />
            </div>
        </div>
    )
}

export default CartItem