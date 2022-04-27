import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const init = {
    user : localStorage.getItem('user'),
    loading:false,
    listUser:[]
}


export const getAllUser = createAsyncThunk('user/getAllUser', async () =>{
    try {
        const res = await axios.get("http://192.168.108.107:5000/users")
        return res.data
    } catch (error) {
        console.log(error);
    }
})
export const updateUser = createAsyncThunk('user/updateUser', async (payload) =>{
    console.log('payload', payload);
    try {
        const res = await axios.put(`http://192.168.108.107:5000/users/${payload.init.id}`, payload.formData)
        return res.data
    } catch (error) {
        console.log(error);
    }
})
export const registerUser = createAsyncThunk('user/register', async (payload) =>{
    try {
        const res = await axios.post("http://192.168.108.107:5000/users/signup", payload)
        return res.data
    } catch (error) {
        console.log(error);
    }
})
export const loginUser = createAsyncThunk("auth/login", async (payload)=>{
    try {
        const res = await axios.post("http://192.168.108.107:5000/users/signin", payload);
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
    } catch (error) {
        console.log(error);
    }
})
export const authslice = createSlice({
    name: "Auth",
    initialState:init,
    reducers: {
        logout:(state)=>{
            localStorage.removeItem("user");
            return {...state,loading:false, user:null}
        }
    },
    extraReducers: (builder) => {
      builder
        // get All User
        .addCase(getAllUser.pending,(state,action)=>{
            state.listUser = [];
        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            state.listUser = action.payload;
        })
        .addCase(getAllUser.rejected,(state,action)=>{
            state.listUser = [];
        })
        // register
        .addCase(registerUser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(registerUser.fulfilled,(state,action)=>{
            state.loading = false;
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.loading = false;
        })
        // login
        .addCase(loginUser.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(loginUser.rejected,(state,action)=>{
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
          });

    }
  });
  export const {logout} = authslice.actions;
  export default authslice.reducer;
  
