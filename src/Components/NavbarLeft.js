import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolderOpen,
  faList,
  faUsers,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function NavbarLeft() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          borderRight: "1px solid black",
          height: "100%",
          marginRight: "10px",
        }}
      ></div>
      <Nav
        defaultActiveKey="/home"
        className="flex-column"
        style={{ paddingLeft: "25px", width: "200px", margin: "1px" }}
      >
        <Nav.Link href="/home" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faHome} /> Inicio
        </Nav.Link>
        <Nav.Link href="/NewProject" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faFolderOpen} /> Proyectos
        </Nav.Link>
        <Nav.Link href="MyProjects" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faList} /> Mis Proyectos
        </Nav.Link>
        <Nav.Link eventKey="link-3" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faUsers} /> Tu Red
        </Nav.Link>
        <Nav.Link href="Profile" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faUser} /> Perfil
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default NavbarLeft;
