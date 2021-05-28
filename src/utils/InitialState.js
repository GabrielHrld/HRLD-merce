import {productsMock} from './productsMock'

const data = localStorage.getItem('cart')

export const initialState = {
  "user": {
    name: 'Gabriel',
    lastname: 'Rodriguez',
    email: 'test@test.com',
    role: 'admin'
  },
  "cart": data != null ? JSON.parse(data) : [],
  "sideMenu": false,
  "filterClick": false,
  "cartClick": false,
  "overlay": false,
  "modalClick": false,
  "modal": {},
  "products": productsMock,
}