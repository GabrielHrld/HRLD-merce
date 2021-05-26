import {handleFilterClickType, handleCartClickType, addToCartType, handleSideMenuClickType, deleteToCartType, handleQuantityType, orderByPriceType} from '../utils/actionTypes';

export const handleFilterClick = (payload) => ({
  type: handleFilterClickType,
  payload,
})

export const handleCartClick = (payload) => ({
  type: handleCartClickType,
  payload,
})

export const addToCart = (payload) => ({
  type: addToCartType,
  payload
})

export const handleSideMenuClick = (payload) => ({
  type: handleSideMenuClickType,
  payload
})

export const deleteToCart = (payload) => ({
  type: deleteToCartType,
  payload
})

export const handleQuantity = (payload, condition) => ({
  type: handleQuantityType,
  payload,
  condition
})

export const orderByPrice = (payload) => ({
  type: orderByPriceType,
  payload
})