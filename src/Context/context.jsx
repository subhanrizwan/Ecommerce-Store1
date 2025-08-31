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
  };
  const [state, dispatch] = useReducer(productReducer, initialState);

  const Api = "https://api.pujakaitem.com/api/products";
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

  useEffect(() => {
    GetApiData(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
