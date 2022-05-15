import{Todoload,TodoSuccess,TodoError,Tododel,Todormvsub} from "./actiontypes"



export const todoload=()=>{
    return{
        type:Todoload
    }
}


export const todosuccess=(payload)=>{
    return{
        type:TodoSuccess,
        payload
    }
}

export const todoerror=()=>{
    return{
        type:TodoError,
    }
}

export const deldata=(payload)=>{
    return{
        type:Tododel,
        payload
    }
}

export const todormvsub=(payload)=>{
    return{
        type:Todormvsub,
        payload
    }
}

export const getting=()=>(dispatch)=>{
    dispatch(todoload())
    fetch("http://localhost:3004/todo")
    .then((res)=>res.json())
    .then((data)=>dispatch(todosuccess(data)))
    .catch((err)=>dispatch(todoerror()))

}