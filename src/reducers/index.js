import {
  handleFilterClickType,
  handleCartClickType,
  addToCartType,
  handleSideMenuClickType,
  deleteToCartType,
  handleQuantityType,
  orderByPriceType,
  minToMaxType,
  maxToMinType,
  restoreType,
  handleModalType,
  chargeTheModalType
} from '../utils/actionTypes';
import { bubbleSort, bubbleSortInverse, orderById } from '../utils/BubbleSort';

const reducer = (state, action) => {
  switch (action.type) {
    case handleSideMenuClickType:
      return {
        ...state,
        sideMenu: !state.sideMenu,
        overlay: state.cartClick ? true : !state.overlay,
        cartClick: false,
      };

    case handleFilterClickType:
      return {
        ...state,
        overlay: !state.overlay,
        filterClick: action.payload,
        cartClick: false,
      };

    case handleCartClickType:
      return {
        ...state,
        cartClick: action.payload,
        overlay: state.filterClick || state.sideMenu ? true : !state.overlay,
        filterClick: false,
        sideMenu: false,
      };

    case addToCartType:
      const validate = state.cart.some(
        (item) =>
          item.id == action.payload.id && item.size[0] == action.payload.size[0]
      );
      if (state.cart.length == 0) {
        localStorage.setItem(
          'cart',
          JSON.stringify([
            { ...action.payload, quantity: action.payload.quantity },
          ])
        );
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...action.payload, quantity: action.payload.quantity },
          ],
        };
      }
      if (validate) {
        const indexProductCart = state.cart.findIndex(
          (item) =>
            item.id == action.payload.id &&
            item.size[0] == action.payload.size[0]
        );
        const productOnCart = state.cart[indexProductCart];
        state.cart.splice(indexProductCart, 1, {
          ...productOnCart,
          quantity: productOnCart.quantity + action.payload.quantity,
        });
        localStorage.setItem('cart', JSON.stringify([...state.cart]));
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      localStorage.setItem(
        'cart',
        JSON.stringify([
          ...state.cart,
          { ...action.payload, quantity: action.payload.quantity },
        ])
      );
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: action.payload.quantity },
        ],
      };

    case deleteToCartType:
      const indexProductCart = state.cart.findIndex(
        (item) =>
          item.id == action.payload.id && item.size[0] == action.payload.size[0]
      );
      state.cart.splice(indexProductCart, 1);
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
      return {
        ...state,
        cart: [...state.cart],
      };

    // aumenta o disminuye la cantidad
    case handleQuantityType:
      const indexProduct = state.cart.findIndex(
        (item) =>
          item.id == action.payload.id && item.size[0] == action.payload.size[0]
      );
      const productOnCart = state.cart[indexProduct];
      if (action.condition == 0) {
        if (productOnCart.quantity == 1) {
          state.cart.splice(indexProduct, 1);
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
          return {
            ...state,
            cart: [...state.cart],
          };
        }
        state.cart.splice(indexProduct, 1, {
          ...productOnCart,
          quantity: productOnCart.quantity - 1,
        });
        localStorage.setItem('cart', JSON.stringify([...state.cart]));
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      if (action.condition == 1) {
        state.cart.splice(indexProduct, 1, {
          ...productOnCart,
          quantity: productOnCart.quantity + 1,
        });
        localStorage.setItem('cart', JSON.stringify([...state.cart]));
        return {
          ...state,
          cart: [...state.cart],
        };
      }

      case orderByPriceType:
      if (action.payload == restoreType) { //ordenamos de menor a mayor
        return{
          ...state,
          products: orderById(state.products)
        }
      }
      if (action.payload == minToMaxType) { //ordenamos de menor a mayor
        return{
          ...state,
          products: bubbleSort(state.products)
        }
      }
      if (action.payload == maxToMinType) { //ordenamos de mayor a menor
        return{
          ...state,
          products: bubbleSortInverse(state.products)
        }
      }

      case handleModalType:
        return{ 
          ...state,
          modalClick: !state.modalClick,
          overlay: false,
        }
      
      case chargeTheModalType:
        return{
          ...state,
          modalClick: true,
          overlay: true,
          modal : action.payload
        }
    default:
      return state;
  }
};

export default reducer;
