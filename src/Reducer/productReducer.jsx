const productReducer = (state, action) => {
  switch (action.type) {
    case "IsLoading":
      return {
        ...state,
        isLoading: true,
      };

    case "API_DATA": {
      const featureData = action.payload.filter((currElement) => {
        return currElement.featured === true;
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
    default: {
      return state;
    }
  }
};

export default productReducer;
