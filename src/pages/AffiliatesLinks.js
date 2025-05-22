import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { AppContext } from "../components/AppContext";
import { FormButton } from "../components/BaseSettings";
import crocs from "../images/crocs-amazon-sale.png";
import lego1 from "../images/lego1.jpg";

function Affiliates() {
  const { userInputs } = useContext(AppContext);

  return (
    <>
      <Container id="services" className="m-auto p-0">
        <h1 style={{ color: `${userInputs.h1Color}` }}>Affiliate Links</h1>

        <div className="d-flex flex-wrap justify-content-left">
          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Lego Icons 10330 Ayrton Senna McLaren MP4/4
              </Card.Title>
              <img className="card-img-top projectImage" src={lego1} alt="" />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                This 693 piece tribute to F1 legend Ayrton Senna and the iconic
                McLaren MP4/4 is a must-have for racing fans and LEGO lovers
                alike. It makes an incredible desk piece and is currently 26%
                off, click the link to grab one for yourself.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amazon.to/4jX8zs6"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Lego Icons 10330 Ayrton Senna McLaren MP4/4 Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>

          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Crocs
              </Card.Title>
              <img className="card-img-top projectImage" src={crocs} alt="" />
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                Insanely comfy, always quirky, and questionably stylish, Crocs
                are the treat your feet deserve. Select styles are up to 50%
                off. Click the link to grab a pair!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="https://amzn.to/43souaQ"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Opens Crocs Amazon product page in a new tab"
                >
                  <FormButton
                    className="form-btn-primary"
                    type="button"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Buy on Amazon</div>}
                    colour={userInputs.buttonTextColor}
                  ></FormButton>
                </a>
              </div>
            </Card.Footer>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Affiliates;
