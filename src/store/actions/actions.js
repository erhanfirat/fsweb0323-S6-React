// Action Creators

import axios from "axios";
import { axiosInstance } from "../../endpoints/api";

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
  axiosInstance.get("products").then((res) => {
    // bu dispatch Thunk middle ware inden başlar
    dispatch({
      type: productActions.setProducts,
      payload: res.data,
    });
  });
};

export const deleteProductActionCreator = (propductId) => (dispatch) => {
  axiosInstance.delete(`products/${propductId}`).then((res) => {
    // bu dispatch Thunk middle ware inden başlar
    dispatch(getProductsActionCreator());
  });
};
