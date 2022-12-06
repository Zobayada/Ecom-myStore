import React from 'react'

const ProductReducer = (state, action) => {

    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state;
    }
    return state
}

export default ProductReducer