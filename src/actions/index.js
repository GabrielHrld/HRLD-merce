import {handleFilterClickType, handleCartClickType} from '../utils/actionTypes';

export const handleFilterClick = (payload) => ({
  type: handleFilterClickType,
  payload,
})

export const handleCartClick = (payload) => ({
  type: handleCartClickType,
  payload,
})