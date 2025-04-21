import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  totalPrice: 0,
  games: [],
  gamesBuy: [],
  currentGame: [],
};

export const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    addGames(state, action) {
      const findItem = state.games.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.games.push({
          ...action.payload,
        });
      }
    },
    addGamesBuy(state, action) {
      state.gamesBuy.push({
        ...action.payload,
      });
    },
    addCurrentGame(state, action) {
      state.currentGame = action.payload;
    },
  },
});

export const { addGames, addGamesBuy, addCurrentGame } = librarySlice.actions;

export default librarySlice.reducer;
