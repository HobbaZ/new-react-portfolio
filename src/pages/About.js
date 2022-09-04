import React, {useState, useEffect} from 'react';

import { Container, Button } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

import {H1, P, MeshColour, GrayscaleCheckbox} from '../components/BaseSettings'

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
  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const [colourValue1, setColourValue1] = useState("#000")
  const [colourValue2, setColourValue2] = useState("#000")
  const [colourValue3, setColourValue3] = useState("#ffffff")

  const [showEditForm, setShowEditForm] = useState(false)

  /*useEffect(() => {
    function getContrast () {
      handleColour2Change()
    }
    getContrast()
  },[])*/

  /*function getContrast() {
    //code from https://stackoverflow.com/questions/58184508/html5-input-type-color-read-single-rgb-values
      const color = colourValue3
      const r = parseInt(color.substring(1,2), 16)
      const g = parseInt(color.substring(3,2), 16)
      const b = parseInt(color.substring(5,2), 16)
      var yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 160) ? 'black' : 'white';
    }*/


  const handleCheckboxChange = (event) => {
    setCheckBoxValue(event.target.checked)
  };

  const handleColour1Change = (event) => {
    setColourValue1(event.target.value)
  };

  const handleColour2Change = (event) => {
    setColourValue2(event.target.value)
  };

  const handleBackgroundColourChange = (event) => {
    setColourValue3(event.target.value)
  };

  

    return (

        <>
        <Container id='about'>
        <CanvasContainer />

    {/*Click to show or hide edit form*/ }
    <div className='text-center'>
              <Button className=' btn btn-primary'
                    onClick={() => setShowEditForm(!showEditForm)}>
                        Edit Values
              </Button>
            </div>
 

              {showEditForm && (
                <>
                <GrayscaleCheckbox 
                handleChange={handleCheckboxChange}
                />

                <br></br>

                <label>H1 Colour</label>
                <MeshColour
                value= {colourValue1}
                handleChange={handleColour1Change}
                />

                <br></br>

                <label>P Colour</label>
                <MeshColour
                value= {colourValue2}
                handleChange={handleColour2Change}
                />

                <br></br>

                <label>Background Colour</label>
                <MeshColour
                value= {colourValue3}
                handleChange={handleBackgroundColourChange}
                />

                </>
              )}

    <div align="center">
      {iconArray.map((element, index) => (
        <img key={index} src={element} alt="icon" className='icons' style={{ filter: `grayscale(${checkBoxValue? '0%' : '100%'})` }} />
      ))}
    </div>

      <div className='aboutTextBox'>

        {/*Accessing the background colour value directly in ghost div, not the way its supposed to be done but it works*/}
        <div style={{ display: 'none' }}>{document.body.style = `background: ${colourValue3}`}</div>

      <H1 
      text= {`Hi, I'm Zac and I'm a web developer based in inner Sydney, color is ${colourValue1}`}
      colourValue1={colourValue1}
       />
      
      <P 
      text = {`I'm a junior full stack web developer now based in the greater Sydney area. I enjoy working on interesting projects, color is ${colourValue2}`}
      colourValue2={colourValue2}
       />
      
    </div>
        </Container>
        </>
    );
};

export default About;