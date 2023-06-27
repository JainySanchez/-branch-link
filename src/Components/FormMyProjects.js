import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FormMyProjects() {
  return (
    
    <div style={{width: "100%" }}>
      <Card>
        <Card.Header as="h5">Project 127681 1</Card.Header>
        <Card.Body>
          <div>
            <Card.Title>Backend Developer</Card.Title>
            <div style={{ display: "flex", "flex-direction": "row", width: "100%" }}>
              <Card.Img
                variant="top"
                src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png"
                style={{ width: "20%" }}
              />
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </div>
          </div>
          <Button variant="primary">Detalles</Button>
        </Card.Body>
      </Card>
      <br></br>
      <Card>
        <Card.Header as="h5">Project 127681 2</Card.Header>
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
        <Card.Header as="h5">Project 127681 3</Card.Header>
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

export default FormMyProjects;
