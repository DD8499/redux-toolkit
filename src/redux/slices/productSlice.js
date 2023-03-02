import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: []
}
export const fetchProduct = createAsyncThunk(
    'product/allProduct',
    async () => {
        const response = await axios.get("https://dummyjson.com/products")
        return response?.data
    }
)


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        testFunc: (state) => {
            state['testData'] = ['done']
        }
    },
    extraReducers: {
        [fetchProduct.fulfilled]: (state, action) => {
            state.data = action?.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(fetchProduct.fulfilled, (state, action) => {
    //         state.data = action?.payload
    //     })
    // }
})

export default productSlice;
export const productAction = productSlice.actions