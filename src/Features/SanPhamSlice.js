/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	listSanPham: [],
	detailSP: null,
};
export const getAllSanPham = createAsyncThunk(
	'/AllSanPham',
	// Declare the type your function argument here:
	async () => {
		try {
			const res = await axios.get('http://localhost:5000/products');
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const detailSP = createAsyncThunk(
	'/DetailSP',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.get(
				`http://localhost:5000/products/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const AddNewSP = createAsyncThunk(
	'/AddNewSP',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.post(
				`http://localhost:5000/products/`,
				payload.data,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const UpdateSP = createAsyncThunk(
	'/UpdateSP',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/products/${payload.init.id}`,
				payload.dataUpdate,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const deleteSanPham = createAsyncThunk(
	'/deleteSanPham',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/products/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const AllSanPhamSlice = createSlice({
	name: 'SanPham',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// get all danh muc
			.addCase(getAllSanPham.pending, (state, action) => {
				state.listSanPham = [];
			})
			.addCase(getAllSanPham.fulfilled, (state, action) => {
				state.listSanPham = action.payload;
			})
			.addCase(getAllSanPham.rejected, (state, action) => {
				state.listSanPham = [];
			})
			// get detail sp
			.addCase(detailSP.pending, (state, action) => {
				state.listSanPham = [];
			})
			.addCase(detailSP.fulfilled, (state, action) => {
				state.detailSP = action.payload;
			})
			.addCase(detailSP.rejected, (state, action) => {
				state.listSanPham = [];
			})
			// delete san pham
			.addCase(deleteSanPham.pending, (state, action) => {
				state.detailSP = null;
			})
			.addCase(deleteSanPham.fulfilled, (state, action) => {
				for (let i = 0; i < state.listSanPham.length; i++) {
					if (state.listSanPham[i]._id === action.payload) {
						state.listSanPham.splice(action.payload, 1);
					}
				}
			})
			.addCase(deleteSanPham.rejected, (state, action) => {
				state.detailSP = null;
			})
			// create new  sp
			.addCase(AddNewSP.pending, (state, action) => {
				state.listSanPham = [];
			})
			.addCase(AddNewSP.fulfilled, (state, action) => {
				state.listSanPham.push(action.payload);
			})
			.addCase(AddNewSP.rejected, (state, action) => {
				state.listSanPham = [];
			})
			// update sp
			.addCase(UpdateSP.pending, (state, action) => {
				state.listSanPham = [];
			})
			.addCase(UpdateSP.fulfilled, (state, action) => {
				for (let i = 0; i < state.listSanPham.length; i++) {
					if (state.listSanPham[i]._id === action.payload.id) {
						state.listSanPham.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(UpdateSP.rejected, (state, action) => {
				state.listSanPham = [];
			});
	},
});
export default AllSanPhamSlice.reducer;
