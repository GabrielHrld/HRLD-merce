import {productsMock} from './productsMock'

const dataUser = localStorage.getItem('user')
const {access_token, user} = JSON.parse(dataUser)
const dataCart = localStorage.getItem('cart')

export const initialState = {
  "user": dataUser != null ?  {...user, access_token: access_token} : {},
  "cart": dataCart != null ? JSON.parse(dataCart) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "modalClick": false,
  "modal": {},
  "products": productsMock,
}