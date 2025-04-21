import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import libraryReducer from "./slices/librarySlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    library: libraryReducer,
    profile: profileReducer,
  },
});
