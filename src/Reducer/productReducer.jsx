
function productReducer(state,action) {

    switch(action.type){
        case "Set_LOADING":
        return{
            ...state,
            isLoading :true
        } 
         case "MY_API_DATA":
            const featureData = action.payload;
            const res  = featureData.filter((CurrElement)=>{
                return CurrElement.featured === true;
            })
            return{
                 ...state,
            isLoading :false,
            isError : false,
            featureProducts: res,
            products:action.payload,
            }
         case "Set_Error":
        return{
            ...state,
            isLoading :false,
            isError : true,
        } 
        
    }
  return state;
}

export default productReducer