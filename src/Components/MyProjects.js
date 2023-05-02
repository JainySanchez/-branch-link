import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function MyProjects(props) {
  const [showNewProject, setNewProject] = useState(false);
  const [projectsData, setProjectsData] = useState([]); // variable de estado para los datos de proyectos
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
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProjectsData([...projectsData, formData]); // actualiza la variable de estado con los datos del proyecto agregado
    resetFormData();
    handleCloseModal()
    // props.onSubmit(formData);
  };
  const resetFormData = () => {
    setFormData({
      name: "",
      description: "",
      fechaInicial: "",
      fechaFinal: "",
      costoEstimado: "",
    });
  };
  console.log(projectsData);

  return (
    <div>
      <Card style = {{width : "700px"}}>
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
                
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  placeholder="nameProject"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FloatingLabel>

              <FloatingLabel
               
                label="Descripción Detallada"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <br></br>
              <FloatingLabel
                
                label="Fecha de Inicio"
                className="mb-3"
              >
                <Form.Control
                  placeholder="fechaInicio"
                  type="text"
                  id="fechaInicial"
                  name="fechaInicial"
                  value={formData.fechaInicial}
                  onChange={handleInputChange}
                />
              </FloatingLabel>

              <br></br>
              <FloatingLabel
                
                label="Fecha Final"
                className="mb-3"
              >
                <Form.Control
                  placeholder="fechaFinal"
                  type="text"
                  id="fechaFinal"
                  name="fechaFinal"
                  value={formData.fechaFinal}
                  onChange={handleInputChange}
                />
              </FloatingLabel>

              <br></br>
              <FloatingLabel
               
                label="Costo Estimado"
                className="mb-3"
              >
                <Form.Control
                  placeholder="costoEstimado"
                  type="text"
                  id="costoEstimado"
                  name="costoEstimado"
                  value={formData.costoEstimado}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      {projectsData.map((formData, index) => (
        <div key={index}>
          <Card style = {{width : "700px"}}>
            <Card.Header as="h5">{formData.name}</Card.Header>
            <Card.Body>
              <div>
                <Card.Title>{formData.name}</Card.Title>
                <div style={{ display: "flex", "flex-direction": "row" }}>
                  <Card.Img
                    variant="top"
                    src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png"
                    style={{ width: "100px" }}
                  />
                  <Card.Text>{formData.description}</Card.Text>
                </div>
              </div>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default MyProjects;
