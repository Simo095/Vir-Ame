import { addErrorList, modifyConditionErrorDishStock } from "./errorCartAction";

export const ADD_DISH = "ADD_DISH";
export const ADD_QNT_CART = "ADD_QNT_CART";
export const MINUS_QNT = "MINUS_QNT";
export const PLUS_TOTAL = "PLUS_TOTAL";
export const MINUS_TOTAL = "MINUS_TOTAL";
export const NOTIFY = "NOTIFY";
export const SET_ORDERED_FOOD = "SET_ORDERED_FOOD";
export const ADD_NOTE = "ADD_NOTE";
export const OBJ_WEB_TO_DB = "OBJ_WEB_TO_DB";
export const ADD_COVERED = "ADD_COVERED";

export const addDishOnStore = (dish) => ({ type: ADD_DISH, payload: dish });
export const addQntCartOnStore = (one) => ({ type: ADD_QNT_CART, payload: 1 });
export const minusQntCartOnStore = (one) => ({ type: MINUS_QNT, payload: 1 });
export const plusTotalCart = (price) => ({ type: PLUS_TOTAL, payload: price });
export const minusTotalCart = (price) => ({
  type: MINUS_TOTAL,
  payload: price,
});
export const notifyCondition = (condition) => ({
  type: NOTIFY,
  payload: condition,
});
export const orderedFoodOnStore = (arrayFood) => ({
  type: SET_ORDERED_FOOD,
  payload: arrayFood,
});
export const addNoteOnStore = (note) => ({ type: ADD_NOTE, payload: note });
export const objToDBOnStore = (obj) => ({ type: OBJ_WEB_TO_DB, payload: obj });
export const costCoveredOnStore = (cost) => ({
  type: ADD_COVERED,
  payload: cost,
});

export const modifyObjToDB = (orderFoodApp, note) => {
  return async (dispatch) => {
    try {
      const repetedDish = {};

      if (repetedDish.hasOwnProperty("richiestastock")) {
        Object.assign(repetedDish, { FS_QR: 1 });
        //Object.assign(repetedDish, { note: note });

        for (const idDish of orderFoodApp) {
          if (repetedDish[idDish]) {
            repetedDish[idDish]++;
          } else {
            repetedDish[idDish] = 1;
          }
        }
        dispatch(objToDBOnStore(repetedDish));
      } else {
        // Object.assign(repetedDish, { note: note });
        Object.assign(repetedDish, { richiestastock: true });
        Object.assign(repetedDish, { FS_QR: 1 });
        for (const idDish of orderFoodApp) {
          if (repetedDish[idDish]) {
            repetedDish[idDish]++;
          } else {
            repetedDish[idDish] = 1;
          }
        }
        dispatch(objToDBOnStore(repetedDish));
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

export const checkObjToDBAndMenu = (
  objToDB,
  notRightQuantity,
  handleShowModalCart
) => {
  return async (dispatch) => {
    try {
      const ListBlobMenu = await fetch(
        `https://festival-menu.vercel.app/api/get`,
        {
          method: "GET",
        }
      );

      if (ListBlobMenu.ok) {
        const menuJson = await ListBlobMenu.json();
        const lastMenuInsert = menuJson.reduce((latest, current) => {
          return new Date(current.uploadedAt) > new Date(latest.uploadedAt)
            ? current
            : latest;
        }, menuJson[0]);
        const response = await fetch(lastMenuInsert.url);
        const objMenuResponse = await response.json();
        const sortedDishes = [...objMenuResponse].sort(
          (a, b) => a.ward.id - b.ward.id
        );
        sortedDishes.map((dish) => {
          if (objToDB.hasOwnProperty(dish.id)) {
            if (objToDB[dish.id] > dish.stock) {
              dispatch(modifyConditionErrorDishStock(true));
              dispatch(addErrorList([...notRightQuantity, dish.id]));
              return { ...dish, stock: dish.stock };
            } else {
              const updatedStock = dish.stock - objToDB[dish.id];
              if (updatedStock < 0) {
                dispatch(modifyConditionErrorDishStock(true));
                dispatch(addErrorList([...notRightQuantity, dish.id]));
                return { ...dish, stock: dish.stock };
              } else {
                return { ...dish, stock: updatedStock };
              }
            }
          } else {
            return dish;
          }
        });
      } else {
        const errorMessage = await ListBlobMenu.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
    handleShowModalCart();
  };
};
