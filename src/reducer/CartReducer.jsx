const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":

            let { id, color, amount, product } = action.payload;

            let existingProduct = state.cart.find(
                (curItem) => curItem.id === id + color
            );

            if (existingProduct) {
                let updatedProduct = state.cart.map((curElem) => {
                    if (curElem.id === id + color) {
                        let newAmount = curElem.amount + amount;

                        if (newAmount >= curElem.max) {
                            newAmount = curElem.max;
                        }
                        return {
                            ...curElem,
                            amount: newAmount,
                        };
                    } else {
                        return curElem;
                    }
                });
                return {
                    ...state,
                    cart: updatedProduct,
                };
            }
            else {
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

        case "CART_DECREASE":
            let updateCart = state.cart.map((curElm) => {
                if (curElm.id === action.payload) {

                    let decAmount = curElm.amount - 1
                    if (decAmount <= 1) {
                        decAmount = 1
                    }
                    return {
                        ...curElm,
                        amount: decAmount,
                    };
                } else {
                    return curElm
                }
            })
            return {
                ...state,
                cart: updateCart
            }

        case "CART_INCREASE":
            let updateProduct = state.cart.map((curElm) => {
                if (curElm.id === action.payload) {

                    let incAmount = curElm.amount + 1
                    if (incAmount >= curElm.max) {
                        incAmount = curElm.max
                    }
                    return {
                        ...curElm,
                        amount: incAmount,
                    };

                } else {
                    return curElm
                }
            })
            return {
                ...state,
                cart: updateProduct
            }
        // case "CART_TOTAL_ITEM":

        //     let updateCartValue = state.cart.reduce((initialValue, curElm) => {

        //         let { amount } = curElm;
        //         initialValue = initialValue + amount
        //         return initialValue;
        //     }, 0)
        //     return {
        //         ...state,
        //         total_item: updateCartValue
        //     }
        // case "CART_TOTAL_PRICE":

        //     let updateCartPrice = state.cart.reduce((initialValue, curElm) => {

        //         let { amount, price } = curElm;
        //         initialValue = initialValue + price * amount
        //         return initialValue;
        //     }, 0)
        //     return {
        //         ...state,
        //         total_amount: updateCartPrice
        //     }

        case "CART_TOTAL_PRICE_ITEM":
            let { total_amount, total_item } = state.cart.reduce((accum, curElm) => {

                let { amount, price } = curElm;

                accum.total_item += amount;
                accum.total_amount += price * amount

                return accum;
            },
                {
                    total_amount: 0,
                    total_item: 0
                })

            return {
                ...state,
                total_amount,
                total_item
            }
        default:
            return state

    }
}

export default CartReducer 