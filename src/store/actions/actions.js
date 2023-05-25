// Action Creators

import axios from "axios";

export const productActions = {
  setProducts: "SET_PRODUCTS",
  deleteProduct: "DELETE_PRODUCT",
};

export const generalActions = {
  changeTitle: "CHANGE_TITLE",
  addProductToShoppingCart: "ADD_PRODUCT_TO_SHOPPING_CART",
};

export const changeTitleAction = (newTitle) => ({
  type: generalActions.changeTitle,
  payload: newTitle,
});

export const setProductsAction = (products) => ({
  type: productActions.setProducts,
  payload: products,
});

export const deleteProductAction = (productId) => ({
  type: productActions.deleteProduct,
  payload: productId,
});

export const addtoShopingCart = (product) => ({
  type: generalActions.addProductToShoppingCart,
  payload: product,
});

export const getProductsActionCreator = () => (dispatch, getState) => {
  console.log("getState(): ", getState());
  axios
    .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
    .then((res) => {
      // bu dispatch Thunk middle ware inden başlar
      dispatch({
        type: productActions.setProducts,
        payload: res.data,
      });
    });
};

export const deleteProductActionCreator = (propductId) => (dispatch) => {
  axios
    .delete(
      `https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${propductId}`
    )
    .then((res) => {
      // bu dispatch Thunk middle ware inden başlar
      dispatch(getProductsActionCreator());
    });
};
