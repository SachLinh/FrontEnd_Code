/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	listThongSo: [],
	detailThongSo: null,
};
export const createSpecByIDProduct = createAsyncThunk(
	'/createSpecByIDProduct',
	// Declare the type your function argument here:
	async (payload) => {
		console.log(payload);
		try {
			const res = await axios.post(
				`http://localhost:5000/products/${payload.init.id}/Specifications`,
				payload.data,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const getAllThongSo = createAsyncThunk(
	'/getAllThongSo',
	// Declare the type your function argument here:
	async () => {
		try {
			const res = await axios.get(`http://localhost:5000/specifications/`);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const getThongSo = createAsyncThunk(
	'/getThongSo',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.get(
				`http://localhost:5000/specifications/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const updateThongSo = createAsyncThunk(
	'/updateThongSo',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/specifications/${payload.init.id}`,
				payload.dataUpdate,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const AllThongSoSlice = createSlice({
	name: 'ThongSo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// get all thoong so
			.addCase(getAllThongSo.pending, (state, action) => {
				state.listThongSo = [];
			})
			.addCase(getAllThongSo.fulfilled, (state, action) => {
				state.listThongSo = action.payload;
			})
			.addCase(getAllThongSo.rejected, (state, action) => {
				state.listThongSo = [];
			})
			// get thong so
			.addCase(getThongSo.pending, (state, action) => {
				state.listThongSo = [];
			})
			.addCase(getThongSo.fulfilled, (state, action) => {
				state.detailThongSo = action.payload;
			})
			.addCase(getThongSo.rejected, (state, action) => {
				state.listThongSo = [];
			})
			// create new  thong so
			.addCase(createSpecByIDProduct.pending, (state, action) => {
				state.listThongSo = [];
			})
			.addCase(createSpecByIDProduct.fulfilled, (state, action) => {
				state.listThongSo.push(action.payload);
			})
			.addCase(createSpecByIDProduct.rejected, (state, action) => {
				state.listThongSo = [];
			})
			// update
			.addCase(updateThongSo.pending, (state, action) => {
				state.detailThongSo = null;
			})
			.addCase(updateThongSo.fulfilled, (state, action) => {
				for (let i = 0; i < state.listThongSo.length; i++) {
					if (state.listThongSo[i]._id === action.payload.id) {
						state.listThongSo.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(updateThongSo.rejected, (state, action) => {
				state.detailThongSo = null;
			});
	},
});
export default AllThongSoSlice.reducer;
