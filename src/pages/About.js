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

  //html modifier factors
  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const [colourValue1, setColourValue1] = useState("#000000")
  const [colourValue2, setColourValue2] = useState("#000000")
  const [colourValue3, setColourValue3] = useState("#000000")
  const [colourValue4, setColourValue4] = useState("#000000")
  const [gradientColour1, setGradientColour1] = useState("#ffffff")
  const [gradientColour2, setGradientColour2] = useState("#ffffff")
  const [gradientColour3, setGradientColour3] = useState("#000000")
  const [gradientColour4, setGradientColour4] = useState("#000000")
  const [backgroundGradientDirection, setBackgroundGradientDirection] = useState(0)
  const [buttonGradientDirection, setButtonGradientDirection] = useState(0)

  

  // Model factors
  const [modelMat, setModelMat] = useState("")
  const [modelType, setModelType] = useState("")
  const [modelColor, setModelColor] = useState("#ff0000")
  const [specularColor, setspecularColor] = useState("#000000")
  const [roughness, setRoughness] = useState(0)
  const [metalness, setMetalness] = useState(0)
  const [shininess, setShininess] = useState(0)
  const [wireframe, setWireframe] = useState(false)

  //lighting factors
  const [lightPositionx, setLightPositionX] = useState(0)
  const [lightPositiony, setLightPositionY] = useState(0)
  const [lightPositionz, setLightPositionZ] = useState(10)
  const [lightColor, setLightColor] = useState("#ffffff")
  const [lightIntensity, setLightIntensity] = useState(100)

  const handleCheckboxChange = (event) => {
    setCheckBoxValue(event.target.checked)
  };

  const handleColour1Change = (event) => {
    setColourValue1(event.target.value)
  };

  const handleColour2Change = (event) => {
    setColourValue2(event.target.value)
  };

  const handleColour4Change = (event) => {
    setColourValue4(event.target.value)
  };

  const handleSpecularColor = (event) => {
    setspecularColor(event.target.value)
  };

  const handleLightChange = (event) => {
    setLightColor(event.target.value)
  };

  const handleModelChange = (event) => {
    setModelColor(event.target.value)
  };

  const handleBackgroundColourChange = (event) => {
    setColourValue3(event.target.value)
  };

  const handleLightIntensityChange = (event) => {
    setLightIntensity(event.target.value)
  }

  const handleLightPositionXChange = (event) => {
    setLightPositionX(event.target.value)
  }

  const handleLightPositionYChange = (event) => {
    setLightPositionY(event.target.value)
  }

  const handleLightPositionZChange = (event) => {
    setLightPositionZ(event.target.value)
  }

  const handleRoughnessChange = (event) => {
    setRoughness(event.target.value)
  }

  const handleMetalnessChange = (event) => {
    setMetalness(event.target.value)
  }

  //need handlers for each colour for gradient, can't put all in one handler it won't work

  const handleGradientChange1 = (event) => {
    setGradientColour1(event.target.value)
  }

  const handleGradientChange2 = (event) => {
    setGradientColour2(event.target.value)
  }

  const handleBackgroundGradientDirection = (event) => {
    setBackgroundGradientDirection(event.target.value)
  }

  const handleButtonGradientDirection = (event) => {
    setButtonGradientDirection(event.target.value)
  }

  const handleGradientChange3 = (event) => {
    setGradientColour3(event.target.value)
  }

  const handleGradientChange4 = (event) => {
    setGradientColour4(event.target.value)
  }

  const handleModelMatChange = (event) => {
    setModelMat(event.target.value)
  }

  const handleWireframeMode = (event) => {
    setWireframe(event.target.checked)
  }

  const handleShininessChange = (event) => {
    setShininess(event.target.value)
  }

  const handleModelTypeChange = (event) => {
    setModelType(event.target.value)
  }

    return (

        <>
        <Container id='about'>
        <CanvasContainer {...{handleModelChange, modelColor, handleLightChange, 
                handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, 
                lightPositiony, lightColor, lightIntensity, handleColour4Change, handleLightPositionZChange, lightPositionz, 
                metalness, handleMetalnessChange, roughness, handleRoughnessChange, modelMat, 
                handleModelMatChange, specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange}}/>

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
              <EditValuesForm {...{handleCheckboxChange, handleColour1Change, handleColour2Change, colourValue1, colourValue2, 
                handleBackgroundColourChange, colourValue3, handleModelChange, modelColor, handleLightChange, 
                handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, 
                lightPositiony, lightColor, lightIntensity, colourValue4, handleColour4Change, handleLightPositionZChange, lightPositionz, 
                metalness, handleMetalnessChange, roughness, handleRoughnessChange, handleGradientChange2, handleGradientChange1, 
                gradientColour1, gradientColour2, gradientColour3, gradientColour4, handleGradientChange3, handleGradientChange4, 
                backgroundGradientDirection, handleBackgroundGradientDirection, buttonGradientDirection, handleButtonGradientDirection, modelMat, 
                handleModelMatChange, specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange}}/>
                </>
              )}

    

      <div className='aboutTextBox'>

      <h1>Hi, I'm Zac and I'm a web developer based in inner Sydney</h1>

      <p>I'm a junior full stack web developer based in the greater Sydney area. I enjoy working on interesting projects</p>
  
      <div className="text-center">
      <h2>Skills</h2>
      {iconArray.map((element, index) => (
        <img key={index} src={element} alt="icon" className='icons' style={{ filter: `grayscale(${checkBoxValue? '0%' : '100%'})` }} />
      ))}
    </div>

    </div>
        </Container>
        </>
    );
};

export default About;