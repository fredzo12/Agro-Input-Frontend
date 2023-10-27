import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import Agent from "../../app/api";


export const farmerRequestAsync = createAsyncThunk(
    "/create-request",
    async(data, thunkApi)=> {
        try {
            const res= await Agent.farmerRequest.makeRequest(data);
            return res;
        } catch (error) {
            if(!error.response){
                throw error;
            }
            return thunkApi.rejectWithValue({error:error})
        }
    }
)

export const farmerRequestListAsync = createAsyncThunk(
    "/get-farmer-list",
    async(_, thunkApi)=> {
        try {
            const res = Agent.farmerRequest.requestsList();
            return res;
        } catch (error) {
            thunkApi.rejectWithValue({error:error.response.data})
        }
    }
);

export const farmerRequestDeclineAsync = createAsyncThunk(
    "/single-request/decline",
    async(id, thunkApi) => {
        try {
            const res = Agent.farmerRequest.requestDecline(id)
            return res
        } catch (error) {
            thunkApi.rejectWithValue({error:error.response.data})
        }
    }
)

export const farmerRequestApproveAsync = createAsyncThunk(
    "/single-request/approve",
    async(id, thunkApi) => {
        try {
            const res = Agent.farmerRequest.requestApprove(id)
            return res
        } catch (error) {
            thunkApi.rejectWithValue({error:error.response.data})
        }
    }
)

const initialState = {
    loading:false,
    saving:false,
    requestsList: [],
    errors:null,
    request:null
}

const requestSlice =createSlice({
    name:"request",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(farmerRequestAsync.fulfilled, (state, action)=>{
            state.saving = false
            state.request = action.payload
            state.loading= false
        })

        builder.addCase(farmerRequestListAsync.fulfilled,(state, action)=> {
            state.requestsList = action.payload 
        } )
    }

})

export default requestSlice.reducer