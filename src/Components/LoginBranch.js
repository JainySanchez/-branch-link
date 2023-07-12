import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import password from "../Images/password.png";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarTopLogin from "./NavBarTopLogin"; // Importa el componente Redirect de react-router-dom

function LoginBranch() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Estado para controlar la redirección

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    try {
      // Realiza la petición GET al endpoint /usuarios de tu API
      const response = await axios.get("http://localhost:5000/usuarios");
      const usuarios = response.data;

      // Verifica si existe un usuario con el correo y contraseña ingresados
      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.password === password
      );

      if (usuarioEncontrado) {
        // Inicio de sesión exitoso
        console.log("Inicio de sesión exitoso");
        setLoggedIn(true);
        navigate("/home"); // Establece el estado para redirigir al usuario
      } else {
        // Credenciales incorrectas
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      // Manejo de errores en caso de que ocurra un problema con la petición
      console.error("Error al obtener los usuarios:", error);
    }
  };

  return (
    <div>
      <NavbarTopLogin />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="container">
          {!loggedIn ? (
            <Form onSubmit={handleSubmit}>
              <img className="styleImg" src={password} alt="Login Background" />
              <br></br>
              <h1>Bienvenid@ de nuevo</h1>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Conectarme
              </Button>
            </Form>
          ) : (
            <p>Usuario autenticado. Redireccionando...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginBranch;
