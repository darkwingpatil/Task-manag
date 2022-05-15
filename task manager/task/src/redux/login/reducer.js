
import { LoginLoad,LoginSuccess,LoginError,Logout } from "./actiotypes";
import { load,save } from "../../utils/localstorage";

const initState={
    login:load("login")||"",
    loading:false,
    error:false,
}

export const loginreducer=(state=initState,action)=>{
    switch(action.type)
    {
        case LoginLoad:{
            return{
                ...state,
                login:"",
                loading:true,
                error:false
            }
        }

        case LoginError:{
            return{
                ...state,
                login:"",
                loading:false,
                error:true
            }
        }

        case LoginSuccess:{
            let data=action.payload;
            save("login",data)
            return{
                ...state,
                login:data,
                loading:false,
                error:false
            }
        }
        case Logout:{
            let data=""
            save("login",data)
            return{
                ...state,
                login:data,
                loading:false,
                error:false
            }
        }
        

        default:{
            return state
        }
    }
}