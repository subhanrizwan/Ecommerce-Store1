import {createContext,useContext, useEffect} from 'react';
import axios from  'axios';
import Contact from '../pages/contact';
// createContext is used to create a context object
const AppContext = createContext();


const AppProvider = ({children})=>{
    const Api = 'https://api.pujakaitem.com/api/products'

    const getProducts = async(url)=>{
        
        // 0 method
        const res = await axios.get(url);
        console.log(res.data);
        
    
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
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

// custom hook to use the context
const useAppContext=()=>{
return useContext(AppContext);
}
export {AppProvider,AppContext,useAppContext};