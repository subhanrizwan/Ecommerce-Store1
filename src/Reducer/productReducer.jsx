const productReducer = (state, action) => {
  switch (action.type) {
    case "IsLoading":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA": {
      const featureData = action.payload.filter((currElement) => {
        return currElement.category === "jewelery";
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    }
    case "IsError":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "Single_Loading":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "Single_Product": {
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    }

    case "Single_Error":
      return {
        ...state,
        Single_Loading: false,
        Single_Error: true,
      };
    default: {
      return state;
    }
  }
};

export default productReducer;
