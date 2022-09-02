import React, {useState} from 'react';

import { Container, Button } from 'react-bootstrap';

import CanvasContainer from './threeJS/CanvasContainer';

import GrayscaleCheckbox from '../components/editable-Components/GrayscaleCheckbox'

import MeshColour from '../components/editable-Components/MeshColour'

import ValueEditor from '../components/ValueEditor'

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
  const [colourValue, setColourValue] = useState("#000000")

  const [showEditForm, setShowEditForm] = useState(false)

  const handleCheckboxChange = (event) => {
    setCheckBoxValue(event.target.checked)
  };

  const handleColourChange = (event) => {
    setColourValue(event.target.value)
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

                <label>Heading Colour</label>
                <MeshColour
                value={colourValue}
                handleChange={handleColourChange}
                />

                </>
              )}


    <div align="center">
      {iconArray.map((element, index) => (
        <img key={index} src={element} alt="icon" className='icons' style={{ filter: `grayscale(${checkBoxValue? '0%' : '100%'})` }} />
      ))}
    </div>

      <div className='aboutTextBox'>
        <section>
      <h1 style={{ color: `${colourValue}`}}>
      Hi, I'm Zac and I'm a web developer based in inner Sydney
      </h1>
      
      <br></br>
      
      <br></br>
      
      <p className="aboutMeDesc">
      I'm a junior full stack web developer now based in the greater Sydney area. I enjoy working on interesting projects, whether that's refactoring a code base to make it simpler and faster, 
      implementing that new feature or turning an idea into a working app or website, I'm up for the challenge. <br></br><br></br> Check out some more of my projects <a href='https://github.com/HobbaZ'>here</a> or check out my <a href='https://www.linkedin.com/in/zachary-hobba-52aaa182/'>LinkedIn</a> if you want to have a chat.
      </p>
      </section>
    </div>
        </Container>
        </>
    );
};

export default About;