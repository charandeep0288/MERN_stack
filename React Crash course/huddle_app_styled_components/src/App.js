import React from "react";

import { ThemeProvider } from "styled-components";
import { Container } from "./components/Styles/Container.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import GlobalStyle from "./components/Styles/Global";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
