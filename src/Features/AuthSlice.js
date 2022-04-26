import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const init = {
    user : localStorage.getItem('user'),
    loading:false
}

export const registerUser = createAsyncThunk('user/register', async (payload) =>{
    try {
        const res = await axios.post("http://192.168.108.107:5000/users/signup", payload.formData)
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

    }
  });
  export const {logout} = authslice.actions;
  export default authslice.reducer;
  
