import {
  ADD_DISH,
  ADD_NOTE,
  ADD_QNT_CART,
  MINUS_QNT,
  MINUS_TOTAL,
  NOTIFY,
  OBJ_WEB_TO_DB,
  PLUS_TOTAL,
  SET_ORDERED_FOOD
} from "../action/cartAction";

const initialState = {
  orderedFood: [],
  qnt: 0,
  total: 0.0,
  notify: false,
  note: "",
  objIdDishQnt: null,
  covered: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH:
      return {
        ...state,
        orderedFood: [...state.orderedFood, action.payload]
      };

    case ADD_QNT_CART:
      return {
        ...state,
        qnt: state.qnt + action.payload
      };

    case SET_ORDERED_FOOD:
      return {
        ...state,
        orderedFood: action.payload
      };
    case MINUS_QNT:
      return {
        ...state,
        qnt: state.qnt - action.payload
      };
    case PLUS_TOTAL:
      return {
        ...state,
        total: state.total + action.payload
      };
    case MINUS_TOTAL:
      return {
        ...state,
        total: state.total - action.payload
      };
    case NOTIFY:
      return {
        ...state,
        notify: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        note: action.payload
      };
    case OBJ_WEB_TO_DB:
      return {
        ...state,
        objIdDishQnt: action.payload
      };
    default:
      return state;
  }
};
export default cartReducer;
