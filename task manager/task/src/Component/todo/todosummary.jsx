import React from 'react'
import { useSelector } from 'react-redux'
import{Userdiv,Input} from "../styled"
import{Todouser1} from "../todo/todouser"

export const Todosummary = () => {
    const state=useSelector((state)=>state.todo)
    console.log(state,"in summarypage")
  return (
    <div style={{height:"auto",width:"900px",display:"flex",margin:"auto"}}>
        <Todouser1/>
        <Input>
        <div>
        <h3>Summary</h3>
        <Userdiv style={{margin:"auto"}}>
         <h4 style={{marginTop:"2%"}}>Todo</h4>
         <h4 style={{marginTop:"2%"}}>{state.todo1.length}</h4>
        </Userdiv>
        <Userdiv style={{margin:"auto"}}>
         <h4 style={{marginTop:"2%"}}>In Progress</h4>
         <h4 style={{marginTop:"2%"}}>{state.progress.length}</h4>
        </Userdiv>
        <Userdiv style={{margin:"auto"}}>
         <h4 style={{marginTop:"2%"}}>Done</h4>
         <h4 style={{marginTop:"2%"}}>{state.done.length}</h4>
        </Userdiv>
        </div>
       <div style={{width:"30%"}}></div>
        </Input>

    </div>
  )
}
