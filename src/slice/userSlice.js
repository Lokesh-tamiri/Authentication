import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/fbconfig";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      console.log(payload);

      state.user = payload;
      db.collection("users").doc(payload.payload.user.uid);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
