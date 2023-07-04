import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import adduser from "./add-user.png";
import "./styles.css";

function RegistBranch() {
  return (
    <div className="container">
      <Form>
        <img className="styleImg" src={adduser} alt="Login Background" />
        <br></br>
        <h1>Regístrate ahora</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
          Registrarme
        </Button>
      </Form>
    </div>
  );
}

export default RegistBranch;
