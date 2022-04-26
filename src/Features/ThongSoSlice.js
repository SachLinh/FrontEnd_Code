import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  listThongSo: [],
  detailThongSo:null
};
export const createSpecByIDProduct = createAsyncThunk(
  "/createSpecByIDProduct",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.post(
        `http://192.168.108.107:5000/products/${payload.init.id}/Specifications`, payload.data
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getThongSo = createAsyncThunk(
  "/getThongSo",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.get(
        `http://192.168.108.107:5000/specifications/${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const AllThongSoSlice = createSlice({
  name: "ThongSo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get promotion
      .addCase(getThongSo.pending, (state, action) => {
        state.listThongSo = [];
      })
      .addCase(getThongSo.fulfilled, (state, action) => {
        state.detailThongSo = action.payload;
      })
      .addCase(getThongSo.rejected, (state, action) => {
        state.listThongSo = [];
      })
       // create new  sp
       .addCase(createSpecByIDProduct.pending, (state, action) => {
        state.listThongSo = [];
      })
      .addCase(createSpecByIDProduct.fulfilled, (state, action) => {
        state.listThongSo.push(action.payload);
      })
      .addCase(createSpecByIDProduct.rejected, (state, action) => {
        state.listThongSo = [];
      })
  },
});
export default AllThongSoSlice.reducer;
