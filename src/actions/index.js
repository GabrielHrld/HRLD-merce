import {
  handleFilterClickType,
  handleCartClickType,
  addToCartType,
  handleSideMenuClickType,
  deleteToCartType,
  handleQuantityType,
  orderByPriceType,
  handleModalType,
  chargeTheModalType,
  handleUserType,
  handleModalAddProductType,
  productsType,
} from '../utils/actionTypes';

export const handleFilterClick = (payload) => ({
  type: handleFilterClickType,
  payload,
});

export const handleCartClick = (payload) => ({
  type: handleCartClickType,
  payload,
});

export const addToCart = (payload) => ({
  type: addToCartType,
  payload,
});

export const handleSideMenuClick = (payload) => ({
  type: handleSideMenuClickType,
  payload,
});

export const deleteToCart = (payload) => ({
  type: deleteToCartType,
  payload,
});

export const handleQuantity = (payload, condition) => ({
  type: handleQuantityType,
  payload,
  condition,
});

export const orderByPrice = (payload) => ({
  type: orderByPriceType,
  payload,
});

export const handleModal = () => ({
  type: handleModalType,
});

export const chargeTheModal = (payload) => ({
  type: chargeTheModalType,
  payload,
});

export const handleUser = (payload) => ({
  type: handleUserType,
  payload,
});

export const handleModalAddProduct = () => ({
  type: handleModalAddProductType,
});

export const chargeProducts = (payload) => ({
  type: productsType,
  payload,
});
