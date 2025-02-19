import React, { useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { FormButton } from "../components/BaseSettings";
import jobsite from "../images/filter.png";
import worthlyPic from "../images/worthly.png";
import prisonersAid from "../images/prisonersAid.png";
import mayfield from "../images/mayfield.png";
import { AppContext } from "../components/AppContext";
import Services from "./Services";

function Projects() {
  const { userInputs } = useContext(AppContext);

  return (
    <Container id="projects" className="mx-auto">
      <h1 style={{ color: `${userInputs.h1Color}` }}>Projects</h1>
      <div className="row">
        <Card className="col-sm-12 col-md-6 col-lg-3 p-1 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Prisoners Aid (ACT) Website Revamp
            </Card.Title>
            <img
              className="card-img-top projectImage"
              src={prisonersAid}
              alt=""
            />
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Prisoners Aid has been operating as a community organisation in
              Canberra since 1963. I assisted with updating stylistic aspects of
              the website and uploading forms to the website.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <a
                href="https://www.paact.org.au/"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://www.paact.org.au/`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fas fa-globe"></i> Website
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
          </Card.Footer>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 p-1 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Mayfield Vineyard Supplier Map
            </Card.Title>
            <img className="card-img-top projectImage" src={mayfield} alt="" />
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Developed a custom Google Maps supplier map for Mayfield Vineyard
              in Orange, NSW.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <a
                href="https://mayfield-vineyard-roadmap.vercel.app/"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://mayfield-vineyard-roadmap.vercel.app/`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fas fa-globe"></i> Website
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
          </Card.Footer>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 p-1 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Worthly
            </Card.Title>
            <img
              className="card-img-top projectImage"
              src={worthlyPic}
              alt=""
            />
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Keeping track of your interesting and collectable things can be a
              challenge. Worthly allows you to search for your item and see the
              average sale price.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <a
                href="https://github.com/HobbaZ/Worthly"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://github.com/HobbaZ/Worthly`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fab fa-github"></i> GitHub
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
            <br />
            <div className="text-center">
              <a
                href="https://worthly.herokuapp.com"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://worthly.herokuapp.com`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fas fa-globe"></i> Website
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
          </Card.Footer>
        </Card>

        <Card className="col-sm-12 col-md-6 col-lg-3 p-1 border-0">
          <Card.Header>
            <Card.Title style={{ color: `${userInputs.h1Color}` }}>
              Job Site
            </Card.Title>
            <img className="card-img-top projectImage" src={jobsite} alt="" />
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ color: `${userInputs.pColor}` }}>
              Keeping track of your interesting and collectable things can be a
              challenge. Worthly allows you to search for your item and see the
              average sale price.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="text-center">
              <a
                href="https://github.com/HobbaZ/job_search_website"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://github.com/HobbaZ/job_search_website`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fab fa-github"></i> GitHub
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
            <br />
            <div className="text-center">
              <a
                href="https://hobbaz.github.io/job_search_website/"
                rel="noreferrer"
                target="_blank"
                aria-label={`If clicked this will open to https://hobbaz.github.io/job_search_website/`}
              >
                <FormButton
                  className="form-btn-primary"
                  type="button"
                  buttonGradientAngle={userInputs.buttonGradientAngle}
                  buttonGradientColor1={userInputs.buttonGradientColor1}
                  buttonGradientColor2={userInputs.buttonGradientColor2}
                  buttonOutlineColor={userInputs.buttonOutlineColor}
                  text={
                    <div className="buttonText">
                      <i className="fas fa-globe"></i> Website
                    </div>
                  }
                  colour={userInputs.buttonTextColor}
                ></FormButton>
              </a>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
}

export default Projects;
