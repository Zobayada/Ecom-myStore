import { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "../reducer/FilterReducer";
import { useGlobalProduct } from "./ProductContext";

const FilterContext = createContext();

const initial = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
    }
}

const FilterProvider = ({ children }) => {
    const { products } = useGlobalProduct();

    const [state, dispatch] = useReducer(FilterReducer, initial);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    const sorting = (event) => {
        let userValue = event.target.value
        return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    }

    const updateFilter = (event) => {
        const name = event.target.name;
        const value = event.target.value

        return dispatch({ type: "GET_FILTER_VALUE", payload: { name, value } });
    }

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCT" })
        dispatch({ type: "SORTING_PRODUCT" })
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "FILTER_PRODUTS_LOADING", payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

const useGlobalFilter = () => {
    return useContext(FilterContext)
}
export { FilterContext, FilterProvider, useGlobalFilter }               