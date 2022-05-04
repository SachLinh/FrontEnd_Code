/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	listPromotion: [],
	detailPromotion: null,
};

export const getAllPromotion = createAsyncThunk(
	'/getAllPromotion',
	// Declare the type your function argument here:
	async () => {
		try {
			const res = await axios.get(`http://localhost:5000/promotions`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const getPromotion = createAsyncThunk(
	'/getPromotion',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.get(
				`http://localhost:5000/promotions/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const AllPromotionSlice = createSlice({
	name: 'Promotion',
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
				state.listPromotion = [];
			})
			.addCase(getPromotion.fulfilled, (state, action) => {
				state.detailPromotion = action.payload;
			})
			.addCase(getPromotion.rejected, (state, action) => {
				state.listPromotion = [];
			});
	},
});
export default AllPromotionSlice.reducer;
