import {createContext,useContext} from 'react';
import Contact from '../pages/contact';
// createContext is used to create a context object
const AppContext = createContext();

// creat a provider component
// The value prop will be passed down to all components that are wrapped by this provider

const AppProvider = ({children})=>{
    return <AppContext.Provider 
    value={{
        name : 'Subhan Ahmed',
        ContactComponent : Contact
    }} >{children}</AppContext.Provider>;
}
// custom hook to use the context
const useAppContext=()=>{
return useContext(AppContext);
}
export {AppProvider,AppContext,useAppContext};