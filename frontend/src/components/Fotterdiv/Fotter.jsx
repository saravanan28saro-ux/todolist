import { FooterDiv ,Logodiv,Username,User,Userimage} from "./styledcomponents";
import React, { useState } from "react";
const Footer = () => {
const [user, setUser] = useState({
    name: "John Doe",
    role: "Software Engineer",
    avatar: "user-avatar.jpg"
  });

  return (
    <FooterDiv>
      <Logodiv>
            <i className="bi bi-bell-fill"></i>
      
            <User>
                <Userimage>
                    <img src="user-avatar.jpg" alt="User Avatar"/>
                </Userimage>
                <username>
                     <h1 style={{fontSize:"20px"}}>{user.name}</h1>
                <p style={{fontSize:"10px"}}>{user.role}</p>
                </username>
            </User>
          </Logodiv>
    </FooterDiv>
  );
};

export default Footer;