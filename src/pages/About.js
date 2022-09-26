import React, {useEffect, useState} from 'react';

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

    //get values from form with localstorage
    greyscale: JSON.parse(localStorage.getItem("greyscale")) || false,
    h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#000000",
    pColor: JSON.parse(localStorage.getItem("pColor")) || "#000000",
    linkColor: JSON.parse(localStorage.getItem("linkColor")) || "#000000",
    backgroundGradientAngle: JSON.parse(localStorage.getItem("backgroundGradientAngle")) || 0,
    backgroundGradientColor1: JSON.parse(localStorage.getItem("backgroundGradientColor1")) || "#ffffff",
    backgroundGradientColor2: JSON.parse(localStorage.getItem("backgroundGradientColor2")) || "#ffffff",
    buttonGradientAngle: JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0,
    buttonGradientColor1: JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#000000",
    buttonGradientColor2: JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#000000",
    labelColor: JSON.parse(localStorage.getItem("labelColor")) || "#000000",
    buttonTextColor: JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff",

    //model variables
    modelMat: JSON.parse(localStorage.getItem("modelMat")) || "meshStandardMaterial",
    modelType: JSON.parse(localStorage.getItem("modelType")) || "cube",
    modelColor: JSON.parse(localStorage.getItem("modelColor")) || "#ff0000",
    specularColor: JSON.parse(localStorage.getItem("specularColor")) || "#ffffff",
    roughness: JSON.parse(localStorage.getItem("roughness")) || 0,
    metalness: JSON.parse(localStorage.getItem("metalness")) || 0,
    shininess: JSON.parse(localStorage.getItem("shininess")) || 0,
    wireframe: JSON.parse(localStorage.getItem("wireframe")) || false,

    //Lighting variables
    ambientLightColor: JSON.parse(localStorage.getItem("ambientLightColor")) || "#ffffff",
    lightColor: JSON.parse(localStorage.getItem("lightColor")) || "#ffffff",
    lightIntensity: JSON.parse(localStorage.getItem("lightIntensity")) || 50,
    lightPositionx: JSON.parse(localStorage.getItem("lightPositionx")) || 0,
    lightPositiony: JSON.parse(localStorage.getItem("lightPositiony")) || 10,
    lightPositionz: JSON.parse(localStorage.getItem("lightPositionz")) || 0
  })

  const handleChange = (event) => {
    //const value = event.target.value
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setUserInputs({...userInputs, 
      [event.target.name]: value })
  }

    //get all headings
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5");

    for (let index = 0; index < headings.length; index++) {
      headings[index].style = `color: ${userInputs.h1Color}`
    }
  
    //get all paragraphs and footer
    const paragraphs = document.querySelectorAll("p, a");
  
    for (let index = 0; index < paragraphs.length; index++) {
      paragraphs[index].style = `color: ${userInputs.pColor}`
    }

    //get all cards
    const cardBorders = document.getElementsByClassName("card");
  
    for (let index = 0; index < cardBorders.length; index++) {
      cardBorders[index].style = `border: 1px solid ${userInputs.pColor}`
    }

    //get all labels
    const labels = document.querySelectorAll("label");
  
    for (let index = 0; index < labels.length; index++) {
      labels[index].style = `color: ${userInputs.labelColor}`
    }

    //set nav bar background color
    /*const navBar = document.getElementById("navbar-nav");
    navBar.style = `background: ${userInputs.backgroundGradientColor2}`*/
  
    //set model form background color
    /*const modelForm = document.getElementById("modelForm");
    modelForm.style = `background: ${backgroundGradientColor2}`*/
  
    //Get background gradient
    document.body.style = `background: linear-gradient(${userInputs.backgroundGradientAngle}deg, ${userInputs.backgroundGradientColor1}, ${userInputs.backgroundGradientColor2})`;
  
    //Get all buttons and change gradient
    const buttons = document.querySelectorAll("button");
  
    for (let index = 0; index < buttons.length; index++) {
      buttons[index].style = `background: linear-gradient(${userInputs.buttonGradientAngle}deg, ${userInputs.buttonGradientColor1}, ${userInputs.buttonGradientColor2}`;
    }

    //Get all button text change color
    const buttonText = document.getElementsByClassName("buttonText");

    for (let index = 0; index < buttonText.length; index++) {
      buttonText[index].style = `color: ${userInputs.buttonTextColor}`;
      
    }
  
    //get all nav links
    const navLinks = document.getElementsByClassName("nav-link");
  
    for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].style = `color: ${userInputs.linkColor}`
    }

  // useEffect?
  
  /*useEffect(() => {
    userInputs.greyscale = JSON.parse(localStorage.getItem("greyscale"))
    userInputs.h1Color = JSON.parse(localStorage.getItem("h1Color"))
  })*/

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
        ambientLightColor = {userInputs.ambientLightColor}
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
                        <div className="buttonText">Edit HTML Values {showEditForm ? "^" : "˅"}</div>
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
              labelColor = {userInputs.labelColor}
              buttonTextColor= {userInputs.buttonTextColor}
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