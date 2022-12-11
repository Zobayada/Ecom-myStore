import React from 'react';
import { FaTrash } from 'react-icons/fa';
import CartAmountToggle from '../component/CartAmountToggle';
import { useGlobalCart } from '../context/CartContext';
import FormatPrice from "../helpers/FormatPrice"

const CartItem = ({ id, name, image, colors, amount, price }) => {

    const { setDecrease, setIncrease } = useGlobalCart()
    console.log(colors);
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
                            style={{ backgroundColor: colors, color: colors }}>
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
                <FaTrash className="remove_icon" />
            </div>
        </div>
    )
}

export default CartItem