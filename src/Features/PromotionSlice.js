/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  listPromotion: [],
  detailPromotion: null,
};

export const getAllPromotion = createAsyncThunk(
  "/getAllPromotion",
  // Declare the type your function argument here:
  async () => {
    try {
      const res = await axios.get(`http://localhost:5000/promotions`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getPromotion = createAsyncThunk(
  "/getPromotion",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/promotions/${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const AddNewPromotion = createAsyncThunk(
  "/AddNewPromotion",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.post(`http://localhost:5000/promotions`, payload);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updatePromotion = createAsyncThunk(
  "/updatePromotion",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/promotions/${payload.init.id}`,
        payload.data
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deletePromotion = createAsyncThunk(
  "/deleteDanhMucByID",
  // Declare the type your function argument here:
  async (payload) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/promotions/${payload}`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const AllPromotionSlice = createSlice({
  name: "Promotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get All promotion
      .addCase(getAllPromotion.pending, (state, action) => {
        state.listPromotion = [];
      })
      .addCase(getAllPromotion.fulfilled, (state, action) => {
        state.listPromotion = action.payload;
      })
      .addCase(getAllPromotion.rejected, (state, action) => {
        state.listPromotion = [];
      })
      // get promotion
      .addCase(getPromotion.pending, (state, action) => {
        state.detailPromotion = [];
      })
      .addCase(getPromotion.fulfilled, (state, action) => {
        state.detailPromotion = action.payload;
      })
      .addCase(getPromotion.rejected, (state, action) => {
        state.detailPromotion = [];
      })
      // create new khuyen mai
      .addCase(AddNewPromotion.pending, (state, action) => {
        state.listPromotion = [];
      })
      .addCase(AddNewPromotion.fulfilled, (state, action) => {
        state.listPromotion.pros.push(action.payload);
      })
      .addCase(AddNewPromotion.rejected, (state, action) => {
        state.listPromotion = [];
      })
      // update khuyen mai
      .addCase(updatePromotion.pending, (state, action) => {
        state.detailPromotion = null;
      })
      .addCase(updatePromotion.fulfilled, (state, action) => {
        for (let i = 0; i < state.listPromotion.length; i++) {
          if (state.listPromotion.pros[i]._id === action.payload.id) {
            state.listPromotion.pros.splice(i, 1, action.payload);
          }
        }
      })
      .addCase(updatePromotion.rejected, (state, action) => {
        state.detailPromotion = null;
      })
      // delete khuyen mai
      .addCase(deletePromotion.pending, (state, action) => {
        state.detailPromotion = null;
      })
      .addCase(deletePromotion.fulfilled, (state, action) => {
        for (let i = 0; i < state.listPromotion.length; i++) {
          if (state.listPromotion[i]._id === action.payload) {
            state.listPromotion.splice(action.payload, 1);
          }
        }
      })
      .addCase(deletePromotion.rejected, (state, action) => {
        state.detailPromotion = null;
      });
  },
});
export default AllPromotionSlice.reducer;
