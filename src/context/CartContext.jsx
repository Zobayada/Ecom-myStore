import { createContext, useContext } from "react";
import { useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext()

const initial = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initial)

    const addToCart = (id, colors, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, colors, amount, product } })
    }
    return (
        <CartContext.Provider value={{ ...state, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useGlobalCart = () => {
    return useContext(CartContext)
}
export { CartContext, CartProvider, useGlobalCart }