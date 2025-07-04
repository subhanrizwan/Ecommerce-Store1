import {createContext,useContext, useEffect} from 'react';
import axios from  'axios';
import Contact from '../pages/contact';
// createContext is used to create a context object
import productReducer from '../Reducer/productReducer';
const AppContext = createContext();

const AppProvider = ({children})=>{

    const initialState ={
        isLoading : false,
        isError:false,
        products:[],
        featureProducts:[]
    }
    const [state , dispatch] = useReducer(productReducer,initialState)
    
    const Api = 'https://api.pujakaitem.com/api/products'
    const getProducts = async(url)=>{
        dispatch({type : "Set_LOADING"});
        try{
            const res = await axios.get(url);
            const prodcuts = await res.data;
            dispatch({type:"MY_API_DATA", payload: prodcuts});
        }
        catch(error){
           dispatch({type : "Set_Error"});
        }
        
    
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
    }
    useEffect(()=>{
        getProducts(Api);
    },[])
    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
}

// custom hook to use the context
const useAppContext=()=>{
return useContext(AppContext);
}
export {AppProvider,AppContext,useAppContext};