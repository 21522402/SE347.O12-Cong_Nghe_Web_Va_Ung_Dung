import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState:{
        order:{
            isLoading: false,
            orders: [],
            error: false
        },
        address:{
            isLoading: false,
            addresses: [],
            error: false,
            isSuccess: false,
        },
        orderReview:{
            isLoading: false,
            orders: [],
            error: false
        },
    },
    reducers: {

        //order
        getAllOrderStart: (state) => {
            state.order.isLoading = true;
            state.order.error = false;
        },
        getAllOrderSuccess: (state, action) => {
            state.order.isLoading = false;
            state.order.orders = action.payload;
        },
        getAllOrderFailed: (state) => {
            state.order.isLoading = false;
            state.order.error = true;
        },

        //addresses

        resetSuccess: (state) => {
            state.address.isSuccess = false
        },
        getAllAddressStart: (state) => {
            state.address.isLoading = true;
            state.address.error = false;
        },
        getAllAddressSuccess: (state, action) => {
            state.address.isLoading = false;
            state.address.addresses = action.payload;
        },
        getAllAddressFailed: (state) => {
            state.address.isLoading = false;
            state.address.error = true;
        },

        createAddressStart: (state) => {
            state.address.isLoading = true;
            state.address.isSuccess = false;
            state.address.error = false;

        },
        createAddressSuccess: (state, action) => {
            state.address.isLoading = false;
            state.address.isSuccess = true;

        },
        createAddressFailed: (state) => {
            state.address.isLoading = false;
            state.address.error = true;
            state.address.isSuccess = false;
        },

        updateAddressStart: (state) => {
            state.address.isLoading = true;
            state.address.isSuccess = false;
            state.address.error = false;

        },
        updateAddressSuccess: (state, action) => {
            state.address.isLoading = false;
            state.address.isSuccess = true;
        },
        updateAddressFailed: (state) => {
            state.address.isLoading = false;
            state.address.error = true;
            state.address.isSuccess = false;
        },

        deleteAddressStart: (state) => {
            state.address.isLoading = true;
            state.address.isSuccess = false;
            state.address.error = false;

        },
        deleteAddressSuccess: (state, action) => {
            state.address.isLoading = false;
            state.address.isSuccess = true;
        },
        deleteAddressFailed: (state) => {
            state.address.isLoading = false;
            state.address.error = true;
            state.address.isSuccess = false;
        },

        //orderReview

        //order
        getAllOrderReviewStart: (state) => {
            state.orderReview.isLoading = true;
            state.orderReview.error = false;
        },
        getAllOrderReviewSuccess: (state, action) => {
            state.orderReview.isLoading = false;
            state.orderReview.orders = action.payload;
        },
        getAllOrderReviewFailed: (state) => {
            state.orderReview.isLoading = false;
            state.orderReview.error = true;
        },
    }
})

export const {
    getAllOrderStart,
    getAllOrderSuccess,
    getAllOrderFailed,
    getAllAddressStart,
    getAllAddressSuccess,    
    getAllAddressFailed,
    resetSuccess,
    createAddressStart,
    createAddressSuccess,
    createAddressFailed,
    updateAddressStart,
    updateAddressSuccess,
    updateAddressFailed,
    deleteAddressStart,
    deleteAddressSuccess,
    deleteAddressFailed,
    getAllOrderReviewStart,
    getAllOrderReviewSuccess,
    getAllOrderReviewFailed
} = userSlice.actions;

export default userSlice.reducer;