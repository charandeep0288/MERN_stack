import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  //  this function takes 2 arguments -> (currentState, actionType)
  if (action.type === "INCR") {
    state += 1;
  } else if (state > 0 && action.type === "DECR") {
    state -= 1;
  }

  return state;
};

// For small task useState is best option but for bigger tasks use useReducer
const UseReducer = () => {
  //   const [myNum, setMyNum] = useState(0);
  const initialData = 10;
  // we cannot change value of state using dispatch function, instead we call the reducer function to change state value.
  const [state, dispatch] = useReducer(reducer, initialData); // const [currentState, dispatchMethod] = useReducer(reducerFunction, intialValue); // return array with 2 parameters, useReducer takes 2 agruments -> 1st - reducer fun, 2nd - intial data
  // we use dispatch fn to call reducer fn, with the help of dispatch fn we define action which we want to perform and then change actual state value in the reducer fn 

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseReducer;
