import React, { useContext, useState } from "react";
import { Nav, Container } from "react-bootstrap";
import EditValuesForm from "../components/EditValuesForm";
import { AppContext } from "./AppContext";

function AppNavbar() {
  const { userInputs, handleChange } = useContext(AppContext);
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <Nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="navbar-nav"
      >
        <Container fluid>
          <a
            className="nav-link noEffect"
            href="/"
            style={{ color: `${userInputs.linkColor}` }}
            onClick={() => "about"}
          >
            Zachary Hobba
          </a>

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
                href="/"
                onClick={() => "about"}
                className="nav-link ml-3 my-1"
                style={{ color: `${userInputs.linkColor}` }}
              >
                About
              </a>

              <a
                href="/#services"
                onClick={() => "services"}
                className="nav-link ml-3 my-1"
                style={{ color: `${userInputs.linkColor}` }}
              >
                Services
              </a>

              <a
                href="/#projects"
                onClick={() => "projects"}
                className="nav-link ml-3 my-1"
                style={{ color: `${userInputs.linkColor}` }}
              >
                Projects
              </a>

              {/*<a
                href="/affiliate-links"
                onClick={() => "affiliate"}
                className="nav-link ml-3 my-1"
                style={{ color: `${userInputs.linkColor}` }}
              >
                Affiliate Links
              </a>*/}

              <div>
                <button
                  type="button"
                  className="nav-link ml-3 my-1 noButton"
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  <div style={{ color: `${userInputs.linkColor}` }}>
                    Customise Page
                    {showEditForm ? " x" : "   "}
                  </div>
                </button>
                <div className="form">
                  {showEditForm && (
                    <EditValuesForm
                      handleChange={handleChange}
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
                      buttonOutlineColor={userInputs.buttonOutlineColor}
                    />
                  )}
                </div>
              </div>
            </Nav>
          </div>
        </Container>
      </Nav>
    </>
  );
}

export default AppNavbar;
