/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const init = {
	user: localStorage.getItem('user'),
	admin: localStorage.getItem('admin'),
	loading: false,
	listUser: [],
	detailUser: null,
};

export const getAllUser = createAsyncThunk('user/getAllUser', async () => {
	try {
		const res = await axios.get('http://localhost:5000/users');
		return res.data;
	} catch (error) {
		console.log(error);
	}
});
export const getUser = createAsyncThunk('getUser', async (payload) => {
	try {
		const res = await axios.get(`http://localhost:5000/users/${payload}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
});
export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/users/${payload.init.id}`,
				payload.data,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const forgetPassword = createAsyncThunk(
	'user/forgetPassword',
	async (payload) => {
		try {
			const res = await axios.put(
				`http://localhost:5000/users/${payload.init.id}/ForgetPassword`
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const registerUser = createAsyncThunk(
	'user/register',
	async (payload) => {
		try {
			const res = await axios.post(
				'http://localhost:5000/users/signup',
				payload,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const deleteUser = createAsyncThunk(
	'user/deleteUser',
	async (payload) => {
		try {
			const res = await axios.delete(
				`http://localhost:5000/users/${payload}`,
			);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const loginUser = createAsyncThunk('auth/login', async (payload) => {
	try {
		const res = await axios.post(
			'http://localhost:5000/users/signin',
			payload,
		);
		localStorage.setItem('user', JSON.stringify(res.data));
		return res.data;
	} catch (error) {
		console.log(error);
	}
});
export const loginAdmin = createAsyncThunk(
	'authAdmin/login',
	async (payload) => {
		try {
			const res = await axios.post(
				'http://localhost:5000/users/signin',
				payload,
			);
			localStorage.setItem('admin', JSON.stringify(res.data));
			return res.data;
		} catch (error) {
			console.log(error);
		}
	},
);
export const authslice = createSlice({
	name: 'Auth',
	initialState: init,
	reducers: {
		logout: (state) => {
			localStorage.removeItem('user');
			return { ...state, loading: false, user: null };
		},
		logoutAdmin: (state) => {
			localStorage.removeItem('admin');
			return { ...state, loading: false, admin: null };
		},
	},
	extraReducers: (builder) => {
		builder
			// get All User
			.addCase(getAllUser.pending, (state, action) => {
				state.listUser = [];
			})
			.addCase(getAllUser.fulfilled, (state, action) => {
				state.listUser = action.payload;
			})
			.addCase(getAllUser.rejected, (state, action) => {
				state.listUser = [];
			})
			// get User
			.addCase(getUser.pending, (state, action) => {
				state.detailUser = null;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.detailUser = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.detailUser = null;
			})
			// register
			.addCase(registerUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.loading = false;
			})
			// login user
			.addCase(loginUser.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
			})
			// login admin
			.addCase(loginAdmin.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(loginAdmin.fulfilled, (state, action) => {
				state.loading = false;
				state.admin = action.payload;
			})
			.addCase(loginAdmin.rejected, (state, action) => {
				state.loading = false;
			})
			// Update User
			.addCase(updateUser.pending, (state, action) => {
				state.listUser = [];
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				for (let i = 0; i < state.listUser.length; i++) {
					if (state.listUser[i]._id === action.payload.id) {
						state.listUser.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.listUser = [];
			})
			// forget password
			.addCase(forgetPassword.pending, (state, action) => {
				state.listUser = [];
			})
			.addCase(forgetPassword.fulfilled, (state, action) => {
				for (let i = 0; i < state.listUser.length; i++) {
					if (state.listUser[i]._id === action.payload.id) {
						state.listUser.splice(i, 1, action.payload);
					}
				}
			})
			.addCase(forgetPassword.rejected, (state, action) => {
				state.listUser = [];
			})
			// delete danh muc
			.addCase(deleteUser.pending, (state, action) => {})
			.addCase(deleteUser.fulfilled, (state, action) => {
				for (let i = 0; i < state.listUser.length; i++) {
					if (state.listUser[i]._id === action.payload) {
						state.listUser.splice(action.payload, 1);
					}
				}
			})
			.addCase(deleteUser.rejected, (state, action) => {});
	},
});
export const { logout, logoutAdmin } = authslice.actions;
export default authslice.reducer;
