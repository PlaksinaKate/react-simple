import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const useSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
})