const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":

            let { id, colors, amount, product } = action.payload;
            console.log(product);
            return {
                ...state
            }
        default:
            return state

    }
}

export default CartReducer 