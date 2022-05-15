import React from 'react'
import{Todouser1} from "../todo/todouser"
import { Input,Threenew,Small } from '../styled'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import{getting} from "../../redux/todo/action"
import{todormvsub} from "../../redux/todo/action"

export const Todohomepage = () => {
const state=useSelector((state)=>state.todo)
console.log(state,"8d")
const dispatch=useDispatch()

React.useEffect(()=>{
dispatch(getting())
},[])


const updatingdata=(e,id,val,val2)=>{
    console.log(e.target.name)

    fetch(`http://localhost:3004/todo/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        let mydata=data
        let todosub1=mydata[val].filter((ele)=>ele!=e.target.name)
        console.log(todosub1,"ll")
        mydata[val]=todosub1;
        console.log(mydata,"latest")
    
        fetch(`http://localhost:3004/todo/${id}`,{
            method:"PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            body:JSON.stringify(mydata)
        })
        .then((res)=>res.json())
        .then((data)=>{console.log(data,"putted it ")
              dispatch(getting())})
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
   
    // let newdata=state.todo1.filter((ele)=>ele.todosub!=e.target.name)
    ///on way of doing a very slow method!
    // let newdata=state.todo1.map((ele)=>{
    //     let data=ele.todosub.map((ele1)=>{
    //         if(ele1==e.target.name)
    //         {
    //             ele1=""
    //             return ele1
    //         }
    //         else
    //         {
    //             return ele1
    //         }
    //     })
    //     ele.todosub=data
    //     return ele
    // })
    // console.log(newdata,"after modifying")
    // //  console.log(newdata,"after modifying")
    // dispatch(todormvsub(e.target.name))
}


  return (
    <div style={{height:"720px",width:"900px",display:"flex",margin:"auto"}}>
        <Todouser1/>
        <Input style={{display:"flex",justifyContent:"space-around"}}>
        <Threenew>
            <div >
                <h2 style={{background:"blue"}}>Todo</h2>
            {
                state.todo1.map((ele)=>{
                    return(
                        <div style={{border:"1px solid black"}}>
                            <div>
                                <h4>Task</h4>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-around"}}>
                                <div style={{height:"20px",width:"80px",border:"1px solid black"}}>{ele.Personal?"Personal":ele.Offical?"Offical":"Others"}</div>
                                <div><h5 style={{marginTop:"2%"}}>{ele.date}</h5></div>
                            </div>
                            <div>
                                <p>{ele.dis}</p>
                            </div>
                            <div>
                                {
                                        ele.todosub.map((ele1)=>{
                                            if(ele1!="")
                                            return(
                                                <Small>
                                                <input type="checkbox" name={ele1} onClick={(e)=>updatingdata(e,ele.id,"todosub","todo1")}/>
                                                <h4>{ele1}</h4>
                                            </Small>
                                            )
                                            return(<div></div>)
                                        })
                                }
                            </div>            
                        </div>
                    )
                })
            }
            </div>
                       
        </Threenew>
        <Threenew>
            <div style={{border:"1px solid black"}}>
            <h2 style={{background:"green"}}>Personal</h2>
            {
                
                state.progress.map((ele)=>{
                    return(
                        <div style={{border:"1px solid black"}}>
                            <div>
                                <h4>Task</h4>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-around"}}>
                                <div style={{height:"20px",width:"80px",border:"1px solid black"}}>{ele.Personal?"Personal":ele.Offical?"Offical":"Others"}</div>
                                <div><h5 style={{marginTop:"2%"}}>{ele.date}</h5></div>
                            </div>
                            <div>
                                <p>{ele.dis}</p>
                            </div>
                            <div>
                                {
                                        ele.todoprog.map((ele1)=>{
                                            if(ele1!="")
                                            return(
                                                <Small>
                                                <input type="checkbox" name={ele1} onClick={(e)=>updatingdata(e,ele.id,"todoprog","progress")}/>
                                                <h4>{ele1}</h4>
                                            </Small>
                                            )
                                            return(<div></div>)
                                        })
                                }
                            </div>            
                        </div>
                    )
                })
            }
            </div>
                       
        </Threenew>

        <Threenew>
            <div style={{border:"1px solid black"}}>
            <h2 style={{background:"orange"}}>Others</h2>
            {
                state.done.map((ele)=>{
                    return(
                        <div style={{border:"1px solid black"}}>
                            <div>
                                <h4>Task</h4>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-around"}}>
                                <div style={{height:"20px",width:"80px",border:"1px solid black"}}>{ele.Personal?"Personal":ele.Offical?"Offical":"Others"}</div>
                                <div><h5 style={{marginTop:"2%"}}>{ele.date}</h5></div>
                            </div>
                            <div>
                                <p>{ele.dis}</p>
                            </div>
                            <div>
                                {
                                        ele.tododone.map((ele1)=>{
                                            if(ele1!="")
                                            return(
                                                <Small>
                                                <input type="checkbox" name={ele1} onClick={(e)=>updatingdata(e,ele.id,"tododone","done")}/>
                                                <h4>{ele1}</h4>
                                            </Small>
                                            )
                                            return(<div></div>)
                                        })
                                }
                            </div>            
                        </div>
                    )
                })
            }
            </div>
                       
        </Threenew>

        </Input>
    </div>
  )
}
