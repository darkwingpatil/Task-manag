import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import{logout} from "../../redux/login/action"
export const Logout = () => {
    const state=useSelector((state)=>state.login)
    console.log(state,"inlogout page")
    const dispatch=useDispatch()
    if(state.login)
  return (
    <div>
        <h1>logiout</h1>
        <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
  return(
      <div></div>
  )
}
