import React, { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';

function CanvasValuesForm ({
  // data from canvas Container
    handleChange, 
    ambientLightColor,
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

    useEffect (() => {
      localStorage.setItem("ambientLightColor", JSON.stringify(ambientLightColor))
      localStorage.setItem("lightPositionx", JSON.stringify(lightPositionx))
      localStorage.setItem("lightPositiony", JSON.stringify(lightPositiony))
      localStorage.setItem("lightPositionz", JSON.stringify(lightPositionz))
      localStorage.setItem("lightColor", JSON.stringify(lightColor))
      localStorage.setItem("lightIntensity", JSON.stringify(lightIntensity))
      localStorage.setItem("roughness", JSON.stringify(roughness))
      localStorage.setItem("metalness", JSON.stringify(metalness))
      localStorage.setItem("modelMat", JSON.stringify(modelMat))
      localStorage.setItem("specularColor", JSON.stringify(specularColor))
      localStorage.setItem("wireframe", JSON.stringify(wireframe))
      localStorage.setItem("shininess", JSON.stringify(shininess))
      localStorage.setItem("modelType", JSON.stringify(modelType))
      localStorage.setItem("modelColor", JSON.stringify(modelColor))
    }, [
      ambientLightColor,
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
    ])

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
                value={modelColor || '#ff0000'}
                />

                <br />

                <label>Model Metalness</label>
                <input type={"range"}
                name={"metalness"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                value= {metalness || 0}
                />

                <br />

                <label>Model Roughness</label>
                <input type={"range"}
                name={"roughness"}
                min={0}
                max={10}
                step={0.01}
                onChange={handleChange}
                value= {roughness || 0}
                />

                <label>Specular Colour</label>
                <input type={"color"}
                name={"specularColor"}
                onChange={handleChange}
                value={specularColor || '#ffffff'}
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
                value={modelColor || '#ff0000'}
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
                value={modelColor || '#ff0000'}
                />

              <br />

              <label>Specular Colour</label>
              <input type={"color"}
                name={"specularColor"}
                onChange={handleChange}
                value={specularColor || '#ffffff'}
                />

              <br />

              <label>Shininess</label>
              <input type={"range"}
                name={"shininess"}
                min={30}
                max={100}
                step={0.01}
                onChange={handleChange}
                value={shininess || 0}
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
                value={modelColor || '#ff0000'}
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
                value={modelColor || '#ff0000'}
                />
          </>
        )}

        

  }

        return (
            <>
                <form className='modelForm' id="modelForm">
                <h4 className='text-center formSubheading'>Model Edit Options</h4>

                {/*Click to show or hide light options form*/ }
                <div className='text-center'>
                      <Button className=' btn btn-primary buttonText'
                      
                            onClick={() => setShowModelOptions(!showModelOptions)}>
                                <div className="buttonText">Edit Model {showModelOptions ? "^" : "˅"}</div>
                      </Button>
                    </div>

                    {/*Light options*/}
              {showModelOptions && (
                <>

                {/* Might refactor to less model options in the future*/}
                <label>Model Type</label><br />
                <select 
                value={modelType || "cube"}
                name={"modelType"}
                onChange={handleChange}
                >
                <option value="cube">Cube</option>
                <option value="sphere">Sphere</option>
                <option value="torus">Torus</option>
                <option value="tube">Tube</option>
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
                    value={filesToUpload}
                    accept='.fbx, .glb' 
                    onChange={handleFileUpload}>
                  </input>
                  <div>
                    <Button className=' btn btn-primary w-25'><div className="buttonText">Submit</div></Button>
                  </div>
              </> : null
              }

                <br />

                <label>Model Material</label><br />
                <select
                value={modelMat || "meshStandardMaterial"}
                name={"modelMat"}
                onChange={handleChange}
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
                      value={wireframe || false}
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
                                <div className="buttonText">Edit Lights {showLightOptions ? "^" : "˅"}</div>
                      </Button>
                    </div>

                    {/*Light options*/}
              {showLightOptions && (
                <>
                <label>Ambient Light Colour</label>
                <input type={"color"}
                name={"ambientLightColor"}
                onChange={handleChange}
                value={ambientLightColor || '#ffffff'}
                />

                <br />
                
                <label>Light Colour</label>
                <input type={"color"}
                name={"lightColor"}
                onChange={handleChange}
                value={lightColor || '#ffffff'}
                />

                <br />

                <label>Left/Right Light Position</label>
                <input type={"range"}
                name={"lightPositionx"}
                min={-10}
                max={10}
                step={0.01}
                onChange={handleChange}
                value={lightPositionx || 0}
                />

                <br />

                <label>Up/Down Light Position</label>
                <input type={"range"}
                name={"lightPositionz"}
                min={-10}
                max={10}
                step={0.01}
                onChange={handleChange}
                value={lightPositionz || 10}
                />

                <br />

                <label>Forward/Back Light Position</label>
                <input type={"range"}
                name={"lightPositiony"}
                min={-10}
                max={10}
                step={0.01}
                onChange={handleChange}
                value={lightPositiony || 0}
                />

                <br />

                <label>Light Intensity</label>
                <input type={"range"}
                name={"lightIntensity"}
                min={0}
                max={100}
                step={0.01}
                onChange={handleChange}
                value={lightIntensity || 50}
                />
                </>
              )}

              {/*End of light options */}

            </form>
                </>
        )

}

export default CanvasValuesForm