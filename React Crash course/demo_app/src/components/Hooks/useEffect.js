import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
//   const intialData = 12;
  const [myNum, setMyNum] = useState(0); // Returns 2 values(1st -> data, 2nd -> a function using which we can change its current state value), must be at the starting of the function

  // HOOKS must be defined at the top of the function
  useEffect(() => {
    document.title = `chats(${myNum})`;
  });

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
        
      </div>
    </>
  );
};

export default UseEffect;
