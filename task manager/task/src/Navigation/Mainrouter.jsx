import React from 'react'
import{Routes,Route} from "react-router-dom"
import{Login} from "../Component/login/login"
import{Todohomepage} from "../Component/todo/todohomepage"
import{Todoinput} from "../Component/todo/todoinput"
import{PrivateNode} from "./PrivateNode"
import{Todosummary} from "../Component/todo/todosummary"


export const Mainrouter = () => {
  return (
        <Routes>
            <Route path="/" element={<PrivateNode><Todohomepage/></PrivateNode>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/todo/*" element={<PrivateNode><Todoinput/></PrivateNode>}></Route>
            <Route path="/todo/:name" element={<PrivateNode><Todosummary/></PrivateNode>}></Route>
        </Routes>
  )
}
