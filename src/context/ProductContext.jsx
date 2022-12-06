import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initial = {
    isLoading: false,
    isErroe: false,
    products: [],
    featureProducts: []
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initial);

    const getProducts = async (url) => {
        dispatch({ type: "API_LOADING" })
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: "API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);


    return (
        <>
            <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
        </>
    )
}

const useGlobalProduct = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalProduct }