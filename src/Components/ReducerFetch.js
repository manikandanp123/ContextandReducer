import React,{useReducer,useEffect} from 'react'
import axios from "axios";

let initialState={
    load:true,
    data:{},
    err:false
}

function reducer(state,action){
    switch(action.type){
        case "success":{
            return {
                ...initialState,
                load:false,
                data:action.newdata,
                err:false
            }
        }
        case "fail":{
            return {
                ...initialState,
                load:false,
                data:action.newdata,
                err:false
            }
        }
        case "default":{
            return state
        }
    }
}

const ReducerFetch = () => {
    let [state,dispatch]=useReducer(reducer,initialState);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            dispatch({type:"success",newdata:res.data})
            console.log(res.data)
        })
        .catch(err=>{
            dispatch({typeof:"fail"})
        })
    },[])
    return (
    <div>ReducerFetch<br/>
        {state.load?"Loading..........":state.data.title}
        {state.err?"wrong output":null}
    </div>
  )
}

export default ReducerFetch;