import React from 'react';

import { RangeInput, ColorInput, CheckboxInput, TextInput } from './BaseSettings'

function EditValuesForm ({handleCheckboxChange, handleColour1Change, handleColour2Change, colourValue1, colourValue2, 
    handleBackgroundColourChange, colourValue3, handleModelChange, modelColor, handleLightChange, 
    handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, lightPositiony,
     lightColor, lightIntensity, colourValue4, handleColour4Change, lightPositionz, handleLightPositionZChange, roughness,
      handleRoughnessChange, metalness, handleMetalnessChange, handleGradientChange1, handleGradientChange2, 
      gradientColour1, gradientColour2, gradientColour3, gradientColour4, handleGradientChange3, handleGradientChange4,
      backgroundGradientDirection, handleBackgroundGradientDirection, buttonGradientDirection, handleButtonGradientDirection, modelMat, handleModelMatChange,
      specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange
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

  //Populate material options
  function materialOptions() {
    if (modelMat === "meshStandardMaterial") {
      return (
        <>
        <p>The standard mesh material reacts to lights and shadows (and is more expensive to create), metalness and roughness values create a more realistic looking object</p>
        <br />
        <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelChange}
                defaultValue={modelColor}
                />

                <br />

                <label>Model Metalness</label>
                <RangeInput
                value={metalness}
                min={0}
                max={10}
                step={0.01}
                handleChange={handleMetalnessChange}
                defaultValue= {metalness}
                />

                <br />

                <label>Model Roughness</label>
                <RangeInput
                value={roughness}
                min={0}
                max={10}
                step={0.01}
                handleChange={handleRoughnessChange}
                defaultValue= {roughness}
                />
                <hr />
        </>
      )}

    else if (modelMat === "meshBasicMaterial") {
      return (
        <>
        <p>The basic mesh material doesn't react to lights and is flat-shaded, meaning it is cheap to create and best suited for background elements</p>
        <br />
              <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelChange}
                defaultValue={modelColor}
                />
                <hr />
        </>
      )}

    else if (modelMat === "meshPhongMaterial") {
      return (
        <>
        <p>Phong mesh materials are often used to represent glass or glossy surfaces, for example, plastic.</p>
        <br />
              <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelChange}
                defaultValue={modelColor}
                />

              <br />

              <label>Specular Colour</label>
                <ColorInput
                value= {specularColor}
                handleChange={handleSpecularColor}
                defaultValue={specularColor}
                />

              <br />

              <label>Shininess</label>
              <RangeInput
                value={shininess}
                min={0}
                max={100}
                step={0.1}
                handleChange={handleShininessChange}
                defaultValue= {shininess}
                />
                <hr />
        </>
      )}

    else if (modelMat === "meshBasicMaterial") {
      return (
        <>
         <p>The normal mesh material reacts to lights and shadows and will show the geometry normals</p>
        </>
      )}

  }

        return (
            <>

                <h1 className='text-center'>Edit Form</h1>

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

                <hr /> 

                <label>Wireframe</label>
                <CheckboxInput 
                handleChange={handleWireframeMode}
                value={wireframe}
                />

                <br />

                <label>Model Type</label><br />
                <select 
                name="modelType"
                defaultValue={modelType}
                onChange={handleModelTypeChange}
                >
                <option value="cube">Cube</option>
                <option value="sphere">Sphere</option>
                <option value="torus">Torus</option>
                <option value="ring">Ring</option>
                <option value="tube">Tube</option>
                <option value="cone">Cone</option>
                <option value="text">Text</option>
                <option value="custom">Custom</option>
                </select>

                <br />

                <label>Model Material</label><br />
                <select className='formField'
                name="modelMat"
                defaultValue={modelMat}
                onChange={handleModelMatChange}
                >
                <option value="meshStandardMaterial">MeshStandardMaterial</option>
                <option value="meshBasicMaterial">MeshBasicMaterial</option>
                <option value="meshPhongMaterial">MeshPhongMaterial</option>
                <option value="meshToonMaterial">MeshToonMaterial</option>
                <option value="meshNormalMaterial">MeshNormalMaterial</option>
                </select>

                {materialOptions()}

                <br />

                <label>Light Colour</label>
                <ColorInput
                value= {lightColor}
                handleChange={handleLightChange}
                defaultValue={"#ffffff"}
                />

                <br />

                <label>Left/Right Light Position</label>
                <RangeInput
                value={lightPositionx}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionXChange}
                defaultValue= {lightPositionx}
                />

                <br />

                <label>Up/Down Light Position</label>
                <RangeInput
                value={lightPositionz}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionZChange}
                defaultValue= {lightPositionz}
                />

                <br />

                <label>Forward/Back Light Position</label>
                <RangeInput
                value={lightPositiony}
                min={-10}
                max={10}
                step={0.1}
                handleChange={handleLightPositionYChange}
                defaultValue= {lightPositiony}
                />

                <br />

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