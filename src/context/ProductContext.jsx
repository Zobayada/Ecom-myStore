import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initial = {
    isLoading: false,
    isErroe: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
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

    const getSingleProduct = async (url) => {
        dispatch({ type: "SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({
                type: "SINGLE_DATA", payload: singleProduct
            })
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, []);


    return (
        <>
            <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
        </>
    )
}

const useGlobalProduct = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalProduct }