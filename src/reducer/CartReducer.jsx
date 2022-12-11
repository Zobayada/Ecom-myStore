const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":

            let { id, colors, amount, product } = action.payload;

            let cartProduct;
            cartProduct = {
                id: id + colors,
                name: product.name,
                amount,
                colors,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        default:
            return state

    }
}

export default CartReducer 