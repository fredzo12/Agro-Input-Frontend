import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Agent from "../../app/api";

export const registerAsync = createAsyncThunk(
    "/register",
    async(data, thunkApi)=> {
        try {
            const res= await Agent.Account.register(data);
            return res;
        } catch (error) {
            if(!error.response){
                throw error;
            }
            return thunkApi.rejectWithValue({error:error})
        }
    }
)

export const getOtpAsync = createAsyncThunk(
    "/otp-generation",
    async (data, thunkApi) => {
        try {
            const res = await Agent.Account.getToken(data);
            return res;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            const errorData = { message: error.message };
            return thunkApi.rejectWithValue({ error: errorData });
        }
    }
)


export const loginAsync = createAsyncThunk(
    "/login",
    async(data, thunkApi)=> {
        try {
            const res= await Agent.Account.login(data);
            return res;
        } catch (error) {
            if(!error.response){
                throw error;
            }
            return thunkApi.rejectWithValue({error:error})
        }
    }
)

const initialState = {
    user:null,
    loading:false,
    saving:false,
    isLoggedIn:false,
    users: [],
    errors:null,
}

const AccountSlice = createSlice({
    name:"account",
    initialState,
    reducers: {
        logout: (state)=> {
            state.user = null;
            state.isLoggedIn=false,
            sessionStorage.removeItem('token'),
            sessionStorage.removeItem('user')
        }
    },
    extraReducers: (builder)=>{
        // login 
        builder.addCase(loginAsync.fulfilled, (state, action)=> {
            state.saving = false;
            state.user = action.payload
            sessionStorage.setItem("user", JSON.stringify(state.user)) 
            sessionStorage.setItem("token", state.user.access_token) 
            state.isLoggedIn = true
        })

        // register
        // builder.addCase(registerAsync.fulfilled, (state,action)=> {
        //     state.saving = false
            
        // })



    }
})

export const {logout} = AccountSlice.actions; 
export default AccountSlice.reducer