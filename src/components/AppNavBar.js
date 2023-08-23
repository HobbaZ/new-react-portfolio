import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import EditValuesForm from "../components/EditValuesForm";
import About from "../pages/About";

function AppNavbar() {
  //edit form
  const [showEditForm, setShowEditForm] = useState(false);

  const [userInputs, setUserInputs] = useState({
    // HTML variables

    //get values from form with localstorage
    greyscale: false,
    h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#FFAD05",
    pColor: JSON.parse(localStorage.getItem("pColor")) || "#ffffff",
    linkColor: JSON.parse(localStorage.getItem("linkColor")) || "#ffffff",
    backgroundGradientAngle:
      JSON.parse(localStorage.getItem("backgroundGradientAngle")) || 0,
    backgroundGradientColor1:
      JSON.parse(localStorage.getItem("backgroundGradientColor1")) || "#07090E",
    backgroundGradientColor2:
      JSON.parse(localStorage.getItem("backgroundGradientColor2")) || "#2A3950",
    buttonGradientAngle:
      JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0,
    buttonGradientColor1:
      JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#ffffff",
    buttonGradientColor2:
      JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#ffffff",
    labelColor: JSON.parse(localStorage.getItem("labelColor")) || "#ffffff",
    buttonTextColor:
      JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff",
  });

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setUserInputs((previousState) => {
      return { ...previousState, [event.target.name]: value };
    });
  };

  useEffect(() => {
    //Get background gradient
    document.body.style = `background: linear-gradient(${userInputs.backgroundGradientAngle}deg, ${userInputs.backgroundGradientColor1}, ${userInputs.backgroundGradientColor2})`;

    //get all nav links
    const navLinks = document.getElementsByClassName("nav-link");

    for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].style = `color: ${userInputs.linkColor}`;
    }

    //get footer
    const footer = document.getElementsByClassName("footerText");
    const footerLinks = document.getElementsByClassName("footerLink");

    for (let index = 0; index < footerLinks.length; index++) {
      footerLinks[index].style = `color: ${userInputs.linkColor}`;
    }

    for (let index = 0; index < footer.length; index++) {
      footer[index].style = `color: ${userInputs.pColor}`;
    }
  }, [userInputs]);

  return (
    <>
      <Nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="navbar-nav"
      >
        <Container fluid>
          <Navbar.Brand>
            <a
              className="nav-link noEffect brand"
              href="#about"
              onClick={() => "about"}
            >
              Zachary Hobba<br></br>
              <div className="subtitle text-center">Web Developer</div>
            </a>
          </Navbar.Brand>

          {/*Navbar collapse and expand */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBarResponsive"
            aria-controls="navBarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fas fa-bars nav-link navIcon"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navBarResponsive">
            <Nav className="navbar-nav ml-auto mb-2 mb-lg-0">
              <a
                href="#about"
                onClick={() => "about"}
                className="nav-link ml-3 my-1"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => "projects"}
                className="nav-link ml-3 my-1"
              >
                Projects
              </a>

              <a
                href="#contactMe"
                onClick={() => "contactMe"}
                className="nav-link ml-3 my-1"
              >
                Contact Me
              </a>

              <div className="html">
                <button
                  className="nav-link ml-3 my-1 noButton"
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  <div style={{ color: `${userInputs.linkColor}` }}>
                    Customise Page
                    {showEditForm ? " x" : "   "}
                  </div>
                </button>
                <div className="form">
                  {/*Edit form*/}
                  {showEditForm && (
                    <>
                      {/*send data to html edit form*/}

                      <EditValuesForm
                        handleChange={handleChange}
                        greyscale={userInputs.greyscale}
                        h1Color={userInputs.h1Color}
                        pColor={userInputs.pColor}
                        linkColor={userInputs.linkColor}
                        backgroundGradientAngle={
                          userInputs.backgroundGradientAngle
                        }
                        backgroundGradientColor1={
                          userInputs.backgroundGradientColor1
                        }
                        backgroundGradientColor2={
                          userInputs.backgroundGradientColor2
                        }
                        buttonGradientAngle={userInputs.buttonGradientAngle}
                        buttonGradientColor1={userInputs.buttonGradientColor1}
                        buttonGradientColor2={userInputs.buttonGradientColor2}
                        labelColor={userInputs.labelColor}
                        buttonTextColor={userInputs.buttonTextColor}
                      />
                    </>
                  )}
                </div>
              </div>
            </Nav>
          </div>
        </Container>
      </Nav>

      {/*Send data to about page*/}
      <About
        handleChange={handleChange}
        h1Color={userInputs.h1Color}
        pColor={userInputs.pColor}
        buttonGradientAngle={userInputs.buttonGradientAngle}
        buttonGradientColor1={userInputs.buttonGradientColor1}
        buttonGradientColor2={userInputs.buttonGradientColor2}
        labelColor={userInputs.labelColor}
        buttonTextColor={userInputs.buttonTextColor}
      />
    </>
  );
}

export default AppNavbar;
