import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import adduser from "../Images/add-user.png";
import "./styles.css";
import NavbarTopRegist from "./NavBarTopRegist";
import axios from "axios";

function RegistBranch() {

  const navigate = useNavigate();
  const [names, setnames] = useState("");
  const [surnames, setsurnames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realiza la solicitud POST a tu API
      const response = await axios.post("http://localhost:5000/usuarios", {
        names,
        surnames,
        email,
        password,
      });

      // Si la respuesta es exitosa, redirige al usuario a otra página (por ejemplo, la página de inicio de sesión)
      navigate("/");
    } catch (error) {
      // Maneja el error de la solicitud
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <div>
      <NavbarTopRegist />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="container">
          <Form onSubmit={handleSubmit}>
            <img className="styleImg" src={adduser} alt="Login Background" />
            <br></br>
            <h1>Regístrate ahora</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" value={names}
                onChange={(event) => setnames(event.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" vvalue={surnames}
                onChange={(event) => setsurnames(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email}
                onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password}
                onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Registrarme
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegistBranch;
