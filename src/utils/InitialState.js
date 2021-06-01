import axios from 'axios';
import {productsMock} from './productsMock'

const dataUser = localStorage.getItem('user')
let token;
let user_;
 if(dataUser != null){
   const {access_token, user} = JSON.parse(dataUser)
   token = access_token;
   user_ = user
}
const dataProducts = localStorage.getItem('products')
const dataCart = localStorage.getItem('cart')

export const initialState = {
  "user": dataUser != null ?  {...user_, access_token: token} : {},
  "cart": dataCart != null ? JSON.parse(dataCart) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "modalClick": false,
  "modalAddProductClick": false,
  "modal": {},
  // "products": dataProducts != null ? JSON.parse(dataProducts) : []//productsMock,
  "products": [],
}