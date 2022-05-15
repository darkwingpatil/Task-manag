import React from 'react'
import { Todouser,Userdiv,Stylebutton } from '../styled'
import { useDispatch,useSelector } from 'react-redux'
import{getting} from "../../redux/todo/action"
import { useNavigate } from 'react-router-dom'

import{logout} from "../../redux/login/action"



export const Todouser1 = () => {
const state=useSelector((state)=>state.todo)
const[num1,setnum1]=React.useState(0)
console.log(state,"todouser pagelalal")
const dispatch=useDispatch()
const navigate=useNavigate()

React.useEffect(()=>{
    dispatch(getting())
},[])


  return (
    <Todouser>
        <div style={{border:"4px solid black"}}>
            <h3>User details fetch from Api Mocker</h3>
        </div>
        <div style={{border:"4px solid black"}}>
            <Userdiv val="blue">
                <h4 style={{marginTop:"2%"}}>All</h4>
                <h4 style={{marginTop:"2%"}}>{state.todo.length}</h4>
            </Userdiv>
            <Userdiv val="green">
                <h4 style={{marginTop:"2%"}}>Personal</h4>
                <h4 style={{marginTop:"2%"}}>{state.personal}</h4>
            </Userdiv>
            <Userdiv val="purple">
                <h4 style={{marginTop:"2%"}}>Offical</h4>
                <h4 style={{marginTop:"2%"}}>{state.official}</h4>
            </Userdiv>
            <Userdiv val="orange">
                <h4 style={{marginTop:"2%"}}>Others</h4>
                <h4 style={{marginTop:"2%"}}>{state.others}</h4>
            </Userdiv>
        </div>

        <div style={{width:"100%",height:"400px",border:"4px solid black"}}>
            <h1 style={{cursor:"pointer"}} onClick={()=>{
                navigate("/todo/")
            }}>Click to Add tasks</h1>
            <h1 style={{cursor:"pointer"}} onClick={()=>{
                navigate("/todo/summary")
            }}>Go to Summary</h1>
            <h1 style={{cursor:"pointer"}} onClick={()=>{
                navigate("/")
            }}>Go to Main</h1>
        </div>
        <div>
            <Stylebutton onClick={()=>dispatch(logout())}>Logout</Stylebutton>
        </div>
    </Todouser>
  )
}
