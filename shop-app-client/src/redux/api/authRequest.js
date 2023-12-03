import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "../slices/authSlice";
import baseUrl from "~/utils/baseUrl";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try{
        const res = await axios.post(baseUrl + "/api/auth/login", user)

        console.log(res)
        dispatch(loginSuccess(res.data))
        navigate("/user-profile/info")
    }   
    catch(err){
        dispatch(loginFailed())
    }
}

export const registerUser = async (user, dispatch, navigate, callback) => {
    dispatch(registerStart())
    try{
        await axios.post(baseUrl + '/api/auth/register', user)
        dispatch(registerSuccess())
        callback()
    }   
    catch(err){
        dispatch(registerFailed())
    }
}

export const logoutUser = async (id, dispatch, accessToken, navigate) => {
    dispatch(logoutStart())
    try{
        await axios.post(baseUrl + '/api/auth/logout',id , {
            headers: {token: "Bearer " + accessToken}
        })
        dispatch(logoutSuccess())
        navigate("/user")
    }   
    catch(err){
        console.log(err)
        dispatch(logoutFailed())
    }
}
