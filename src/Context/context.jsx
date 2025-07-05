import {createContext,useContext, useEffect} from 'react';
import Contact from '../pages/contact';
// createContext is used to create a context object
const AppContext = createContext();


// creat a provider component
// The value prop will be passed down to all components that are wrapped by this provider
const AppProvider = ({children})=>{
    const Api = 'https://api.pujakaitem.com/api/products'

    const getProducts = async(url)=>{
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
        
        const res = await axios.get(url);
    
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