import React from "react";
import{Input,Mini,Small} from "../styled"
import { v4 as uuidv4 } from 'uuid';
import { useSelector,useDispatch } from "react-redux";
import{getting,todoerror,deldata} from "../../redux/todo/action"
import{useNavigate} from "react-router-dom"
import{Todouser1} from "../todo/todouser"
import axios from "axios";
export const Todoinput=()=>{

    const [mydata,setdata]=React.useState({})
    const [arrdata,setarrdata]=React.useState([])
    const [arrdata1,setarrdata1]=React.useState([])
    const [arrdata2,setarrdata2]=React.useState([])
    const navigate=useNavigate()
    const state=useSelector((state)=>state.todo)
    console.log(state.todo)
    const dispatch=useDispatch()
    console.log(state,"intodolist")


    React.useEffect(()=>{
        dispatch(getting())
    },[])

    const alldata=(e)=>{
        let val=e.target.name;
        if(e.target.type=="checkbox")
        {
            setdata({...mydata,[val]:e.target.checked})
        }
        else
        {
            setdata({...mydata,[val]:e.target.value})
        }
            
        
    }
    const myobj=()=>{
        console.log(mydata,"todo input")
        axios.post("http://localhost:3004/todo",mydata)
        .then((data)=>dispatch(getting()))
        .catch((err)=>dispatch(todoerror()))
    }
    const deldata=(ele)=>{

        axios.delete(`http://localhost:3004/todo/${ele}`)
        .then((data)=>dispatch(getting()))
        .catch((err)=>dispatch(todoerror()))

    }
        return(
      
            
            <div style={{height:"auto",width:"900px",display:"flex",margin:"auto"}}>
            <Todouser1/>
            <Input>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <Mini><h4>Title</h4></Mini>
                <Mini><input type ="name" placeholder="enter the task" name="task"style={{border:"none"}} onChange={(e)=>alldata(e)}/></Mini>
                <div style={{height:"50px",width:"60px",border:"1px solid black"}}><button style={{border:"none",background:"white"}} onClick={()=>{
                    myobj()
                    navigate("/")}}>ADD</button></div>
                <Mini><input type="date" name="date" onChange={(e)=>alldata(e)} /></Mini>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"50px"}}>
                <div>
                    <textarea name="dis" rows="3" cols="20" onChange={(e)=>alldata(e)} placeholder="Discription" style={{marginTop:"40%"}}/>
                </div>
                <div>
                    <h3>delete the task here</h3>
                    {
                        state.todo.map((ele)=>{
                            return(
                                <div key={ele.id}>
                                    <Mini style={{display:"flex",justifyContent:"space-around"}}><h3>{ele.task}</h3>
                                    <button onClick={()=>{
                                        deldata(ele.id)
                                    }}>del</button>
                                    </Mini>
                                </div>
                            )
                        })
                        
                    }
                </div>
                <div>
                    {/* <Mini><button style={{border:"none",background:"white",cursor:"pointer"}} onClick={()=>{
                        setarrdata([...arrdata,`substask${uuidv4()}`])
                        setdata({...mydata,subtask:arrdata})}}>Create Newtask</button></Mini> */}
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <Small>
                        <input type="radio" name="cat" value="Todo" className="circle"  onChange={(e)=>alldata(e)}/>
                        <h4>Todo</h4>
                        <input placeholder="subtask and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata([...arrdata,e.target.value])
                                setdata({...mydata,todosub:arrdata})}}}/>
                                 <input placeholder="subtask1 and press enter" name="todosub"  onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata([...arrdata,e.target.value])
                                setdata({...mydata,todosub:arrdata})}}}/>   
                            <input placeholder="subtask2 and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata([...arrdata,e.target.value])
                                setdata({...mydata,todosub:arrdata})}}}/>  
                    </Small>
                    <Small>
                        <input type="radio" name="cat" value="In Progress" className="circle"  onChange={(e)=>alldata(e)}/>
                        <h4>In Progress</h4>
                        <input placeholder="subtask and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata1([...arrdata1,e.target.value])
                                setdata({...mydata,todoprog:arrdata1})}}}/>
                        <input placeholder="subtask1 and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata1([...arrdata1,e.target.value])
                                setdata({...mydata,todoprog:arrdata1})}}}/>  
                        <input placeholder="subtask2 and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata1([...arrdata1,e.target.value])
                                setdata({...mydata,todoprog:arrdata1})}}}/>         
                    </Small>
                    <Small>
                        <input type="radio" name="cat" value="Done"  className="circle" onChange={(e)=>alldata(e)}/>
                        <h4>Done</h4>
                        {/* <Mini><button style={{border:"none",background:"white",cursor:"pointer"}} onClick={()=>{
                        setarrdata2([...arrdata2,`substask${uuidv4()}`])
                        setdata({...mydata,tododone:arrdata2})}}>Create Newtask</button></Mini> */}
                        <input placeholder="subtask and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata2([...arrdata2,e.target.value])
                                setdata({...mydata,tododone:arrdata2})}}}/>
                        <input placeholder="subtask1 and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata2([...arrdata2,e.target.value])
                                setdata({...mydata,tododone:arrdata2})}}}/>

                        <input placeholder="subtask2 and press enter" name="todosub" onKeyUp={(e)=>{ 
                            if(e.key=="Enter")
                            {   setarrdata2([...arrdata2,e.target.value])
                                setdata({...mydata,tododone:arrdata2})}}}/>        
                    </Small>
                </div>
                <h1></h1>
                <h1></h1>
            </div>
            <h2>Tag</h2>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <Small>
                        <input type="checkbox" name="Offical"  onChange={(e)=>alldata(e)}/>
                        <h4>Offical</h4>
                    </Small>
                    <Small>
                        <input type="checkbox" name="Personal"  onChange={(e)=>alldata(e)}/>
                        <h4>Personal</h4>
                    </Small>
                    <Small>
                        <input type="checkbox" name="Others"  onChange={(e)=>alldata(e)}/>
                        <h4>Others</h4>
                    </Small>
                </div>
                <h1></h1>
                <h1></h1>
            </div>
            </Input>
        </div>
        
    )
}