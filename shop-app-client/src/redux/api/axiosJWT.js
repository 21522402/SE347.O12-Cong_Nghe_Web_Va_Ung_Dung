// import axios from "axios"
// import jwt_decode from "jwt_decode"
// import { loginSuccess } from "~/redux/slices/authSlice"

// const refreshToken = async () => {
//     try{
//         const res = await axios.post("/api/auth/refresh", {
//             withCredentials: true,
//         })
//         return res.data
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// export default function axiosJWT(user, dispatch){
//     const axiosJWT = axios.create({})

//     axiosJWT.interceptors.request.use(
//         async(config) => {
//             let date = new Date()
//             const decodedToken = jwt_decode(user?.accesstoken)
//             if(decodedToken.exp < date.getTime() / 1000){
//                 const data = await refreshToken()
//                 const refreshUser = {
//                     ...user,
//                     accessToken: data.accessToken 
//                 }
//                 dispatch(loginSuccess(refreshUser))
//                 config.headers["token"] = "Bearer " + data.accessToken;
//             }
//             return config;
//         },
//         (err) => {
//             return Promise.reject(err);
//         }
//     )
// }