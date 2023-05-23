import { generalActions } from "../actions/actions";

const initialState = {
  title: "Merhaba Redux!",
  userName: "Anonim",
  shoppingCart: [],
};

export function generalReducer(state = initialState, action) {
  switch (action.type) {
    case generalActions.changeTitle:
      return { ...state, title: action.payload };

    case generalActions.addProductToShoppingCart:
      
      return {
        ...state,
        shoppingCart: [
          ...state.shoppingCart,
          {
            count: 1,
            product: action.payload,
          },
        ],
      };

    default:
      return state;
  }
}
