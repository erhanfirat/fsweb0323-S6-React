// Action Creators

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
