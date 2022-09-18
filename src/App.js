import "./App.css";
import Components1 from "./Components/Components1";
import Components2 from "./Components/Components2";
import React, { useReducer, createContext } from "react";
import Noramlfetch from "./Components/Noramlfetch"; 
import ReducerFetch from "./Components/ReducerFetch";

let initialState=0;
export const Content = createContext();

function reducer(currstate, action) {
  // console.log(action);
  switch (action) {
    case "incre":
      return (currstate += 10);
    case "decre":
      return (currstate -= 10);
    default:
      return (currstate = 0);
  }
}

function App() {
  const [data,dispatch]=useReducer(reducer,initialState);

  return (
    <div className="App">
      value - {data}
      <Content.Provider value={{currentData:data,CurrentDispatch:dispatch}}>
        <Components1 />
        <Components2 />
        <Noramlfetch />
        <ReducerFetch />
      </Content.Provider>
    </div>
  );
}

export default App;
