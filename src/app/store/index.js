import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "../../feature/account/AccountSlice";
import FarmerRequestSlice from "../../feature/request/FarmerRequestSlice";

export const store = configureStore({
    reducer: {
        account: AccountSlice,
        farmerRequest:FarmerRequestSlice
    }
})