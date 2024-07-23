export const ERROR_STOCK_DISH = "ERROR_STOCK_DISH";
export const ADD_ERROR_LIST = "ADD_ERROR_LIST";

export const modifyConditionErrorDishStock = condition => ({ type: ERROR_STOCK_DISH, payload: condition });
export const addErrorList = list => ({ type: ERROR_STOCK_DISH, payload: list });
