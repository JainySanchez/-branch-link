import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import "./styles.css";
import axios from "axios";


function Profile() {
  const [userData, setUserData] = useState({
    email: "",
    names: "",
    surnames: ""
  });

  useEffect(() => {
    fetchUserData(); // Llamar a la función que obtiene los datos del API
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/usuarios");
      const data = response.data[0];

      setUserData({
        email: data.email,
        names: data.names,
        surnames: data.surnames
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarTop />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <NavbarLeft />
        </div>
        <div className="boxProfile">
          <Form style={{ width: "600px" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.surnames}
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={userData.names}
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
