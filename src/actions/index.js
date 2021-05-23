import {handleFilterClickType, handleCartClickType, addToCartType, handleSideMenuClickType} from '../utils/actionTypes';

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