import React, {useState} from 'react';

import { Container, Button } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

import { MeshColour, GrayscaleCheckbox, FontSizeOptions } from '../components/BaseSettings'

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

  //Get mesh box
  const element = document.getElementById("testModel")
  console.log(element)

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
                <label>Disable icon greyscale</label>
                <GrayscaleCheckbox 
                handleChange={handleCheckboxChange}
                />

                <br></br>

                <label>H1 Colour</label>
                <MeshColour
                value= {colourValue1}
                handleChange={handleColour1Change}
                defaultValue= {colourValue1}
                />

                <br></br>

                <label>P Colour</label>
                <MeshColour
                value= {colourValue2}
                handleChange={handleColour2Change}
                defaultValue= {colourValue2}
              />

                <br></br>

                <label>Background Colour</label>
                <MeshColour
                value= {colourValue3}
                handleChange={handleBackgroundColourChange}
                defaultValue= {colourValue3}
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