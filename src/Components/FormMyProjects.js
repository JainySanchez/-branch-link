import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function FormMyProjects() {

  // Estado para almacenar los datos de los proyectos
  const [projectsData, setProjectsData] = useState([]);

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
    
    <div style={{width: "100%" }}>
      <h2>Proyectos disponibles</h2> {/* Título de los proyectos */}
      <br></br>
      {/* Renderizado de proyectos */}
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
                    {/* <Card.Text>{formData.CostoEstimado}</Card.Text> */}
                  </div>
                </div>
                <Button variant="primary">Ingresar</Button>
              </Card.Body>
            </Card>
            <br></br>
          </div>
        ))}
      <br></br>
    </div>
  );
}

export default FormMyProjects;
