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
        case "SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }
        case "SINGLE_DATA":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
        case "SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            }

        default:
            return state;
    }
}

export default ProductReducer