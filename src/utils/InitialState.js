import {productsMock} from './productsMock'

const dataUser = localStorage.getItem('user')
console.log(dataUser)
const dataCart = localStorage.getItem('cart')

export const initialState = {
  "user": dataUser != null ?  JSON.parse(dataUser) : {},
  "cart": dataCart != null ? JSON.parse(dataCart) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "modalClick": false,
  "modal": {},
  "products": productsMock,
}