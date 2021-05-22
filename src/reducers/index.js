import { handleFilterClickType, handleCartClickType } from "../utils/actionTypes";

const reducer = (state, action) =>{
  switch (action.type) {
    case handleFilterClickType:
      return {
        ...state,
        filterClick: action.payload
      }
      break;
      
    case handleCartClickType:
      return{
        ...state,
        cartClick: action.payload
      }
    default:
      return state;
      break;
  }
}

export default reducer;