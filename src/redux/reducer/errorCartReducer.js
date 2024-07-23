import {} from "../action/cartAction";
import { ERROR_STOCK_DISH } from "../action/errorCartAction";

const initialState = {
  errorDishNotRightStock: false,
  listDishNotInStock: []
};

const errorCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_STOCK_DISH:
      return {
        ...state,
        errorDishNotRightStock: action.payload
      };
    case 2:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default errorCartReducer;
