import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ImgLogo from '../Images/logo-remove.png'
import DropdownImage from '../Images/profile.png';
function NavbarTop() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src = {ImgLogo} alt = 'BranchLink Img' width="40%" height="auto"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex" style={{width: "50%" }}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="secondary" className="btn btn-primary">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <NavDropdown
                    title={<img src={DropdownImage} alt="Dropdown" style={{ width: "40px", height: "40px" }} />}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    style={{ backgroundColor: "#212529", color: "#f8f9fa"}}
                  >
                    <div className="dropdown">
                      <NavDropdown.Item href="/Profile">
                        Perfil
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Ajustes
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/">
                        Salir
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarTop;