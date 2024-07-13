import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import CanvasContainer from "./threeJS/CanvasContainer";
import { AppContext } from "../components/AppContext";

//import photo from "../images/profile pic cutout.jpg";

let iconArray = [
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bootstrap.svg",
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg",
  "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/javascript.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
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

          <div className="aboutBox p-2">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h2
                  style={{ color: `${userInputs.h1Color}` }}
                  className="title"
                >
                  Hi, I'm Zac
                </h2>
                {/*<p style={{ color: `${userInputs.pColor}` }}>
                Full Stack Web Developer
              </p>
              <p style={{ color: `${userInputs.pColor}` }}>Greater Sydney Area</p>*/}
              </div>
              <div className="col-12 col-lg-6">
                <p style={{ color: `${userInputs.pColor}` }}>
                  I'm a Full stack web developer based in Sydney, Australia. I
                  currently work as a ServiceNow developer and volunteer web
                  developer for non-profits and charities. <br />
                  <br /> My day to day consists of developing user
                  documentation, and implementing web solutions that are both
                  user friendly and aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>

          <div className="m-auto p-2">
            <br />
            <h3 style={{ color: `${userInputs.h1Color}` }}>
              Not an ordinary Portfolio site ...
            </h3>
            <p style={{ color: `${userInputs.pColor}` }}>
              You can customise the colours of this website by clicking the
              <b style={{ color: `${userInputs.h1Color}` }}>
                {" "}
                Customise Page
              </b>{" "}
              button in the navigation bar and customise the spinning model with
              the{" "}
              <b style={{ color: `${userInputs.h1Color}` }}>
                Customise Model
              </b>{" "}
              button, you can also rotate the camera and zoom in/zoom out with
              your mouse. Once you're done playing with my website, feel free to
              check out some of my other projects, shoot me an email, or look at
              my social media links.
            </p>

            <h1
              className="experienceTitle"
              style={{ color: `${userInputs.h1Color}` }}
            >
              Experience
            </h1>

            <table
              className="table table-striped"
              style={{ color: `${userInputs.pColor}` }}
            >
              <tbody>
                <tr>
                  <td>
                    <b>Code.Sydney</b>
                  </td>

                  <td>Volunteer Software Engineer</td>

                  <td>May 2023 - Present</td>
                </tr>

                <tr>
                  <td>
                    <b>The Star Casino</b>
                  </td>

                  <td>ServiceNow Traineeship</td>

                  <td>Oct 2022 - Present</td>
                </tr>

                {/*Span title over three columns */}
                <tr>
                  <td colSpan="3">
                    <br />

                    <h1 style={{ color: `${userInputs.h1Color}` }}>
                      Education
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td>
                    <b>TAFE NSW</b>
                  </td>

                  <td>
                    ICT40120 Certificate IV Information Technology (ServiceNow)
                  </td>

                  <td>October 2022 - Present</td>
                </tr>

                <tr>
                  <td>
                    <b>University of Sydney / Trilogy Education</b>
                  </td>

                  <td>Full Stack Web Developer Bootcamp</td>

                  <td>August 2021 - Feb 2022</td>
                </tr>

                <tr style={{ borderBottom: `1px solid white` }}>
                  <td>
                    <b>TAFE Digital</b>
                  </td>

                  <td>
                    Statement of Attainment in Build your digital literacy with
                    coding
                  </td>

                  <td>August 2020 - Oct 2020</td>
                </tr>
              </tbody>
            </table>
            <br />

            <h1 style={{ color: `${userInputs.h1Color}` }}>Skills</h1>

            <div className="text-center">
              {iconArray.map((element, index) => (
                <img key={index} src={element} alt="icon" className="icons" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
