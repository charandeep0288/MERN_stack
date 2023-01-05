import React from "react";
// import UseState from "./components/Hooks/useState";
// import UseEffect from "./components/Hooks/useEffect";
// import UseReducer from "./components/Hooks/useReducer";

import { ThemeProvider } from "styled-components";
import { Container } from "./components/Styles/Container";
import Header from "./components/Header";
import GlobalStyle from "./components/Styles/Global";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

const App = () => {
  return (
    <>
      <>
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseReducer /> */}
      </>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header></Header>
          <Container>
            <h1>Hello</h1>
          </Container>
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
