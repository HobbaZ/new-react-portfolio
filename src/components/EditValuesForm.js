import React from 'react';

import { ColorInput, CheckboxInput, TextInput } from './BaseSettings'

function EditValuesForm ({colourValue4, handleColour4Change, handleCheckboxChange, handleColour1Change, handleColour2Change, colourValue1, colourValue2, 
    handleBackgroundColourChange, colourValue3, handleGradientChange1, handleGradientChange2, 
      gradientColour1, gradientColour2, gradientColour3, gradientColour4, handleGradientChange3, handleGradientChange4,
      backgroundGradientDirection, handleBackgroundGradientDirection, buttonGradientDirection, handleButtonGradientDirection
    }) {

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

  //Get background gradient
  document.body.style = `background: linear-gradient(${backgroundGradientDirection}deg, ${gradientColour1}, ${gradientColour2})`;

  //Get all buttons and change gradient
  const buttons = document.getElementsByTagName("button");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].style = `background: linear-gradient(${buttonGradientDirection}deg, ${gradientColour3}, ${gradientColour4})`;
    
  }

  //get all nav links
  const navLinks = document.getElementsByClassName("nav-link");

  for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].style = `color: ${colourValue4}`
  }

        return (
            <>

                <h1 className='text-center'>Edit Form</h1>
                <form>

                <label>Disable icon greyscale</label>
                <CheckboxInput 
                handleChange={handleCheckboxChange}
                />

                <br />

                <label>H1 Colour</label>
                <ColorInput
                value= {colourValue1}
                handleChange={handleColour1Change}
                defaultValue={colourValue1}
                />

                <br />

                <label>Paragraph Colour</label>
                <ColorInput
                value= {colourValue2}
                handleChange={handleColour2Change}
                defaultValue={colourValue2}
                />

                <br />

                <label>Navigation Link Colour</label>
                <ColorInput
                value= {colourValue4}
                handleChange={handleColour4Change}
                defaultValue={colourValue4}
                />

                <br />

                <label>Background Colour</label>
                <ColorInput
                value= {colourValue3}
                handleChange={handleBackgroundColourChange}
                defaultValue={colourValue3}
                />

                <br />

                <label>Background Gradient</label><br />
                
                <label>Angle</label>
                <TextInput
                value={backgroundGradientDirection}
                handleChange={handleBackgroundGradientDirection}
                />

                <br />

                <label>Colours</label>
                <ColorInput
                value= {gradientColour1}
                handleChange={handleGradientChange1}
                defaultValue={"#ffffff"}
                />

                <ColorInput
                value= {gradientColour2}
                handleChange={handleGradientChange2}
                defaultValue={"#000000"}
                />

                <hr />

                <label>Button Gradient</label><br />

                <label>Angle</label>
                <TextInput
                value={buttonGradientDirection}
                handleChange={handleButtonGradientDirection}
                />

                <br />

                <label>Colours</label>
                <ColorInput
                value= {gradientColour3}
                handleChange={handleGradientChange3}
                defaultValue={"#000000"}
                />

                <ColorInput
                value= {gradientColour4}
                handleChange={handleGradientChange4}
                defaultValue={"#ffffff"}
                />

            </form>
        </>
        )
}

export default EditValuesForm