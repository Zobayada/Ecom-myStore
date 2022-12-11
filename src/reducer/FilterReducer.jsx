const FilterReducer = (state, action) => {

    switch (action.type) {

        case "FILTER_PRODUTS_LOADING":

            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);
            let minPrice = Math.min(...priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice, minPrice },

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

            const { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilter = tempFilter.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text)
                })
            }

            if (category !== "all") {
                tempFilter = tempFilter.filter((curElm) => {
                    return curElm.category === category
                })
            }

            if (company !== "all") {
                tempFilter = tempFilter.filter((curElm) => {
                    return curElm.company.toLowerCase() === company.toLowerCase()
                })
            }

            if (color !== "all") {
                tempFilter = tempFilter.filter((curElm) => {
                    return curElm.colors.includes(color)
                })
            }
            if (price === 0) {
                tempFilter = tempFilter.filter(
                    (curElm) => curElm.price === price
                );
            } else {
                tempFilter = tempFilter.filter(
                    (curElm) => curElm.price <= price
                );
            }
            return {
                ...state,
                filter_products: tempFilter
            }

        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: state.filters.minPrice,
                }
            }
        default:
            return state;
    }

}

export default FilterReducer