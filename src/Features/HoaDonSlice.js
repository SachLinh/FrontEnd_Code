/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
	listHoaDon: [],
	hoaDonDetail: null,
};
export const getAllHoaDon = createAsyncThunk(
	'/AllHoaDon',
	// Declare the type your function argument here:
	async () => {
		try {
			const res = await axios.get('http://localhost:5000/invoice');
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const getChiTietHoaDon = createAsyncThunk(
	'/AllChiTietHD',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.get(
				`http://localhost:5000/invoice/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const AddNewHoaDon = createAsyncThunk(
	'/AddNewHoaDon',
	// Declare the type your function argument here:
	async (payload) => {
		console.log('payload', payload);
		try {
			const res = await axios.post(`http://localhost:5000/invoice`, payload);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const updateHoaDon = createAsyncThunk(
	'/updateHoaDon',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/invoice/${payload.init.id}`,
				payload.formData,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const updateHoaDon2 = createAsyncThunk(
	'/updateHoaDon2',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/invoice/${payload.init.id}`,
				payload.formData2,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const deleteInvoice = createAsyncThunk(
	'/deleteInvoice',
	// Declare the type your function argument here:
	async (payload) => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/invoice/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const AllHoaDon = createSlice({
	name: 'Hoadon',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			// get all hoa don
			.addCase(getAllHoaDon.pending, (state, action) => {
				state.listHoaDon = [];
			})
			.addCase(getAllHoaDon.fulfilled, (state, action) => {
				state.listHoaDon = action.payload;
			})
			.addCase(getAllHoaDon.rejected, (state, action) => {
				state.listHoaDon = [];
			})
			// // get chi tiet hoa don
			.addCase(getChiTietHoaDon.pending, (state, action) => {
				state.listHoaDon = [];
			})
			.addCase(getChiTietHoaDon.fulfilled, (state, action) => {
				state.hoaDonDetail = action.payload;
			})
			.addCase(getChiTietHoaDon.rejected, (state, action) => {
				state.listHoaDon = [];
			})
			// //Add hoa don
			.addCase(AddNewHoaDon.pending, (state, action) => {
				state.listHoaDon = [];
			})
			.addCase(AddNewHoaDon.fulfilled, (state, action) => {
				state.listHoaDon = action.payload;
			})
			.addCase(AddNewHoaDon.rejected, (state, action) => {
				state.listHoaDon = [];
			})
			// update hoa don
			.addCase(updateHoaDon.pending, (state, action) => {
				state.hoaDonDetail = null;
			})
			.addCase(updateHoaDon.fulfilled, (state, action) => {
				for (let i = 0; i < state.listHoaDon.length; i++) {
					if (state.listHoaDon.catas[i]._id === action.payload.id) {
						state.listHoaDon.catas.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(updateHoaDon.rejected, (state, action) => {
				state.hoaDonDetail = null;
			})
			// update address
			.addCase(updateHoaDon2.pending, (state, action) => {
				state.hoaDonDetail = null;
			})
			.addCase(updateHoaDon2.fulfilled, (state, action) => {
				for (let i = 0; i < state.listHoaDon.length; i++) {
					if (state.listHoaDon.catas[i]._id === action.payload.id) {
						state.listHoaDon.catas.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(updateHoaDon2.rejected, (state, action) => {
				state.hoaDonDetail = null;
			})
			// delete hoa don
			.addCase(deleteInvoice.pending, (state, action) => {})
			.addCase(deleteInvoice.fulfilled, (state, action) => {
				for (let i = 0; i < state.listHoaDon.length; i++) {
					if (state.listHoaDon[i]._id === action.payload) {
						state.listHoaDon.splice(action.payload, 1);
					}
				}
			})
			.addCase(deleteInvoice.rejected, (state, action) => {});
	},
});
export default AllHoaDon.reducer;
