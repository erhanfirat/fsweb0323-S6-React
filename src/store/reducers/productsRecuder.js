import { productActions } from "../actions/actions";

const initialState = [];

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.setProducts:
      return [...action.payload];

    case productActions.deleteProduct:
      return state.filter((product) => product.id !== action.payload);

    default:
      return state;
  }
}
