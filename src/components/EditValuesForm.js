import React from 'react';

import { RangeInput, ColorInput, CheckboxInput } from './BaseSettings'

function EditValuesForm ({handleCheckboxChange, handleColour1Change, handleColour2Change, colourValue1, colourValue2, 
    handleBackgroundColourChange, colourValue3, handleModelChange, modelColor, handleLightChange, 
    handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, lightPositiony,
     lightColor, lightIntensity, colourValue4, handleColour4Change, lightPositionz, handleLightPositionZChange, roughness,
      handleRoughnessChange, metalness, handleMetalnessChange, handleGradientChange1, handleGradientChange2, 
      gradientColour1, gradientColour2, gradientColour3, gradientColour4, handleGradientChange3, handleGradientChange4}) {

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
  document.body.style = `background: linear-gradient(${gradientColour1}, ${gradientColour2})`;

  //Get all buttons and change gradient
  const buttons = document.getElementsByTagName("button");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].style = `background: linear-gradient(${gradientColour3}, ${gradientColour4})`;
    
  }

  //get all nav links
  const navLinks = document.getElementsByClassName("nav-link");

  for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].style = `color: ${colourValue4}`
  }

        return (
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
                defaultValue={colourValue1}
                />

                <br></br>

                <label>Paragrapgh Colour</label>
                <ColorInput
                value= {colourValue2}
                handleChange={handleColour2Change}
                defaultValue={colourValue2}
                />

                <br></br>

                <label>Navigation Link Colour</label>
                <ColorInput
                value= {colourValue4}
                handleChange={handleColour4Change}
                defaultValue={colourValue4}
                />

                <br></br>

                <label>Background Colour</label>
                <ColorInput
                value= {colourValue3}
                handleChange={handleBackgroundColourChange}
                defaultValue={colourValue3}
                />

                <br></br>

                <label>Background Gradient</label>
                <ColorInput
                value= {gradientColour1}
                handleChange={handleGradientChange1}
                defaultValue={"#ffffff"}
                />

                <ColorInput
                value= {gradientColour2}
                handleChange={handleGradientChange2}
                defaultValue={"#ffffff"}
                />

                <label>Button Gradient</label>
                <ColorInput
                value= {gradientColour3}
                handleChange={handleGradientChange3}
                defaultValue={"#ffffff"}
                />

                <ColorInput
                value= {gradientColour4}
                handleChange={handleGradientChange4}
                defaultValue={"#ffffff"}
                />

                <br></br>

                <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelChange}
                defaultValue={modelColor}
                />

                <br></br>

                <label>Model Metalness</label>
                <RangeInput
                value={metalness}
                min={0}
                max={10}
                step={0.01}
                handleChange={handleMetalnessChange}
                defaultValue= {metalness}
                />

                <br></br>

                <label>Model Roughness</label>
                <RangeInput
                value={roughness}
                min={0}
                max={10}
                step={0.01}
                handleChange={handleRoughnessChange}
                defaultValue= {roughness}
                />

                <br></br>

                <label>Light Colour</label>
                <ColorInput
                value= {lightColor}
                handleChange={handleLightChange}
                defaultValue={"#ffffff"}
                />

                <br></br>

                <label>Left/Right Light Position</label>
                <RangeInput
                value={lightPositionx}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionXChange}
                defaultValue= {lightPositionx}
                />

                <br></br>

                <label>Up/Down Light Position</label>
                <RangeInput
                value={lightPositionz}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionZChange}
                defaultValue= {lightPositionz}
                />

                <br></br>

                <label>Forward/Back Light Position</label>
                <RangeInput
                value={lightPositiony}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionYChange}
                defaultValue= {lightPositiony}
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
        )

}

export default EditValuesForm