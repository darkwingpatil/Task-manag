import { LoginLoad,LoginSuccess,LoginError,Logout } from "./actiotypes";
import axios from "axios"
export const loginLoad=()=>{
    return{
        type:LoginLoad,
    }
}
export const loginError=()=>{
    return{
        type:LoginError,
    }
}
export const loginSuccess =(payload)=>{
    return{
        type:LoginSuccess,
        payload
    }
}

export const logout=()=>{
    return{
        type:Logout,
    }
}


export const getdata=(myval)=>(dispatch)=>{
    dispatch(loginLoad())
    axios.post("https://reqres.in/api/login",myval)
    .then((data)=>dispatch(loginSuccess(data.data)))
    .catch((err)=>dispatch(loginError()))
}