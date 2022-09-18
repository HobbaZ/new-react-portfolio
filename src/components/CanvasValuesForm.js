import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

import { RangeInput, ColorInput, CheckboxInput} from './BaseSettings'

function CanvasValuesForm ({ 
    handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, lightPositiony,
     lightColor, handleLightChange, lightIntensity, lightPositionz, handleLightPositionZChange, roughness,
      handleRoughnessChange, metalness, handleMetalnessChange, modelMat, handleModelMatChange,
      specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange, modelColor, handleModelColorChange
    }) {

    //Model submenu form
    const [showModelOptions, setShowModelOptions] = useState(false)

    //lights submenu form
    const [showLightOptions, setShowLightOptions] = useState(false)

      const [filesToUpload, setFilesToUpload] = useState(0)

      const handleFileUpload = (event) => {
        setFilesToUpload(event.target.files[0])
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
                handleChange={handleModelColorChange}
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

                <label>Specular Colour</label>
                <ColorInput
                value= {specularColor}
                handleChange={handleSpecularColor}
                defaultValue={specularColor}
                />
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
                handleChange={handleModelColorChange}
                defaultValue={modelColor}
                />
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
                handleChange={handleModelColorChange}
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
        </>
      )}

      else if (modelMat === "meshToonMaterial") {
        return (
          <>
          <p>Toon mesh materials represent cel shading and makes models look cartoonish</p>
          <br />
                <label>Model Colour</label>
                  <ColorInput
                  value= {modelColor}
                  handleChange={handleModelColorChange}
                  defaultValue={modelColor}
                  />
          </>
        )}
  

    else if (modelMat === "meshBasicMaterial") {
      return (
        <>
         <p>The normal mesh material reacts to lights and shadows and will show the geometry normals with different colours depending on the closeness of the camera, no tweakable effects for this material.</p>
        </>
      )}

      else if (modelMat === "pointsMaterial") {
        return (
          <>
           <p>The points material shows all the vertices of the selected model.</p>

           <br />
              <label>Model Colour</label>
                <ColorInput
                value= {modelColor}
                handleChange={handleModelColorChange}
                defaultValue={modelColor}
                />
          </>
        )}

  }

        return (
            <>
                <form className='modelForm'>
                <h4 className='text-center formSubheading'>Model Edit Options</h4>

                {/*Click to show or hide light options form*/ }
                <div className='text-center'>
                      <Button className=' btn btn-primary'
                      
                            onClick={() => setShowModelOptions(!showModelOptions)}>
                                {showModelOptions ? "Edit Model ^" : "Edit Model ˅"}
                      </Button>
                    </div>

                    {/*Light options*/}
              {showModelOptions && (
                <>

                {/* Might refactor to less model options in the future*/}
                <label>Model Type</label><br />
                <select 
                value={modelType}
                onChange={handleModelTypeChange}
                >
                <option value="cube">Cube</option>
                <option value="sphere">Sphere</option>
                <option value="torus">Torus</option>
                <option value="ring">Ring</option>
                <option value="tube">Tube</option>
                <option value="cone">Cone</option>
                <option value="cylinder">Cylinder</option>
                <option value="torusKnot">Torus Knot</option>
                <option value="dodecahedron">Dodecahedron</option>
                <option value="text">Text</option>

              {/*Upload model to page (not working yet)*/}
                <option value="customModel">Custom Model</option>
                </select>

                {modelType === "customModel" ? 
              <>
              <br />
                <label>Upload Model (.fbx, .glb)</label><br />
                  <input 
                    type="file" 
                    value={filesToUpload}
                    accept='.fbx, .glb' 
                    onChange={handleFileUpload}>
                  </input>
                  <div>
                    <Button className=' btn btn-primary w-25'>Submit</Button>
                  </div>
              </> : null
              }

                <br />

                <label>Model Material</label><br />
                <select
                defaultValue={modelMat}
                onChange={handleModelMatChange}
                >
                <option value="meshStandardMaterial">MeshStandardMaterial</option>
                <option value="meshBasicMaterial">MeshBasicMaterial</option>
                <option value="meshPhongMaterial">MeshPhongMaterial</option>
                <option value="meshToonMaterial">MeshToonMaterial</option>
                <option value="meshNormalMaterial">MeshNormalMaterial</option>
                <option value="pointsMaterial">PointsMaterial</option>
                </select>

                {materialOptions()}

                {/* Show wireframe option for any materials other than points material */}
                {modelMat !== "pointsMaterial" ? 
                      <>
                      <br />
                      <label>Wireframe</label>
                      <CheckboxInput 
                      handleChange={handleWireframeMode}
                      value={wireframe}
                      />
                    </> : null
                }

                </>
              )}

            {/*End of model options */}

            {/*Click to show or hide light options form*/ }
            <div className='text-center'>
                      <Button className=' btn btn-primary'
                      
                            onClick={() => setShowLightOptions(!showLightOptions)}>
                                {showLightOptions ? "Edit Lights ^" : "Edit Lights ˅"}
                      </Button>
                    </div>

                    {/*Light options*/}
              {showLightOptions && (
                <>
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
              )}

              {/*End of light options */}

            </form>
                </>
        )

}

export default CanvasValuesForm