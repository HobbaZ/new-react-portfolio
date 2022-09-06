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

  const [showEditForm, setShowEditForm] = useState(false)

  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const [colourValue1, setColourValue1] = useState("#000000")
  const [colourValue2, setColourValue2] = useState("#000000")
  const [colourValue3, setColourValue3] = useState("#ffffff")
  const [colourValue4, setColourValue4] = useState("#ffffff")
  const [lightColor, setLightColor] = useState("#000000")
  const [modelColor, setModelColor] = useState("#ffffff")
  const [lightIntensity, setLightIntensity] = useState(0)

  const [roughness, setRoughness] = useState(0)
  const [metalness, setMetalness] = useState(0)

  const [lightPositionx, setLightPositionX] = useState(0)
  const [lightPositiony, setLightPositionY] = useState(0)
  const [lightPositionz, setLightPositionZ] = useState(0)

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

    return (

        <>
        <Container id='about'>
        <CanvasContainer {...{lightColor, modelColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, metalness, roughness}}/>

    {/*Click to show or hide edit form*/ }
    <div className='text-center'>
              <Button className=' btn btn-primary'
              
                    onClick={() => setShowEditForm(!showEditForm)}>
                        {showEditForm ? "Close X" : "Edit Values"}
              </Button>
            </div>
 
              
              {/*Edit form*/}
              {showEditForm && (
                <>
              <EditValuesForm {...{handleCheckboxChange, handleColour1Change, handleColour2Change, colourValue1, colourValue2, 
                handleBackgroundColourChange, colourValue3, handleModelChange, modelColor, handleLightChange, 
                handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, 
                lightPositiony, lightColor, lightIntensity, colourValue4, handleColour4Change, handleLightPositionZChange, lightPositionz, 
                metalness, handleMetalnessChange, roughness, handleRoughnessChange}}/>
                </>
              )}

    <div align="center">
      {iconArray.map((element, index) => (
        <img key={index} src={element} alt="icon" className='icons' style={{ filter: `grayscale(${checkBoxValue? '0%' : '100%'})` }} />
      ))}
    </div>

      <div className='aboutTextBox'>

      <h1>Hi, I'm Zac and I'm a web developer based in inner Sydney</h1>

      <p>I'm a junior full stack web developer now based in the greater Sydney area. I enjoy working on interesting projects</p>
  
    </div>
        </Container>
        </>
    );
};

export default About;