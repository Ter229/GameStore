import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  nick: "9",
  saveNick: "9",
  name: "9",
  description: "Информация отсутствует.",
  avatar: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addNick(state, action) {
      state.nick = action.payload;
    },
    saveNick(state, action) {
      state.saveNick = action.payload;
    },
    addName(state, action) {
      state.name = action.payload;
    },
    addDescription(state, action) {
      state.description = action.payload;
    },
    addImg(state, action) {
      state.avatar = action.payload;
    },
  },
});

export const { addNick, saveNick, addName, addDescription, addImg } =
  profileSlice.actions;

export default profileSlice.reducer;
