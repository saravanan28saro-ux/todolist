import React, { useState } from "react";

import {
  Headerdiv,
  Logodiv,
  Dashbord,
  Button,
  ADDbutton,
  MenuButton,
  LogoutButton,
} from "./styledcomponents";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  useNavigate,
} from "react-router-dom";

import {
  list,
} from "../Data/List";

import {
  logoutUser,
} from "../Data/auth";


const Header = ({ setShowAddTask }) => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const handleNavigate = (path) => {

    navigate(path);

    setOpen(false);
  };


  const handleLogout = () => {

    logoutUser();

    setOpen(false);

    navigate("/login", {
      replace: true,
      state: {
        message:
          "Successfully logged out.",
      },
    });
  };


  return (
    <>

      <MenuButton
        onClick={() =>
          setOpen(!open)
        }
      >
        <i className="bi bi-list"></i>
      </MenuButton>


      <Headerdiv open={open}>

        <Logodiv>

          <i
            className="bi bi-check2-square"
            style={{
              fontSize: "2rem",
              color: "blue",
            }}
          ></i>

          <div>
            <h3>TaskApp</h3>

            <p>
              Do your work daily
            </p>
          </div>

        </Logodiv>


        <Dashbord>

          {list.map(
            (item, index) => (

              <Button
                key={index}

                onClick={() =>
                  handleNavigate(
                    item.path
                  )
                }
              >

                <i
                  style={{
                    marginRight: "15px",
                  }}

                  className={
                    `bi ${item.icon}`
                  }
                ></i>

                {item.name}

              </Button>

            )
          )}

        </Dashbord>


        <ADDbutton
          onClick={() => {

            setShowAddTask(true);

            setOpen(false);

          }}
        >

          <i
            style={{
              marginRight: "15px",
            }}

            className="bi bi-plus-circle"
          ></i>

          Add Task

        </ADDbutton>


        <LogoutButton
          onClick={handleLogout}
        >

          <i
            className="bi bi-box-arrow-right"
          ></i>

          Logout

        </LogoutButton>

      </Headerdiv>

    </>
  );
};


export default Header;