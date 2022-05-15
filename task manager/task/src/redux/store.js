import {legacy_createStore as createStore, applyMiddleware, compose,combineReducers} from "redux"

import{loginreducer} from "./login/reducer"
import{Todoreducer} from "./todo/reducer"

const middleware1=(store)=>(next)=>(action)=>{
  if(typeof(action)=="function")
  {
    return action(store.dispatch)
  }

    next(action)
}

const middleware2=(store)=>(next)=>(action)=>{
  if(action.type=="Tododel")
  {
    console.log(action.payload,"in middleware")
    console.log(store.getState().todo.todo)
    let newdata=store.getState().todo.todo.filter((ele)=>ele.id!=action.payload)
    action.payload=newdata;
  }
  next(action)
}


const middleware3=(store)=>(next)=>(action)=>{
  if(action.type=="Todormvsub")
  {
    // let newdata=store.getState().todo.todo.filter((ele)=>ele.todosub!=action.payload)

    let newdata=store.getState().todo.todo1.map((ele)=>{
      let data=ele.todosub.map((ele1)=>{
          if(ele1==action.payload)
          {
              ele1=""
              return ele1
          }
          else
          {
              return ele1
          }
      })
      ele.todosub=data
      return ele
  })
    action.payload=newdata;
  }  
  next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(middleware1,middleware2,middleware3)
  // other store enhancers if any
);

const rootreducer=combineReducers({
  login:loginreducer,
  todo:Todoreducer
})
export const store = createStore(rootreducer, enhancer);