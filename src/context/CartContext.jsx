import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const getCartData = () => {
    let newCartData = localStorage.getItem("myStoreCart");
    if (newCartData === []) {
        return []
    }
    else {
        return JSON.parse(newCartData)
    }
}

const initial = {
    cart: getCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initial)

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    useEffect(() => {
        localStorage.setItem("myStoreCart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useGlobalCart = () => {
    return useContext(CartContext)
}
export { CartContext, CartProvider, useGlobalCart }