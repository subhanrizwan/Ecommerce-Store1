// context create kia
// createContext is a global store
import { createContext ,useContext} from "react";
// import axios from  'axios';
// import Contact from '../pages/contact';
// import productReducer from '../Reducer/productReducer';
// import Herosection from '../Sections/HomeSection/HomeSlider/Herosection.jsx';

// createContext is a global store
const AppContext = createContext();

// provider like a wrapper component
const AppProvider = ({ children }) => {
  // const initialState ={
  //     isLoading : false,
  //     isError:false,
  //     products:[],
  //     featureProducts:[]
  // }
  // const [state , dispatch] = useReducer(productReducer,initialState)

  // const Api = 'https://api.pujakaitem.com/api/products'
  // const getProducts = async(url)=>{
  // dispatch({type : "Set_LOADING"});
  // try{
  //     const res = await axios.get(url);
  //     const products = await res.data;
  //     console.log(products);

  // //     dispatch({type:"MY_API_DATA", payload: products});
  // }
  // catch(error){
  //     console.log(error.message);

  // //    dispatch({type : "Set_Error"});
  // }

  // 1st method
  //  (await fetch(url)).json()
  // .then((res)=> console.log(res))
  // .catch((err)=> console.log(err,err.message))

  // second method
  // try{
  //     let data = await fetch(url);
  //     let response = await data.json();
  //     console.log(response);
  // }
  // catch(err){
  //     console.log(err,err.message);
  // }
  // }
  // useEffect(()=>{
  // getProducts(Api);
  // },[])
  return <AppContext.Provider value={"Subhan Ahmed"}>{children}</AppContext.Provider>;
};

// custom hook to use the context
const useAppContext=()=>{
return useContext(AppContext);
}

export { AppProvider, AppContext, useAppContext };