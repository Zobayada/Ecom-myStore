const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":

            let { id, color, amount, product } = action.payload;

            let cartProduct;
            cartProduct = {
                id: id + color,
                name: product.name,
                amount,
                color,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }

        case "REMOVE_ITEM":

            let updatedCart = state.cart.filter(
                (curItem) => curItem.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart
            }

        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }
        default:
            return state

    }
}

export default CartReducer 