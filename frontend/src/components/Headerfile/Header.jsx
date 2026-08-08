import {
  Headerdiv,
  Logodiv,
  Dashbord,
  Button,
  ADDbutton,
} from "./styledcomponents";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate } from "react-router-dom";
import { list } from "../Data/List";

const Header = ({ setShowAddTask }) => {
  const navigate = useNavigate();

  return (
    <Headerdiv>

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

            onClick={() => navigate(item.path)}
          >

            <i
              style={{ marginRight: "15px" }}
              className={`bi ${item.icon}`}
            ></i>

            {item.name}

          </Button>

        ))}

      </Dashbord>


      {/* ADD TASK BUTTON */}

      <ADDbutton
        onClick={() => setShowAddTask(true)}
      >

        <i
          style={{ marginRight: "15px" }}
          className="bi bi-plus-circle"
        ></i>

        Add Task

      </ADDbutton>

    </Headerdiv>
  );
};

export default Header;