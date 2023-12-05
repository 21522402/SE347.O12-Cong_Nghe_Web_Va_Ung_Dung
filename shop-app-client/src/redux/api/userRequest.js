import axios from "axios";
import { createAddressFailed, createAddressStart, createAddressSuccess, createCartItemFailed, createCartItemStart, createCartItemSuccess, createReviewFailed, createReviewStart, createReviewSuccess, deleteAddressFailed, deleteAddressStart, deleteAddressSuccess, getAllAddressFailed, getAllAddressStart, getAllAddressSuccess, getAllOrderFailed, getAllOrderReviewFailed, getAllOrderReviewStart, getAllOrderReviewSuccess, getAllOrderStart, getAllOrderSuccess, getAllVoucherFailed, getAllVoucherStart, getAllVoucherSuccess, getCartProductsFailed, getCartProductsStart, getCartProductsSuccess, getForUProductCartFailed, getForUProductCartStart, getForUProductCartSuccess, increaseCartItemFailed, increaseCartItemStart, increaseCartItemSuccess, resetSuccess, updateAddressFailed, updateAddressStart, updateAddressSuccess } from "../slices/userSlice";
import baseUrl from "~/utils/baseUrl";

//orders

export const getAllOrder = async (user, dispatch) => {
    dispatch(getAllOrderStart())
    try{
        const res = await axios.get(baseUrl + "/api/users/getAllOrders/"+ user._id, {
            headers: {token: "Bearer " + user.accessToken}
        })
        dispatch(getAllOrderSuccess(res.data))
    }   
    catch(err){
        dispatch(getAllOrderFailed())
    }
}

//addresses

export const getAllAddresses = async (user, dispatch) => {
    dispatch(resetSuccess())
    dispatch(getAllAddressStart())
    try{
        const res = await axios.get(baseUrl + "/api/users/addresses/"+ user._id, {
            headers: {token: "Bearer " + user.accessToken}
        })
       dispatch(getAllAddressSuccess(res.data.result))
    }   
    catch(err){
        dispatch(getAllAddressFailed())
    }
}

export const createAddresses = async (user, address, dispatch, callback) => {
    dispatch(resetSuccess())
    dispatch(createAddressStart())
    try{
        const res = await axios.put(baseUrl + "/api/users/addresses/addAddress/"+ user._id, address, {
            headers: {token: "Bearer " + user.accessToken}
        })
       dispatch(createAddressSuccess(res.data.result))
       callback(res)
    }   
    catch(err){
        dispatch(createAddressFailed())
    }
}


export const updateAddresses = async (user, address, dispatch, callback) => {
    dispatch(resetSuccess())
    dispatch(updateAddressStart())
    try{
        const res = await axios.put(baseUrl + "/api/users/addresses/updateAddress/"+ user._id + "/" + address._id, address, {
            headers: {token: "Bearer " + user.accessToken}
        })
       dispatch(updateAddressSuccess())
       callback(res)
    }   
    catch(err){
        dispatch(updateAddressFailed())
    }
}

export const deleteAddresses = async (user, address, dispatch, callback) => {
    dispatch(resetSuccess())
    dispatch(deleteAddressStart())
    try{
        const res = await axios.delete(baseUrl + "/api/users/addresses/deleteAddress/"+ user._id + "/" + address._id, {
            headers: {token: "Bearer " + user.accessToken}
        })
       dispatch(deleteAddressSuccess())
       callback(res)
    }   
    catch(err){
        dispatch(deleteAddressFailed())
    }
}


//ordersRevew

export const getAllOrderReview = async (user, dispatch) => {
    dispatch(getAllOrderReviewStart())
    try{
        const res = await axios.get(baseUrl + "/api/users/reviews/"+ user._id, {
            headers: {token: "Bearer " + user.accessToken}
        })
        dispatch(getAllOrderReviewSuccess(res.data.result))
    }   
    catch(err){
        dispatch(getAllOrderReviewFailed())
    }
}

export const createReview = async (user, orderItemId, data, dispatch, callback) => {
    dispatch(createReviewStart())
    try{
        console.log(data)
        const res = await axios.post(baseUrl + "/api/users/reviews/createReview/"+ user._id + "/" + orderItemId, data, {
            headers: {token: "Bearer " + user.accessToken},
        })
        dispatch(createReviewSuccess(res.data.result))
        callback(res)
    }   
    catch(err){
        dispatch(createReviewFailed())
    }
}

//cart

export const getForUProduct = async (dispatch) => {
    dispatch(getForUProductCartStart())
    try{
        const res = await axios.get(baseUrl + "/api/users/cart/getForUProduct")
        dispatch(getForUProductCartSuccess(res.data))
    }   
    catch(err){
        dispatch(getForUProductCartFailed())
    }
}

export const getAllVoucher = async (dispatch) => {
    dispatch(getAllVoucherStart())
    try{
        const res = await axios.get(baseUrl + "/api/vouchers/")
        dispatch(getAllVoucherSuccess(res.data.result))
    }   
    catch(err){
        dispatch(getAllVoucherFailed())
    }
}

export const increaseQuantityCartItem = async (user, cartItemId, dispatch) => {
    dispatch(increaseCartItemStart())
    try{
        const res = await axios.put(baseUrl + "/api/users/cart/increateCartItem/" + user._id + "/" + cartItemId, cartItemId)
        console.log(res)
        dispatch(increaseCartItemSuccess(res))
    }   
    catch(err){
        dispatch(increaseCartItemFailed())
    }
}

export const createCartItem = async (user, cart, dispatch) => {
    dispatch(createCartItemStart())
    try{
        await axios.post(baseUrl + "/api/users/cart/createCartItem/" + user._id, cart)
        dispatch(createCartItemSuccess())
    }   
    catch(err){
        dispatch(createCartItemFailed())
    }
}

export const getCartProducts = async (user, dispatch) => {
    dispatch(getCartProductsStart())
    try{
        const res = await axios.get(baseUrl + "/api/users/cart/" + user._id)
        dispatch(getCartProductsSuccess(res?.data?.result))
    }   
    catch(err){
        dispatch(getCartProductsFailed())
    }
}


