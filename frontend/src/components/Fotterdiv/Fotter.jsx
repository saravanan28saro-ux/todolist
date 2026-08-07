import React from "react";
import {
  FooterDiv,
  Logodiv,
  Username,
  User,
  Userimage,
} from "./styledcomponents";
import userdata from "../Data/userdata.jsx";

const Footer = () => {
  const user = userdata;

  return (
    <FooterDiv>
      <Logodiv>
        <User>
          <Userimage>
            <img src={user.avatar} alt="User Avatar" />
          </Userimage>

          <Username>
            <h1 style={{ fontSize: "20px" }}>{user.name}</h1>
            <p style={{ fontSize: "10px" }}>{user.role}</p>
          </Username>
        </User>
      </Logodiv>
    </FooterDiv>
  );
};

export default Footer;