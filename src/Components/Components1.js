import React,{useContext} from "react";
import { Content } from "../App";

const Components1 = () => {
    const data=useContext(Content);

  return (
    <div>
      Components1 - {data.currentData}
      <button onClick={() => data.CurrentDispatch("incre")}>increment </button>
      <button onClick={() => data.CurrentDispatch("decre")}>decrement </button>
      <button onClick={() => data.CurrentDispatch("reset")}>reset </button>
    </div>
  );
};

export default Components1;
