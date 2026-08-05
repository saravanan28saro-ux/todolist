import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Headerdiv, MainDiv ,FooterDiv,Logodiv} from "./styledcomponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BsHouse } from "react-icons/bs";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Headerdiv>
          <Logodiv>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
             <i style={{ fontSize: "2rem" ,color: "blue"}} class="bi bi-arrow-up-right-square-fill"></i>
            </div>
            <div>
              <h1>Logo</h1>
              <p>do your work daily</p>
            </div>
          </Logodiv>
        
      </Headerdiv>
      <MainDiv>
        
      </MainDiv>
      <FooterDiv>
        
      </FooterDiv>
      </div>
      
    </BrowserRouter>
  );
}

export default App;