import {productsMock} from './productsMock'

const data = localStorage.getItem('cart')
console.log(typeof data)
console.log(JSON.parse(data))

export const initialState = {
  "user": {},
  "cart": data != null ? JSON.parse(data) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "products": productsMock,
}