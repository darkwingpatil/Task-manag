import React from 'react'
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {loginSuccess,loginError,logout, getdata} from "../../redux/login/action"
import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Input=styled.div`
input{
display:flex;
flex-direction:column;
margin:auto;
margin-top:20px;
}`


const Login = () => {
    const[myval,getval]=React.useState({})
    const state=useSelector((state)=>state.login)
    const dispatch=useDispatch()
    console.log(state,"in login page")

    const location =useLocation()
    // console.log(location,"in login page")

    const from=location.state||"/"
    console.log(from,"in login page")


    const myfun=(e)=>{
        let name=e.target.name;
        getval({...myval,[name]:e.target.value})
    }
    function myobj(e){
        e.preventDefault()
        // axios.post("https://reqres.in/api/login",myval)
        // .then((data)=>dispatch(loginSuccess(data.data)))
        // .catch((err)=>dispatch(loginError()))
        dispatch(getdata(myval))
    }
    if(state.loading==true)
    {
        return (
            <div>...Loading</div>
        )
    }
    if(state.error==true)
    return(
        <div>Something went wrong try again later</div>
    )
    if(state.login=="" && state.error==false)
  return (
    <Input>
        <h1>Hey user Login here</h1>
        <form onSubmit={myobj}>
        <input placeholder='Enter your username' onChange={(e)=>myfun(e)} name="email" />
        <input placeholder='Enter your username' onChange={(e)=>myfun(e)} name="password" />
        <input type="submit"/>
        </form>   
    </Input>
  )
  return(
      <Navigate to={from} replace={true}/>
  )

}
export {Login}