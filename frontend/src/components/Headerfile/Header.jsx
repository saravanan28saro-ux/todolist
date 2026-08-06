import { Headerdiv,Logodiv,Dashbord,Button} from "./styledcomponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const listofitems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "bi-speedometer2",
    class: "active",
  },
  {
    name: "My Task",
    path: "/my-task",
    icon: "bi-list-task",
    class: "inactive",
  },
  {
    name: "Today",
    path: "/today",
    icon: "bi-calendar-day",
    class: "inactive"
  },
  {
    name: "Upcoming",
    path: "/upcoming",
    icon: "bi-calendar-event",
    class: "inactive"
  },
  {
    name: "Completed",
    path: "/completed",
    icon: "bi-check-circle",
    class: "inactive"
  },
  {
    name: "Priority",
    path: "/priority",
    icon: "bi-star-fill",
    class: "inactive"
  },
  {
    name: "Logout",
    path: "/logout",
    icon: "bi-box-arrow-right",
    class: "inactive"
  },
  {
    name:"Add Task",
    path:"/add-task",
    icon:"bi-plus-circle",
    class:"active"
  }
];
return (
  <Headerdiv>
    <Logodiv>
      <i
        className="bi bi-arrow-up-right-square-fill"
        style={{ fontSize: "2rem", color: "blue" }}
      ></i>

      <div>
        <h3>Logo</h3>
        <p>Do your work daily</p>
      </div>
    </Logodiv>

    <Dashbord>
      {listofitems.map((item, index) => (
        <Button style={{ backgroundColor: item.class === "active" ? "blue" : "transparent", color: item.class === "active" ? "white" : "black" }}
          key={index}
          onClick={() => navigate(item.path)}
        >
          <i style={{ marginRight: "15px" }} className={`bi ${item.icon}`}></i>
          {item.name}
        </Button>
      ))}
    </Dashbord>
  </Headerdiv>
);}

export default Header;