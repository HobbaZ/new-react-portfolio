import React, { useState } from 'react';

import { Button } from 'react-bootstrap';

function CanvasValuesForm ({
  // data from canvas Container
    handleChange, 
    lightPositionx, 
    lightPositiony,
    lightColor, 
    lightIntensity, 
    lightPositionz, 
    roughness, 
    metalness, 
    modelMat,
    specularColor, 
    wireframe, 
    shininess, 
    modelType, 
    modelColor
    }) {

    //Model submenu form
    const [showModelOptions, setShowModelOptions] = useState(false)

    //lights submenu form
    const [showLightOptions, setShowLightOptions] = useState(false)

      const [filesToUpload, setFilesToUpload] = useState("")

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
                <input type={"color"}
                name={"modelColor"}
                onChange={handleChange}
                defaultValue={modelColor}
                />

                <br />

                <label>Model Metalness</label>
                <input type={"range"}
                name={"metalness"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                defaultValue= {metalness}
                />

                <br />

                <label>Model Roughness</label>
                <input type={"range"}
                name={"roughness"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                defaultValue= {roughness}
                />

                <label>Specular Colour</label>
                <input type={"color"}
                name={"specularColor"}
                onChange={handleChange}
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
              <input type={"color"}
                name={"modelColor"}
                onChange={handleChange}
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
              <input type={"color"}
                name={"modelColor"}
                onChange={handleChange}
                defaultValue={modelColor}
                />

              <br />

              <label>Specular Colour</label>
              <input type={"color"}
                name={"specularColor"}
                onChange={handleChange}
                defaultValue={specularColor}
                />

              <br />

              <label>Shininess</label>
              <input type={"range"}
                name={"shininess"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
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
                <input type={"color"}
                name={"modelColor"}
                onChange={handleChange}
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
              <input type={"color"}
                name={"modelColor"}
                onChange={handleChange}
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
                defaultValue={modelType[0]}
                name={"modelType"}
                onChange={handleChange}
                value={modelType}
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
                    name={"filesToUpload"}
                    defaultValue={filesToUpload}
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
                defaultValue={modelMat[0]}
                name={"modelMat"}
                onChange={handleChange}
                value={modelMat}
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
                      <input type={"checkbox"} 
                      name={"wireframe"}
                      onChange={handleChange}
                      defaultChecked={wireframe}
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
                <input type={"color"}
                name={"lightColor"}
                onChange={handleChange}
                defaultValue={lightColor}
                />

                <br />

                <label>Left/Right Light Position</label>
                <input type={"range"}
                name={"lightPositionx"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                defaultValue= {lightPositionx}
                />

                <br />

                <label>Up/Down Light Position</label>
                <input type={"range"}
                name={"lightPositionz"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                defaultValue= {lightPositionz}
                />

                <br />

                <label>Forward/Back Light Position</label>
                <input type={"range"}
                name={"lightPositiony"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                defaultValue= {lightPositiony}
                />

                <br />

                <label>Light Intensity</label>
                <input type={"range"}
                name={"lightIntensity"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
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