import axios from "axios";
import { createAddressFailed, createAddressStart, createAddressSuccess, deleteAddressFailed, deleteAddressStart, deleteAddressSuccess, getAllAddressFailed, getAllAddressStart, getAllAddressSuccess, getAllOrderFailed, getAllOrderReviewFailed, getAllOrderReviewStart, getAllOrderReviewSuccess, getAllOrderStart, getAllOrderSuccess, resetSuccess, updateAddressFailed, updateAddressStart, updateAddressSuccess } from "../slices/userSlice";
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

