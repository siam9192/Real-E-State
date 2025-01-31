import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {}

const initialState: IInitialState = {};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {},
});

export default toggleSlice;
