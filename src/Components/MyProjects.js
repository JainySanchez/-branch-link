import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function MyProjects(props) {
  const [showNewProject, setNewProject] = useState(false);

  const handleClick = () => {
    setNewProject(true);
  };

  const handleCloseModal = () => {
    setNewProject(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    fechaInicial: "",
    fechaFinal: "",
    costoEstimado: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
  };

  return (
    <div>
      <Card>
        <Card.Body>This is some Projects</Card.Body>
        <Button onClick={handleClick} variant="outline-primary">
          Create New Project
        </Button>
      </Card>
      <br></br>
      <Modal show={showNewProject} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control placeholder="nameProject" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Descripción Detallada"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <br></br>
              <FloatingLabel
                controlId="floatingInput"
                label="Fecha de Inicio"
                className="mb-3"
              >
                <Form.Control placeholder="fechaInicio" />
              </FloatingLabel>
              <br></br>
              <FloatingLabel
                controlId="floatingInput"
                label="Fecha Final"
                className="mb-3"
              >
                <Form.Control placeholder="fechaFinal" />
              </FloatingLabel>
              <br></br>
              <FloatingLabel
                controlId="floatingInput"
                label="Costo Estimado"
                className="mb-3"
              >
                <Form.Control placeholder="costoEstimado" />
              </FloatingLabel>
            
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Card.Header as="h5">Project 127681</Card.Header>
        <Card.Body>
          <div>
            <Card.Title>Backend Developer</Card.Title>
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <Card.Img
                variant="top"
                src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png"
                style={{ width: "100px" }}
              />
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Header as="h5">Project 127681</Card.Header>
        <Card.Body>
          <div>
            <Card.Title>Backend Developer</Card.Title>
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <Card.Img
                variant="top"
                src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png"
                style={{ width: "100px" }}
              />
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Header as="h5">Project 127681</Card.Header>
        <Card.Body>
          <div>
            <Card.Title>Backend Developer</Card.Title>
            <div style={{ display: "flex", "flex-direction": "row" }}>
              <Card.Img
                variant="top"
                src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png"
                style={{ width: "100px" }}
              />
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </div>
          </div>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyProjects;
