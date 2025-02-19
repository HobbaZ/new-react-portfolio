import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { AppContext } from "../components/AppContext";

function Services() {
  const { userInputs } = useContext(AppContext);

  return (
    <>
      <Container id="services" className="m-auto p-0">
        <h1 style={{ color: `${userInputs.h1Color}` }}>Services</h1>

        <div className="d-flex flex-wrap justify-content-left">
          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                <i className="servicesIcon fas fa-code mr-1"></i> Website
                Development
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                I offer tailor-made web development solutions that meet your
                unique business needs. From concept to launch, I ensure your
                website is both visually appealing and technically sound.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                <i className="servicesIcon fas fa-layer-group mr-1"></i> Website
                Design
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                I create visually appealing and user-friendly designs. I ensure
                that your website not only looks great but also provides an
                exceptional user experience.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                <i className="servicesIcon fas fa-circle-check mr-1"></i>{" "}
                Website Deployment
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                I handle domain name registration and renewal, and rigourously
                test sites over different browsers for bugs and performance
                issues.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Services;
