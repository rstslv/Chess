import { combineReducers } from "redux";
import { productsReducer, productDetailsReducer } from "./products";
import cartItems from "./cartReducer";
export default combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartItems,
});
