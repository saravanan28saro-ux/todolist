import { Headerdiv,Logodiv,Dashbord,Button} from "./styledcomponents";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import { list } from "../Data/List";

const Header = () => {
  const navigate = useNavigate();
  const listofitems=list;
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
        <Button style={{ backgroundColor: item.class === "active" ? "blue" : "transparent", color: item.class === "active" ? "white " : "black !important" }}
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