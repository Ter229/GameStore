import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "cart/fetchCartStatus",
  async (id) => {
    const { data } = await axios.get(
      "https://672a7424976a834dd02376e7.mockapi.io/game/" + id
    );
    return data;
  }
);

const initialState = {
  items: [],
  totalPrice: 0,
  games: [],
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const price = parseFloat(action.payload.price);
      const findItem = state.games.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.games.push({
          ...action.payload,
          quantity: 1,
          price,
        });

        state.totalPrice = state.games.reduce(
          (sum, game) => sum + game.price,
          0
        );
      }
    },
    removeItems(state, action) {
      state.games = state.games.filter((game) => game.id !== action.payload);
      state.totalPrice = state.games.reduce((sum, game) => sum + game.price, 0);
    },
    clearItems(state, action) {
      state.games = action.payload;
      state.totalPrice = 0;
    },
    countCart(state, action) {
      state.count = action.payload + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addItems, removeItems, countCart, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
