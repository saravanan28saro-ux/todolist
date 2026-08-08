import React, { useState } from "react";

import {
  Headerdiv,
  Logodiv,
  Dashbord,
  Button,
  ADDbutton,
  MenuButton,
} from "./styledcomponents";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate } from "react-router-dom";
import { list } from "../Data/List";

const Header = ({ setShowAddTask }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);

    
    setOpen(false);
  };

  return (
    <>
      
      <MenuButton onClick={() => setOpen(!open)}>
        <i className="bi bi-list"></i>
      </MenuButton >

      
      <Headerdiv open={open}>

        <Logodiv>
          <i
            className="bi bi-arrow-up-right-square-fill"
            style={{
              fontSize: "2rem",
              color: "blue",
            }}
          ></i>

          <div>
            <h3>Logo</h3>
            <p>Do your work daily</p>
          </div>
        </Logodiv>

        <Dashbord>
          {list.map((item, index) => (
            <Button
              key={index}
              style={{
                backgroundColor:
                  item.class === "active"
                    ? "blue"
                    : "transparent",

                color:
                  item.class === "active"
                    ? "white"
                    : "black",
              }}
              onClick={() => handleNavigate(item.path)}
            >
              <i
                style={{ marginRight: "15px" }}
                className={`bi ${item.icon}`}
              ></i>

              {item.name}
            </Button>
          ))}
        </Dashbord>

        
        <ADDbutton
          onClick={() => {
            setShowAddTask(true);
            setOpen(false);
          }}
        >
          <i
            style={{ marginRight: "15px" }}
            className="bi bi-plus-circle"
          ></i>

          Add Task
        </ADDbutton>

      </Headerdiv>
    </>
  );
};

export default Header;