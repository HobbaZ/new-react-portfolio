import React, { useState, useContext } from "react";
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

  const [modelInputs, setmodelInputs] = useState({
    //model variables
    modelMat:
      JSON.parse(localStorage.getItem("modelMat")) || "meshNormalMaterial",
    modelType: JSON.parse(localStorage.getItem("modelType")) || "cube",
    modelColor: JSON.parse(localStorage.getItem("modelColor")) || "#ff0000",
    specularColor:
      JSON.parse(localStorage.getItem("specularColor")) || "#ffffff",
    roughness: JSON.parse(localStorage.getItem("roughness")) || 0,
    metalness: JSON.parse(localStorage.getItem("metalness")) || 0,
    shininess: JSON.parse(localStorage.getItem("shininess")) || 0,
    wireframe: JSON.parse(localStorage.getItem("wireframe")) || false,

    //Lighting variables
    ambientLightColor:
      JSON.parse(localStorage.getItem("ambientLightColor")) || "#ffffff",
    lightColor: JSON.parse(localStorage.getItem("lightColor")) || "#ffffff",
    lightIntensity: JSON.parse(localStorage.getItem("lightIntensity")) || 50,
    lightPositionx: JSON.parse(localStorage.getItem("lightPositionx")) || 0,
    lightPositiony: JSON.parse(localStorage.getItem("lightPositiony")) || 10,
    lightPositionz: JSON.parse(localStorage.getItem("lightPositionz")) || 0,
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setmodelInputs((previousState) => {
      return { ...previousState, [event.target.name]: value };
    });
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
            I'm a front end web developer based in Sydney, Australia. I
            specialise in 3D and interactive experiences and this site is no
            exception. Customise the colours of this page by by clicking the
            <b style={{ color: `${userInputs.h1Color}` }}>
              {" "}
              Customise Page
            </b>{" "}
            button in the navigation bar. Change up the model by clicking{" "}
            <b style={{ color: `${userInputs.h1Color}` }}>
              {" "}
              Customise Model
            </b>{" "}
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
