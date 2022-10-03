import React, {useEffect, useState} from 'react';

//import page sections here
import About from './About'
import Projects from './Projects'
import ContactMe from './ContactMe'

function Content() {

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
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setUserInputs(previousState => {
          return {...previousState, [event.target.name]: value}
      })}

      useEffect(() => {
        const greyscale= JSON.parse(localStorage.getItem("greyscale")) || false
        const h1Color= JSON.parse(localStorage.getItem("h1Color")) || "#000000"
        const pColor= JSON.parse(localStorage.getItem("pColor")) || "#000000"
        const linkColor= JSON.parse(localStorage.getItem("linkColor")) || "#000000"
        const backgroundGradientAngle= JSON.parse(localStorage.getItem("backgroundGradientAngle")) || 0
        const backgroundGradientColor1= JSON.parse(localStorage.getItem("backgroundGradientColor1")) || "#ffffff"
        const backgroundGradientColor2= JSON.parse(localStorage.getItem("backgroundGradientColor2")) || "#ffffff"
        const buttonGradientAngle= JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0
        const buttonGradientColor1= JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#000000"
        const buttonGradientColor2= JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#000000"
        const labelColor= JSON.parse(localStorage.getItem("labelColor")) || "#000000"
        const buttonTextColor= JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff"
    
        //model variables
        const modelMat= JSON.parse(localStorage.getItem("modelMat")) || "meshStandardMaterial"
        const modelType= JSON.parse(localStorage.getItem("modelType")) || "cube"
        const modelColor= JSON.parse(localStorage.getItem("modelColor")) || "#ff0000"
        const specularColor= JSON.parse(localStorage.getItem("specularColor")) || "#ffffff"
        const roughness= JSON.parse(localStorage.getItem("roughness")) || 0
        const metalness= JSON.parse(localStorage.getItem("metalness")) || 0
        const shininess= JSON.parse(localStorage.getItem("shininess")) || 0
        const wireframe= JSON.parse(localStorage.getItem("wireframe")) || false
    
        //Lighting variables
        const ambientLightColor= JSON.parse(localStorage.getItem("ambientLightColor")) || "#ffffff"
        const lightColor= JSON.parse(localStorage.getItem("lightColor")) || "#ffffff"
        const lightIntensity= JSON.parse(localStorage.getItem("lightIntensity")) || 50
        const lightPositionx= JSON.parse(localStorage.getItem("lightPositionx")) || 0
        const lightPositiony= JSON.parse(localStorage.getItem("lightPositiony")) || 10
        const lightPositionz= JSON.parse(localStorage.getItem("lightPositionz")) || 0

        setUserInputs({
            greyscale,
            h1Color,
            pColor,
            linkColor,
            backgroundGradientAngle,
            backgroundGradientColor1,
            backgroundGradientColor2,
            buttonGradientAngle,
            buttonGradientColor1,
            buttonGradientColor2,
            buttonTextColor,
            labelColor,

            modelMat,
            modelType,
            modelColor,
            specularColor,
            roughness,
            metalness,
            shininess,
            wireframe,

            ambientLightColor,
            lightColor,
            lightIntensity,
            lightPositionx,
            lightPositiony,
            lightPositionz
        })
      }, [])

    return (
        <>
        <About 
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

        <Projects 
        handleChange= {handleChange}
        h1Color= {userInputs.h1Color}
        pColor = {userInputs.pColor}
        buttonGradientAngle = {userInputs.buttonGradientAngle}
        buttonGradientColor1 = {userInputs.buttonGradientColor1}
        buttonGradientColor2 = {userInputs.buttonGradientColor2}
        labelColor = {userInputs.labelColor}
        buttonTextColor= {userInputs.buttonTextColor}
        />

        <ContactMe 
        handleChange= {handleChange}
        h1Color= {userInputs.h1Color}
        pColor = {userInputs.pColor}
        buttonGradientAngle = {userInputs.buttonGradientAngle}
        buttonGradientColor1 = {userInputs.buttonGradientColor1}
        buttonGradientColor2 = {userInputs.buttonGradientColor2}
        labelColor = {userInputs.labelColor}
        buttonTextColor= {userInputs.buttonTextColor}
        />
        </>
    );
};

export default Content;