export const ADD_MENU = "ADD_MENU";
export const ADD_WARD = "ADD_WARD";
export const NOT_FOUND = "NOT_FOUND";
export const UPDATE_MENU = "UPDATE_MENU";
export const addMenuOnStore = (menuArray) => ({
  type: ADD_MENU,
  payload: menuArray,
});
export const addWardOnStore = (wardArray) => ({
  type: ADD_WARD,
  payload: wardArray,
});
export const notFound = (condition) => ({
  type: NOT_FOUND,
  payload: condition,
});

export const updateMenu = (menuData) => ({
  type: UPDATE_MENU,
  payload: menuData,
});

// export const fetchMenuAction = () => {
//   return async (dispatch) => {
//     try {
//       const menuFetchRequest = await fetch(`menus/menu.json`, {
//         method: "GET",
//       });
//       if (menuFetchRequest.ok) {
//         dispatch(notFound(false));
//         const objMenuResponse = await menuFetchRequest.json();
//         const sortedDishes = [...objMenuResponse].sort(
//           (a, b) => a.ward.id - b.ward.id
//         );
//         dispatch(addMenuOnStore(sortedDishes));
//         const newUniqueElements = {};
//         for (const item of objMenuResponse) {
//           if (!newUniqueElements[item.ward.id]) {
//             newUniqueElements[item.ward.id] = item;
//           }
//         }
//         dispatch(addWardOnStore([Object.values(newUniqueElements)]));
//       } else {
//         const errorMessage = await menuFetchRequest.text();
//         dispatch(notFound(true));
//         console.log(errorMessage);
//       }
//       return true;
//     } catch (error) {
//       console.log(error);
//       dispatch(notFound(true));
//       return false;
//     }
//   };
// };

export const fetchMenuActionBlob = () => {
  return async (dispatch) => {
    try {
      const ListBlobMenu = await fetch(
        `https://festival-menu.vercel.app/api/get`,
        {
          method: "GET",
        }
      );

      if (ListBlobMenu.ok) {
        dispatch(notFound(false));
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
        dispatch(addMenuOnStore(sortedDishes));
        const newUniqueElements = {};
        for (const item of objMenuResponse) {
          if (!newUniqueElements[item.ward.id]) {
            newUniqueElements[item.ward.id] = item;
          }
        }
        const rep = Object.values(newUniqueElements);
        dispatch(addWardOnStore(rep));
      } else {
        const errorMessage = await ListBlobMenu.text();
        dispatch(notFound(true));
        throw new Error(errorMessage);
      }
      return true;
    } catch (error) {
      dispatch(notFound(true));
      return false;
    }
  };
};

// export const checkMenu = () => {
//   return async (dispatch) => {
//     try {
//       const menuFetchRequest = await fetch(`menus/menu.json`, {
//         method: "GET",
//       });

//       if (menuFetchRequest.ok) {
//         const objMenuResponse = await menuFetchRequest.json();
//         const sortedDishes = [...objMenuResponse].sort(
//           (a, b) => a.ward.id - b.ward.id
//         );
//         dispatch(addMenuOnStore(sortedDishes));
//       } else {
//         const errorMessage = await menuFetchRequest.text();
//         console.log(errorMessage);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const checkMenuBlob = () => {
  return async (dispatch) => {
    try {
      const ListBlobMenu = await fetch(
        `https://festival-menu.vercel.app/api/get`,
        {
          method: "GET",
        }
      );
      if (ListBlobMenu.ok) {
        dispatch(notFound(false));
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
        dispatch(addMenuOnStore(sortedDishes));
      } else {
        const errorMessage = await ListBlobMenu.text();
        console.log(errorMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
