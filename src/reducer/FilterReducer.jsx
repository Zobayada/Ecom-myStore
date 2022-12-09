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
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":
            return {
                ...state,
                sorting_value: action.payload
            }
        case "SORTING_PRODUCT":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempNew = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }

            newSortData = tempNew.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData
            }

        case "GET_FILTER_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "FILTER_PRODUCT":
            let { all_products } = state;
            let tempFilter = [...all_products]

            const { text } = state.filters;

            if (text) {
                tempFilter = tempFilter.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text)
                })
            }
            return {
                ...state,
                filter_products: tempFilter
            }
        default:
            return state;
    }

}

export default FilterReducer