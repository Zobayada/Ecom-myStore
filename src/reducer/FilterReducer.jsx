const FilterReducer = (state, action) => {

    switch (action.type) {
        case "FILTER_PRODUTS_LOADING":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload]
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state
            }
        default:
            return state;
    }

}

export default FilterReducer