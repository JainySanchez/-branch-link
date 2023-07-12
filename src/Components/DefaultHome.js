import homeImage1 from "../Images/homeother1.png";
import homeImage2 from "../Images/homeother2.png";
import { Row, Col } from "react-bootstrap";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";

function DefaultHome() {
  return (
    <div>
      <NavbarTop />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <NavbarLeft />
        </div>
        <div>
          <Row className="my-3 justify-content-center">
            <Col xs={12} md={5} className="text-center">
              <h2 className="display-6">
                Alcanza tus metas profesionales siendo auténtico
              </h2>
              <p className="lead">
                <br />
                Tu aliado en el camino hacia el logro de tus metas
                profesionales, sin importar si estás atravesando una mudanza,
                experimentando un cambio personal o buscando nuevas
                oportunidades.
              </p>
              <p className="lead">
                ¡Sé auténtico y muestra quién eres realmente!
              </p>
            </Col>
            <Col xs={12} md={6} className="text-center">
              <img
                src={homeImage1}
                alt="Home"
                style={{ width: "460px", height: "460px" }}
              />
            </Col>
          </Row>
          <Row className="my-1 justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <img
                src={homeImage2}
                alt="Another"
                style={{ width: "460px", height: "460px" }}
              />
            </Col>
            <Col xs={12} md={5} className="text-center">
              <h2 className="display-6">
                Conéctate con las personas adecuadas para impulsar tu Proyecto
              </h2>
              <p className="lead">
                <br />
                ¡Haz que tu proyecto destaque! Conecta con emprendedores y
                profesionales con ideas similares para crear sinergias y
                alcanzar el éxito juntos. Descubre oportunidades de
                colaboración, intercambia conocimientos y acelera el crecimiento
                de tu negocio.
              </p>
              <p className="lead">
                ¡Únete a nuestra comunidad y encuentra el equipo perfecto para
                hacer realidad tus proyectos!
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DefaultHome;
