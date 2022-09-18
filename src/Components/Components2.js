import React,{useContext} from "react";
import { Content } from "../App";

const Components2 = () => {
    const data=useContext(Content);

  return (
    <div>
      Components2 - {data.currentData}
      <button onClick={() => data.CurrentDispatch("incre")}>increment </button>
      <button onClick={() => data.CurrentDispatch("decre")}>decrement </button>
      <button onClick={() => data.CurrentDispatch("reset")}>reset </button>
    </div>
  );
};

export default Components2;
