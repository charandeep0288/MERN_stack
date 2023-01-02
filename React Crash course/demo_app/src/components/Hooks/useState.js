import React, { useState } from "react";
import "./style.css";

const UseState = () => {
//   const intialData = 12;
  const [myNum, setMyNum] = useState(0); // Returns 2 values(1st -> data, 2nd -> a function using which we can change its current state value), must be at the starting of the function

  console.log(myNum);
  console.log(setMyNum);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)) }>
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

export default UseState;
