import React, {useState} from 'react';

import { Container, Button } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

import EditValuesForm from '../components/EditValuesForm'

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
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" ,
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg"
];

function About() {

  //edit form
  const [showEditForm, setShowEditForm] = useState(false)

  const [userInputs, setUserInputs] = useState({
    
    // HTML variables
    greyscale: false,
    h1Color: "#000000",
    pColor: "#000000",
    linkColor: "#000000",
    backgroundGradientAngle: 0,
    backgroundGradientColor1: "#ffffff",
    backgroundGradientColor2: "#ffffff",
    buttonGradientAngle: 0,
    buttonGradientColor1: "#000000",
    buttonGradientColor2: "#000000",

    //model variables
    modelMat: "",
    modelType: "",
    modelColor: "#ff0000",
    specularColor: "#ffffff",
    roughness: 0,
    metalness: 0,
    shininess: 0,
    wireframe: false,

    //Lighting variables
    lightColor: "#ffffff",
    lightIntensity: 100,
    lightPositionx: 0,
    lightPositiony: 0,
    lightPositionz: 10
  })

  const handleChange = (event) => {
    //const value = event.target.value
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInputs({...userInputs, 
      [event.target.name]: value })
  }

    return (

        <>
        <Container id='about'>
          {/*send data to three.js canvas model*/}
        <CanvasContainer 
        handleChange= {handleChange}
        modelMat= {userInputs.modelMat}
        modelType= {userInputs.modelType}
        modelColor= {userInputs.modelColor}
        specularColor= {userInputs.specularColor}
        roughness= {userInputs.roughness}
        metalness= {userInputs.metalness}
        shininess= {userInputs.shininess}
        wireframe= {userInputs.wireframe}

        //light variables
        lightColor= {userInputs.lightColor}
        lightIntensity= {userInputs.lightIntensity}
        lightPositionx= {userInputs.lightPositionx}
        lightPositiony= {userInputs.lightPositiony}
        lightPositionz= {userInputs.lightPositionz}
        />

    {/*Click to show or hide edit form*/ }
    <div className='text-center'>
              <Button className=' btn btn-primary w-25'
              
                    onClick={() => setShowEditForm(!showEditForm)}>
                        {showEditForm ? "HTML Options ^" : "HTML Options ˅"}
              </Button>
            </div>
 
              
              {/*Edit form*/}
              {showEditForm && (
                <>

              <EditValuesForm 
              handleChange= {handleChange} 
              greyscale = {userInputs.greyscale}
              h1Color= {userInputs.h1Color}
              pColor = {userInputs.pColor}
              linkColor = {userInputs.linkColor}
              backgroundGradientAngle = {userInputs.backgroundGradientAngle}
              backgroundGradientColor1 = {userInputs.backgroundGradientColor1}
              backgroundGradientColor2 = {userInputs.backgroundGradientColor2}
              buttonGradientAngle = {userInputs.buttonGradientAngle}
              buttonGradientColor1 = {userInputs.buttonGradientColor1}
              buttonGradientColor2 = {userInputs.buttonGradientColor2}
              />
                </>
              )}

      <div className='aboutTextBox'>

      <h1>Hi, I'm Zac and I'm a web developer based in inner Sydney</h1>

      <p>I'm a junior full stack web developer based in the greater Sydney area. I enjoy working on interesting projects</p>
  
      <div className="text-center">
      <h2>Skills</h2>
      {iconArray.map((element, index) => (
        <img key={index} src={element} alt="icon" className='icons' style={{ filter: `grayscale(${userInputs.greyscale? '0%' : '100%'})` }} />
      ))}
    </div>

    </div>
        </Container>
        </>
    );
};

export default About;