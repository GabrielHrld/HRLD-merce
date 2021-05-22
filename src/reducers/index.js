import { handleFilterClickType } from "../utils/actionTypes";

const reducer = (state, action) =>{
  switch (action.type) {
    case handleFilterClickType:
      return {
        ...state,
        filterClick: action.payload
      }
      break;
  
    default:
      return state;
      break;
  }
}

export default reducer;