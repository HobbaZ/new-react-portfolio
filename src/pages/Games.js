import { React, useState, useContext } from "react";
import { Container, Card } from "react-bootstrap";
import { FormButton } from "../components/BaseSettings";
import { AppContext } from "../components/AppContext";

function Games() {
  const { userInputs } = useContext(AppContext);

  return (
    <>
      <Container id="games" className="m-auto p-0">
        <h1 style={{ color: `${userInputs.h1Color}` }}>Games</h1>

        <div className="d-flex flex-wrap justify-content-left">
          <Card className="col-sm-12 col-md-6 col-lg-4 p-2 border-0">
            <Card.Header>
              <Card.Title style={{ color: `${userInputs.h1Color}` }}>
                Dodge Blocks
              </Card.Title>
            </Card.Header>

            <Card.Body>
              <Card.Text style={{ color: `${userInputs.pColor}` }}>
                Dodge the blocks
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="text-center">
                <a
                  href="/games/dodge-blocks"
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`If clicked this game will open in a new window`}
                >
                  <FormButton
                    className="form-btn-primary"
                    buttonGradientAngle={userInputs.buttonGradientAngle}
                    buttonGradientColor1={userInputs.buttonGradientColor1}
                    buttonGradientColor2={userInputs.buttonGradientColor2}
                    buttonOutlineColor={userInputs.buttonOutlineColor}
                    text={<div className="buttonText">Play</div>}
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

export default Games;
