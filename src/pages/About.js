import React, { useState, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import CanvasContainer from "./threeJS/CanvasContainer";
import { AppContext } from "../components/AppContext";
import { FormButton } from "../components/BaseSettings";
import resume from "../files/Zac_Hobba_web_dev_resume.pdf";

//import photo from "../images/profile pic cutout.jpg";

let iconArray = [
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bootstrap.svg",
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg",
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  // "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
];

function About() {
  //edit form
  const { userInputs } = useContext(AppContext);

  const getStoredValue = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  };

  const [modelInputs, setModelInputs] = useState({
    modelMat: getStoredValue("modelMat", "meshNormalMaterial"),
    modelType: getStoredValue("modelType", "sphere"),
    modelColor: getStoredValue("modelColor", "#ff0000"),
    specularColor: getStoredValue("specularColor", "#ffffff"),
    roughness: getStoredValue("roughness", 0),
    metalness: getStoredValue("metalness", 0),
    shininess: getStoredValue("shininess", 0),
    wireframe: getStoredValue("wireframe", true),

    ambientLightColor: getStoredValue("ambientLightColor", "#ffffff"),
    lightColor: getStoredValue("lightColor", "#ffffff"),
    lightIntensity: getStoredValue("lightIntensity", 50),
    lightPositionx: getStoredValue("lightPositionx", 0),
    lightPositiony: getStoredValue("lightPositiony", 10),
    lightPositionz: getStoredValue("lightPositionz", 0),
  });

  useEffect(() => {
    Object.keys(modelInputs).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(modelInputs[key]));
    });
  }, [modelInputs]);

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setModelInputs((prev) => ({ ...prev, [event.target.name]: value }));
  };

  return (
    <>
      <Container id="about" className="m-auto p-2">
        <div className="content">
          <h2
            style={{ color: `${userInputs.h1Color}` }}
            className="title text-center"
          >
            Hi, I'm Zac
          </h2>

          <p style={{ color: `${userInputs.pColor}` }}>
            I'm a web developer based in Sydney, Australia. I specialise in 3D
            and interactive experiences, customise the colours of this page by
            clicking the
            <b style={{ color: `${userInputs.h1Color}` }}>
              {" "}
              Customise Page
            </b>{" "}
            button in the navigation bar. You can also change the model by
            clicking the{" "}
            <b style={{ color: `${userInputs.h1Color}` }}>
              {" "}
              Customise Model
            </b>{" "}
            button.
          </p>

          <br />

          <div className="text-center">
            <a href={resume} target="blank" rel="noreferrer">
              <FormButton
                className="form-btn-primary col-sm-12 col-md-4 col-lg-3"
                type="button"
                buttonGradientAngle={userInputs.buttonGradientAngle}
                buttonGradientColor1={userInputs.buttonGradientColor1}
                buttonGradientColor2={userInputs.buttonGradientColor2}
                buttonOutlineColor={userInputs.buttonOutlineColor}
                text={<div className="buttonText">Get my Resume</div>}
                colour={userInputs.buttonTextColor}
              ></FormButton>
            </a>
          </div>
          <br />

          {/*send data to three.js canvas model*/}
          <CanvasContainer
            pColor={userInputs.pColor}
            h1Color={userInputs.h1Color}
            labelColor={userInputs.labelColor}
            buttonGradientAngle={userInputs.buttonGradientAngle}
            buttonGradientColor1={userInputs.buttonGradientColor1}
            buttonGradientColor2={userInputs.buttonGradientColor2}
            buttonTextColor={userInputs.buttonTextColor}
            buttonOutlineColor={userInputs.buttonOutlineColor}
            handleChange={handleChange}
            modelMat={modelInputs.modelMat}
            modelType={modelInputs.modelType}
            modelColor={modelInputs.modelColor}
            specularColor={modelInputs.specularColor}
            roughness={modelInputs.roughness}
            metalness={modelInputs.metalness}
            shininess={modelInputs.shininess}
            wireframe={modelInputs.wireframe}
            //light variables
            ambientLightColor={modelInputs.ambientLightColor}
            lightColor={modelInputs.lightColor}
            lightIntensity={modelInputs.lightIntensity}
            lightPositionx={modelInputs.lightPositionx}
            lightPositiony={modelInputs.lightPositiony}
            lightPositionz={modelInputs.lightPositionz}
          />

          {/*<h1 style={{ color: `${userInputs.h1Color}` }}>Skills</h1>

            <div className="text-center">
              {iconArray.map((element, index) => (
                <img key={index} src={element} alt="icon" className="icons" />
              ))}
            </div>*/}
        </div>
      </Container>
    </>
  );
}

export default About;
