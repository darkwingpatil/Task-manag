
import{Todoload,TodoSuccess,TodoError,Tododel,Todormvsub} from "./actiontypes"

const initstate={
    todo:[],
    personal:0,
    official:0,
    others:0,
    load:false,
    error:false,
    todo1:[],
    progress:[],
    done:[]
}

export const Todoreducer=(state=initstate,action)=>{
    switch(action.type)
    {
        case Todoload:{
            return{
                ...state,
                todo:[],
                load:true,
                error:false,
                personal:0,
                official:0,
                others:0,
                todo1:[],
                progress:[],
                done:[]
            }
        }
        case TodoError:{
            return{
                ...state,
                todo:[],
                load:false,
                error:true,
                personal:0,
                official:0,
                others:0,
                todo1:[],
                progress:[],
                done:[]
            }
        }

        case TodoSuccess:{
            let data1=action.payload.filter((ele)=>ele.Personal==true)
            let data2=action.payload.filter((ele)=>ele.Offical==true)
            let data3=action.payload.filter((ele)=>ele.Others==true)
            let data4=action.payload.filter((ele)=>ele.cat=="Todo")
            let data5=action.payload.filter((ele)=>ele.cat=="In Progress")
            let data6=action.payload.filter((ele)=>ele.cat=="Done")
            return{
                ...state,
                todo:action.payload,
                load:false,
                error:false,
                personal:data1.length,
                official:data2.length,
                others:data3.length,
                todo1:data4,
                progress:data5,
                done:data6
            }
        }

        case Tododel:{
            return{
                ...state,
                todo:action.payload,
                load:false,
                error:false
            }
        }

        case Todormvsub:{
            let data1=action.payload.filter((ele)=>ele.Personal==true)
            let data2=action.payload.filter((ele)=>ele.Offical==true)
            let data3=action.payload.filter((ele)=>ele.Others==true)
            let data4=action.payload.filter((ele)=>ele.cat=="Todo")
            let data5=action.payload.filter((ele)=>ele.cat=="In Progress")
            let data6=action.payload.filter((ele)=>ele.cat=="Done")
            return{
                ...state,
                todo:action.payload,
                load:false,
                error:false,
                personal:data1.length,
                official:data2.length,
                others:data3.length,
                todo1:data4,
                progress:data5,
                done:data6
            }
        }

        default:{
            return state
        }
    }
}