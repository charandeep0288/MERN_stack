import React from "react"; // no need to write this in React latest version 17
// 1. import React from "react"

function App() {
  return(<> 
            <MyName /> {/* Neted Component -> Calling one component in other component */}
            <h1 className="JSX">Hello World, Welcome to React Demo Project {3 + 4} </h1>
            <p>Awesome</p>
            <img src="" alt="" /> 
            {/* 
            Q What is JSX? Rules to write JSX.
              1. It always return single element
              2. use Div or React Fragment to wrap all your JSX Code
              3. ClassName in place of class
              4. Need to close all non closing Tags in JSX
              5. Use camelCase for attributes
            */}
         </>
        ); // always return JSX, we need to return anything each time
};

const MyName = () => { // functional conponent
  return (<div>
    <h1>Chanrandeep Singh</h1>
  </div>);
};

// // how react is actually looking into it
// const App = () => {
//   return React.createElement("div", {}, 
//             React.createElement("h1", {}, "Hello World"));
// };

export default App;
// export default MyName;