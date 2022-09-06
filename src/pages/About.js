import React, {useState} from 'react';

import { Container, Button } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

import { RangeInput, ColorInput, CheckboxInput } from '../components/BaseSettings'

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
  const [lightColor, setLightColor] = useState("#000000")
  const [modelColor, setModelColor] = useState("#ffffff")
  const [lightIntensity, setLightIntensity] = useState(0)

  const handleCheckboxChange = (event) => {
    setCheckBoxValue(event.target.checked)
  };

  const handleColour1Change = (event) => {
    setColourValue1(event.target.value)
  };

  const handleColour2Change = (event) => {
    setColourValue2(event.target.value)
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

  //get all h1s
  const headings = document.getElementsByTagName("h1");

  for (let index = 0; index < headings.length; index++) {
    headings[index].style = `color: ${colourValue1}`
  }

  //get all paragraphs
  const paragraphs = document.getElementsByTagName("p");

  for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].style = `color: ${colourValue2}`
  }

  //Get background colour
  document.body.style = `background: ${colourValue3}`

  //get all nav links
  const navLinks = document.getElementsByClassName("navLink");

  for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].style = `color: ${colourValue2}`
  }

  //Get mesh box
  //const canvasContainer = document.getElementById("canvasContainer")

    return (

        <>
        <Container id='about'>
        <CanvasContainer {...{lightColor, modelColor, lightIntensity}}/>

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
                <h1 className='text-center'>Edit Form</h1>
                <label>Disable icon greyscale</label>
                <CheckboxInput 
                handleChange={handleCheckboxChange}
                />

                <br></br>

                <label>H1 Colour</label>
                <ColorInput
                value= {colourValue1}
                handleChange={handleColour1Change}
                defaultValue= {colourValue1}
                />

                <br></br>

                <label>Paragrapgh Colour</label>
                <ColorInput
                value= {colourValue2}
                handleChange={handleColour2Change}
                defaultValue= {colourValue2}
                />

                <label>Navigation Link Colour</label>
                <ColorInput
                value= {colourValue2}
                handleChange={handleColour2Change}
                defaultValue= {colourValue2}
                />

                <br></br>

                <label>Background Colour</label>
                <ColorInput
                value= {colourValue3}
                handleChange={handleBackgroundColourChange}
                defaultValue= {colourValue3}
                />

                <br></br>

                <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelChange}
                defaultValue= {modelColor}
                />

                <br></br>

                <label>Light Colour</label>
                <ColorInput
                value= {lightColor}
                handleChange={handleLightChange}
                defaultValue= {lightColor}
                />

                <br></br>

                <label>Light Intensity</label>
                <RangeInput
                value= {lightIntensity}
                min={0}
                max={100}
                step={0.1}
                handleChange={handleLightIntensityChange}
                defaultValue= {lightIntensity}
                />
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