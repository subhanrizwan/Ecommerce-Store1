// createContext is a global store
import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import productReducer from "../Reducer/productReducer";
 
// createContext is a global store
const AppContext = createContext();

// provider like a wrapper component
const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const Api = "https://api.pujakaitem.com/api/products";
  // my first api call for all products data
  const GetApiData = async (Api) => {
    dispatch({ type: "IsLoading" });
    try {
      const res = await axios.get(Api);
      let products = await res.data;
      dispatch({ type: "API_DATA", payload: products });
      console.log(products);
    } catch (error) {
      dispatch({ type: "IsError" });
      console.log(error.message);
    }
  };

  // my second api call for single product data
  const GetSingleProduct = async (Api) => {
    dispatch({ type: "Single_Loading" });
    try {
      const res = await axios.get(Api);
      let single_product = await res.data;
      dispatch({ type: "Single_Product", payload: single_product });
      console.log(single_product);
    } catch (error) {
      dispatch({ type: "Single_Error" });
      console.log(error.message);
    }
  };


  useEffect(() => {
    GetApiData(Api);
  }, []);

  // const useProducts = () => {
  //   return useContext(AppContext);
  // };

  return (
    <AppContext.Provider value={{ ...state,GetSingleProduct }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
