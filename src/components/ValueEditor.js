import React, {useState} from 'react';

import { Container } from 'react-bootstrap';

import GrayscaleCheckbox from './editable-Components/GrayscaleCheckbox'

import MeshColour from './editable-Components/MeshColour'

function ValueEditor() {

  const [checkBoxValue, setCheckBoxValue] = useState(false)
  const [colourValue, setColourValue] = useState("#000000")

  const handleCheckboxChange = (event) => {
    setCheckBoxValue(event.target.checked)
    console.log(event.target.checked)
  };

  const handleColourChange = (event) => {
    setColourValue(event.target.value)
    console.log(event.target.value)
  };

      return (
        <>
        <Container id='valueEditor'>

        
          <form className="form">

          <GrayscaleCheckbox 
                handleChange={handleCheckboxChange}
                value={checkBoxValue}
                />

                <br></br>

                <MeshColour
                value={colourValue}
                handleChange={handleColourChange}
                />

        </form>
        </Container>
        </>
      )
}

export default ValueEditor