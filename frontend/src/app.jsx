import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Headerfile/Header";
import Main from "./components/Maindiv/Main";
import Footer from "./components/Fotterdiv/Fotter";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;