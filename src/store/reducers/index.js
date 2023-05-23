import { combineReducers } from "redux";
import { generalReducer } from "./generalReducer";
import { productsReducer } from "./productsRecuder";

export const reducers = combineReducers({
  general: generalReducer,
  products: productsReducer,
});
