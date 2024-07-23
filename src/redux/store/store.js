import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import menuReducer from "../reducer/menuReducer";
import cartReducer from "../reducer/cartReducer";
import errorCartReducer from "../reducer/errorCartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["menu,cart,errorCart"],
  transforms: [
    encryptTransform({
      secretKey: "mia-chiave34.23-0421234",
    }),
  ],
};
const mainReducers = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  errorCart: errorCartReducer,
});
const persistedReducer = persistReducer(persistConfig, mainReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
