import {productsMock} from './productsMock'

const data = localStorage.getItem('cart')

export const initialState = {
  "user": {},
  "cart": data != null ? JSON.parse(data) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "products": productsMock,
}