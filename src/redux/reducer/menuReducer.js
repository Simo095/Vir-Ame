import {
  ADD_MENU,
  ADD_WARD,
  NOT_FOUND,
  UPDATE_MENU,
} from "../action/menuAction";

const initialState = {
  menu: [],
  ward: [],
  notFound: false,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        menu: [...action.payload],
      };
    case ADD_WARD:
      return {
        ...state,
        ward: [...action.payload],
      };
    case NOT_FOUND:
      return {
        ...state,
        notFound: action.payload,
      };
    case UPDATE_MENU:
      return {
        ...state,
        menu: [...action.payload],
        notFound: action.payload.length === 0,
      };
    default:
      return state;
  }
};
export default menuReducer;
