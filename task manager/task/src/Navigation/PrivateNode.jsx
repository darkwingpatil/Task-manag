import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const PrivateNode = ({children}) => {

    const state=useSelector((state)=>state.login)
    const location=useLocation()
    console.log(state,"in private node")
    if(state.login)
  return (
    children
  )
  return(
      <Navigate to="/login" state={location.pathname} replace={true}/>
  )
}
