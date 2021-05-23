import { handleFilterClickType, handleCartClickType, addToCartType, handleSideMenuClickType } from "../utils/actionTypes";

const reducer = (state, action) =>{
  switch (action.type) {
    case handleSideMenuClickType:
      console.log('funca')
      return{
        ...state,
        sideMenu: !state.sideMenu,
        overlay: state.cartClick ? true : !state.overlay,
        cartClick: false
      } 
    case handleFilterClickType:
      return {
        ...state,
        overlay: !state.overlay,
        filterClick: action.payload,
        cartClick: false,
      }
      
    case handleCartClickType:
      return{
        ...state,
        cartClick: action.payload,
        overlay: state.filterClick || state.sideMenu ? true : !state.overlay,
        filterClick: false,
        sideMenu: false
      }

    case addToCartType:
      //validamos si el producto ya está en el carrito, si coincide su talle y ID
      const validate = state.cart.some((item)=> item.id == action.payload.id && item.size[0] == action.payload.size[0])
      if(validate){
        const indexProductCart = state.cart.findIndex((item)=> item.id == action.payload.id && item.size[0] == action.payload.size[0])
        const productOnCart = state.cart[indexProductCart];
        state.cart.splice(indexProductCart, 1, {...productOnCart, quantity: productOnCart.quantity + action.payload.quantity})
        return{
          ...state,
          cart: [...state.cart]
        }
      } else { 
        return{
          ...state,
          cart: [...state.cart, {...action.payload, quantity: action.payload.quantity}]
        }
      }
    default:
      return state;
  }
}

export default reducer;