import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import axios from "axios";

// Componente funcional MyProjects
function MyProjects(props) {
  const [Nombre, setNombre] = useState("");
  const [Descripcion, setDesc] = useState("");
  const [FechaInicio, setFechaIni] = useState("");
  const [FechaFinalizacion, setFechaFin] = useState("");
  const [CostoEstimado, setCosto] = useState("");

  // Estado para controlar la visibilidad del modal para crear un nuevo proyecto
  const [showNewProject, setNewProject] = useState(false);
  // Estado para almacenar los datos de los proyectos
  const [projectsData, setProjectsData] = useState([]);
  // Estado para almacenar el ID del proyecto en modo de edición
  const [editProjectId, setEditProjectId] = useState(null);

  // Manejador para abrir el modal para crear un nuevo proyecto
  const handleClick = () => {
    setNewProject(true);
  };

  // Manejador para cerrar el modal
  const handleCloseModal = () => {
    setNewProject(false);
  };

  // Manejador para abrir el formulario de edición de un proyecto
  const handleEdit = (projectId) => {
    setEditProjectId(projectId);
    setNewProject(true);
  };

  // Estado inicial y manejo de cambios en el formulario
  const [formData, setFormData] = useState({
    Nombre: "",
    Descripcion: "",
    FechaInicio: "",
    FechaFinalizacion: "",
    CostoEstimado: "",
  });

  // Manejador para enviar el formulario de creación o edición de proyecto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProjectId) {
        // Realiza la solicitud PUT a tu API para actualizar el proyecto
        const response = await axios.put(`http://localhost:5000/proyectos/${editProjectId}`, {
          Nombre,
          Descripcion,
          FechaInicio,
          FechaFinalizacion,
          CostoEstimado,
        });
        if (response.status === 200) {
          const updatedProject = response.data;
          setProjectsData(projectsData.map((project) => (project.id === updatedProject.id ? updatedProject : project)));
          console.log("Proyecto actualizado correctamente");
        } else {
          // Manejo de errores
          console.log("Error al actualizar el proyecto");
        }
      } else {
        // Realiza la solicitud POST a tu API para crear un nuevo proyecto
        const response = await axios.post("http://localhost:5000/proyectos", {
          Nombre,
          Descripcion,
          FechaInicio,
          FechaFinalizacion,
          CostoEstimado,
        });
        if (response.status === 200) {
          const newProject = response.data;
          setProjectsData([...projectsData, newProject]);
          console.log("Proyecto creado correctamente");
        } else {
          // Manejo de errores
          console.log("Error al crear el proyecto");
        }
      }
      resetFormData();
      handleCloseModal();
      setEditProjectId(null); // Restablece el ID del proyecto en modo de edición
    } catch (error) {
      console.log("Error de conexión con el servidor:", error);
    }
  };

  // Manejador para eliminar un proyecto
  const handleDelete = async (projectId) => {
    try {
      // Realiza la solicitud DELETE a tu API
      const response = await axios.delete(`http://localhost:5000/proyectos/${projectId}`);
      if (response.status === 200) {
        setProjectsData(projectsData.filter((project) => project.id !== projectId));
        console.log("Proyecto eliminado correctamente");
      } else {
        // Manejo de errores
        console.log("Error al eliminar el proyecto");
      }
    } catch (error) {
      console.log("Error de conexión con el servidor:", error);
    }
  };

  // Función para restablecer el formulario
  const resetFormData = () => {
    setFormData({
      name: "",
      description: "",
      fechaInicial: "",
      fechaFinal: "",
      costoEstimado: "",
    });
  };

  // Realiza una solicitud GET al cargar el componente para obtener los proyectos existentes
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/proyectos");
        if (response.status === 200) {
          const data = response.data;
          setProjectsData(data);
        } else {
          // Manejo de errores
          console.log("Error al obtener los proyectos");
        }
      } catch (error) {
        console.log("Error de conexión con el servidor:", error);
      }
    };

    fetchProjects();
  }, []); // Se pasa un array vacío para que solo se ejecute una vez al cargar el componente

  return (
    <div>
      <NavbarTop />
    
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <NavbarLeft />
        </div>
        <div>
        <h2>Crear nuevo proyecto</h2> {/* Título de los proyectos */}
        <br></br>
          <Card style={{ width: "1000px" }}>
            <Button onClick={handleClick} variant="outline-primary">
              Ingresar Datos
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
                  <FloatingLabel label="Nombre" className="mb-3">
                    <Form.Control
                      placeholder="nameProject"
                      type="text"
                      id="name"
                      name="name"
                      value={Nombre}
                      onChange={(event) => setNombre(event.target.value)}
                    />
                  </FloatingLabel>

                  <FloatingLabel label="Descripción Detallada">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      id="description"
                      name="description"
                      value={Descripcion}
                      onChange={(event) => setDesc(event.target.value)}
                    />
                  </FloatingLabel>
                  <br></br>
                  <FloatingLabel label="Fecha de Inicio" className="mb-3">
                    <Form.Control
                      placeholder="fechaInicio"
                      type="date"
                      id="fechaInicial"
                      name="fechaInicial"
                      value={FechaInicio}
                      onChange={(event) => setFechaIni(event.target.value)}
                    />
                  </FloatingLabel>

                  <br></br>
                  <FloatingLabel label="Fecha Final" className="mb-3">
                    <Form.Control
                      placeholder="fechaFinal"
                      type="date"
                      id="fechaFinal"
                      name="fechaFinal"
                      value={FechaFinalizacion}
                      onChange={(event) => setFechaFin(event.target.value)}
                    />
                  </FloatingLabel>

                  <br></br>
                  <FloatingLabel label="Costo Estimado" className="mb-3">
                    <Form.Control
                      placeholder="costoEstimado"
                      type="text"
                      id="costoEstimado"
                      name="costoEstimado"
                      value={CostoEstimado}
                      onChange={(event) => setCosto(event.target.value)}
                    />
                  </FloatingLabel>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={handleCloseModal}
                  >
                    Save Changes
                  </Button>
                </form>
              </div>
            </Modal.Body>
          </Modal>

          {/* Renderizado de proyectos */}
          <h2>Mis proyectos</h2> {/* Título de los proyectos */}
          <br></br>
          {projectsData.map((formData, index) => (
            <div key={index}>
              <Card style={{ width: "700px" }}>
                <Card.Header as="h5">{formData.Nombre}</Card.Header>
                <Card.Body>
                  <div>
                    <div style={{ display: "flex", "flex-direction": "row" }}>
                      <Card.Img
                        variant="top"
                        src="https://cdn-icons-png.flaticon.com/512/3381/3381007.png"
                        style={{ width: "100px" }}
                      />
                      <Card.Text>
                        {formData.Descripcion}
                        <br></br>
                        <span style={{ color: "grey", fontFamily: "Verdana" }}>
                          Monto Estimado: 
                        </span>
                        {formData.CostoEstimado}
                        <br></br>
                        <span style={{ color: "grey", fontFamily: "Verdana" }}>
                          Fecha de Inicio: 
                        </span>
                        {new Date(formData.FechaInicio).toLocaleDateString()}
                        <br></br>
                        <span style={{ color: "grey", fontFamily: "Verdana" }}>
                          Fecha de Finalización: 
                        </span>
                        {new Date(formData.FechaFinalizacion).toLocaleDateString()}
                      </Card.Text>
                    </div>
                  </div>
                  <Button variant="primary" onClick={() => handleEdit(formData._id)}>Editar</Button>
                  <Button variant="secondary" onClick={() => handleDelete(formData._id)}>Eliminar</Button>
                </Card.Body>
              </Card>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
