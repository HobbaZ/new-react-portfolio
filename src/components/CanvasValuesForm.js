import React, { useEffect, useState } from 'react';

import {H4, P, Label, FormButton} from '../components/BaseSettings'

import { Button } from 'react-bootstrap';

function CanvasValuesForm ({
  // data from canvas Container
    ...props
    }) {

    useEffect (() => {
      localStorage.setItem("ambientLightColor", JSON.stringify(props.ambientLightColor))
      localStorage.setItem("lightPositionx", JSON.stringify(props.lightPositionx))
      localStorage.setItem("lightPositiony", JSON.stringify(props.lightPositiony))
      localStorage.setItem("lightPositionz", JSON.stringify(props.lightPositionz))
      localStorage.setItem("lightColor", JSON.stringify(props.lightColor))
      localStorage.setItem("lightIntensity", JSON.stringify(props.lightIntensity))
      localStorage.setItem("roughness", JSON.stringify(props.roughness))
      localStorage.setItem("metalness", JSON.stringify(props.metalness))
      localStorage.setItem("modelMat", JSON.stringify(props.modelMat))
      localStorage.setItem("specularColor", JSON.stringify(props.specularColor))
      localStorage.setItem("wireframe", JSON.stringify(props.wireframe))
      localStorage.setItem("shininess", JSON.stringify(props.shininess))
      localStorage.setItem("modelType", JSON.stringify(props.modelType))
      localStorage.setItem("modelColor", JSON.stringify(props.modelColor))
    })

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
    if (props.modelMat === "meshStandardMaterial") {
      return (
        <>

      <P  
      valueToChange={props.pColor}
      text="The standard mesh material reacts to lights and shadows (and is more expensive to create), 
      metalness and roughness values create a more realistic looking object">
      </P>
        <br />
                <Label
                valueToChange={props.labelColor}
                text = "Model Colour"
                ></Label>
                <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Model Metalness"
                ></Label>
                <input type={"range"}
                name={"metalness"}
                min={0}
                max={10}
                step={0.01}
                onChange={props.handleChange}
                value= {props.metalness || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Model Roughness"
                ></Label>
                <input type={"range"}
                name={"roughness"}
                min={0}
                max={10}
                step={0.01}
                onChange={props.handleChange}
                value= {props.roughness || ""}
                />

                <Label
                valueToChange={props.labelColor}
                text = "Specular Colour"
                ></Label>
                <input type={"color"}
                name={"specularColor"}
                onChange={props.handleChange}
                value={props.specularColor || ''}
                />
        </>
      )}

    else if (props.modelMat === "meshBasicMaterial") {
      return (
        <>
        <P  
        valueToChange={props.pColor}
        text="The basic mesh material doesn't react to lights and is flat-shaded, meaning it is cheap to create and best suited for background elements">
        </P>

        <br />
              <Label
                valueToChange={props.labelColor}
                text = "Model Colour"
                ></Label>
              <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />
        </>
      )}

    else if (props.modelMat === "meshPhongMaterial") {
      return (
        <>
        <P  
        valueToChange={props.pColor}
        text="Phong mesh materials are often used to represent glass or glossy surfaces, for example, plastic.">
        </P>
        <br />
                <Label
                valueToChange={props.labelColor}
                text = "Model Colour"
                ></Label>
              <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />

              <br />

              <Label
                valueToChange={props.labelColor}
                text = "Specular Colour"
                ></Label>
              <input type={"color"}
                name={"specularColor"}
                onChange={props.handleChange}
                value={props.specularColor || ''}
                />

              <br />

              <Label
                valueToChange={props.labelColor}
                text = "Shininess"
                ></Label>
              <input type={"range"}
                name={"shininess"}
                min={30}
                max={100}
                step={0.01}
                onChange={props.handleChange}
                value={props.shininess || ""}
                />
        </>
      )}

      else if (props.modelMat === "meshToonMaterial") {
        return (
          <>
          <P  
          valueToChange={props.pColor}
          text="Toon mesh materials represent cel shading and makes models look cartoonish.">
          </P>
          <br />
          <Label
          valueToChange={props.labelColor}
          text = "Model Colour"
          ></Label>
                <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />
          </>
        )}
  

    else if (props.modelMat === "meshBasicMaterial") {
      return (
        <>
        <P  
          valueToChange={props.pColor}
          text="The normal mesh material reacts to lights and shadows and will show the geometry normals with different colours depending 
          on the closeness of the camera, no tweakable effects for this material.">
          </P>
        </>
      )}

      else if (props.modelMat === "pointsMaterial") {
        return (
          <>
          <P  
          valueToChange={props.pColor}
          text="The points material shows all the vertices of the selected model.">
          </P>

           <br />
           <Label
            valueToChange={props.labelColor}
            text = "Model Colour"
            ></Label>
              <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />
          </>
        )}

  }

        return (
            <>
                <form className='modelForm' id="modelForm">

                <div className='text-center'>
                <H4 
                valueToChange={props.h1Color}
                text ="Model Edit Options"
                >
                </H4>
                </div>

                {/*Click to show or hide light options form*/ }
                <div className='text-center'>
                      <FormButton 
                      className='btn btn-primary'
                      buttonGradientAngle={props.buttonGradientAngle}
                      buttonGradientColor1={props.buttonGradientColor1}
                      buttonGradientColor2={props.buttonGradientColor2}
                      text={showModelOptions ? "Edit Model ˅" : "Edit Model "}
                      colour={props.buttonTextColor}

                      onClick={() => setShowModelOptions(!showModelOptions)}>
                      </FormButton>
                    </div>

                    {/*Light options*/}
              {showModelOptions && (
                <>

                {/* Might refactor to less model options in the future*/}
                <Label
                valueToChange={props.labelColor}
                text = "Model Type"
                ></Label>
                
                <br />
                <select 
                value={props.modelType || "cube"}
                name={"modelType"}
                onChange={props.handleChange}
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

                {props.modelType === "customModel" ? 
              <>
              <br />
              <Label
                valueToChange={props.labelColor}
                text = "Upload Model (.fbx, .glb)"
                ></Label>
                
                <br />
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

                <Label
                valueToChange={props.labelColor}
                text = "Model Material"
                ></Label>
                <br />
                <select
                value={props.modelMat || "meshStandardMaterial"}
                name={"modelMat"}
                onChange={props.handleChange}
                >
                <option value="meshStandardMaterial">MeshStandardMaterial</option>
                <option value="meshBasicMaterial">MeshBasicMaterial</option>
                <option value="meshPhongMaterial">MeshPhongMaterial</option>
                <option value="meshToonMaterial">MeshToonMaterial</option>
                <option value="meshNormalMaterial">MeshNormalMaterial</option>
                <option value="pointsMaterial">PointsMaterial</option>
                </select>

                {materialOptions()} {/*call function*/}

                {/* Show wireframe option for any materials other than points material */}
                {props.modelMat !== "pointsMaterial" ? 
                      <>
                      <br />
                      <Label
                      valueToChange={props.labelColor}
                      text = "Wireframe"
                      ></Label>
                      <input type={"checkbox"} 
                      name={"wireframe"}
                      onChange={props.handleChange}
                      value={props.wireframe || ""}
                      />
                    </> : null //if false don't show anything
                }

                </>
              )}

            {/*End of model options */}

            {/*Click to show or hide light options form*/ }
            <div className='text-center'>

            <FormButton 
              className='btn btn-primary'
              buttonGradientAngle={props.buttonGradientAngle}
              buttonGradientColor1={props.buttonGradientColor1}
              buttonGradientColor2={props.buttonGradientColor2}
              text={showLightOptions ? "Edit Lights ˅" : "Edit Lights "}
              colour={props.buttonTextColor}

              onClick={() => setShowLightOptions(!showLightOptions)}>
            </FormButton>
            </div>

            {/*Light options*/}
              {showLightOptions && (
                <>
                <Label
                valueToChange={props.labelColor}
                text = "Ambient Light Colour"
                ></Label>
                <input type={"color"}
                name={"ambientLightColor"}
                onChange={props.handleChange}
                value={props.ambientLightColor || ''}
                />

                <br />
                
                <Label
                valueToChange={props.labelColor}
                text = "Light Colour"
                ></Label>
                <input type={"color"}
                name={"lightColor"}
                onChange={props.handleChange}
                value={props.lightColor || ''}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Left/Right Light Position"
                ></Label>
                <input type={"range"}
                name={"lightPositionx"}
                min={-10}
                max={10}
                step={0.01}
                onChange={props.handleChange}
                value={props.lightPositionx || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Up/Down Light Position"
                ></Label>
                <input type={"range"}
                name={"lightPositionz"}
                min={-10}
                max={10}
                step={0.01}
                onChange={props.handleChange}
                value={props.lightPositionz || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Forward/Back Light Position"
                ></Label>
                <input type={"range"}
                name={"lightPositiony"}
                min={-10}
                max={10}
                step={0.01}
                onChange={props.handleChange}
                value={props.lightPositiony || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Light Intensity"
                ></Label>
                <input type={"range"}
                name={"lightIntensity"}
                min={0}
                max={100}
                step={0.01}
                onChange={props.handleChange}
                value={props.lightIntensity || ""}
                />
                </>
              )}

              {/*End of light options */}

            </form>
                </>
        )

}

export default CanvasValuesForm