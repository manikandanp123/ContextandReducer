import React,{useEffect,useState} from 'react';
import axios from "axios";

const Noramlfetch = () => {
    let [data,setData]=useState({});
    let [load,setLoad]=useState(true);
    let [err,setErr]=useState(false);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            setData(res.data)
            // console.log("inside it", res.data)
            setLoad(false)
            setErr(false)
        })
        .catch((err)=>{
            setErr("error occured in this process")
        })
    },[])
    // console.log(data);

  return (
    <div>
        {load?"Loading!!!!......":data.title}
        {err?err:null}
    </div>
  )
}

export default Noramlfetch