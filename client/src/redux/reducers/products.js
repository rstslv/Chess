import * as productActionType from "../constans/productsConstans";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productActionType.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case productActionType.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case productActionType.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case productActionType.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case productActionType.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case productActionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case productActionType.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
