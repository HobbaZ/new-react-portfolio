import React, { useEffect, useState } from 'react';

import {Heading, P, Label, FormButton} from '../components/BaseSettings'

import { Button } from 'react-bootstrap';

function CanvasValuesForm ({
  // data from canvas Container
    ...props
    }) {

    const [userInputs, setUserInputs] = useState({
  
      // HTML variables
  
      //get values from Edit Values form with localstorage
      h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#000000",
      pColor: JSON.parse(localStorage.getItem("pColor")) || "#000000",
      buttonGradientAngle: JSON.parse(localStorage.getItem("buttonGradientAngle")) || 0,
      buttonGradientColor1: JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#000000",
      buttonGradientColor2: JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#000000",
      buttonTextColor: JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff",
      labelColor: JSON.parse(localStorage.getItem("labelColor")) || "#000000",
    })

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

      //get form values
      userInputs.pColor= JSON.parse(localStorage.getItem("pColor"))
      userInputs.h1Color = JSON.parse(localStorage.getItem("h1Color"))
      userInputs.labelColor= JSON.parse(localStorage.getItem("labelColor"))
    }, /*[
      userInputs,
      ...props
      /*props.ambientLightColor,
      props.lightPositionx, 
      props.lightPositiony,
      props.lightColor, 
      props.lightIntensity, 
      lightPositionz, 
      roughness, 
      metalness, 
      modelMat,
      specularColor, 
      wireframe, 
      shininess, 
      modelType, 
      modelColor
    ]*/)

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
      valueToChange={userInputs.pColor}
      text="The standard mesh material reacts to lights and shadows (and is more expensive to create), 
      metalness and roughness values create a more realistic looking object">
      </P>
        <br />
                <Label
                valueToChange={userInputs.labelColor}
                text = "Model Colour"
                ></Label>
                <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />

                <br />

                <Label
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
        valueToChange={userInputs.pColor}
        text="The basic mesh material doesn't react to lights and is flat-shaded, meaning it is cheap to create and best suited for background elements">
        </P>

        <br />
              <Label
                valueToChange={userInputs.labelColor}
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
        valueToChange={userInputs.pColor}
        text="Phong mesh materials are often used to represent glass or glossy surfaces, for example, plastic.">
        </P>
        <br />
                <Label
                valueToChange={userInputs.labelColor}
                text = "Model Colour"
                ></Label>
              <input type={"color"}
                name={"modelColor"}
                onChange={props.handleChange}
                value={props.modelColor || ''}
                />

              <br />

              <Label
                valueToChange={userInputs.labelColor}
                text = "Specular Colour"
                ></Label>
              <input type={"color"}
                name={"specularColor"}
                onChange={props.handleChange}
                value={props.specularColor || ''}
                />

              <br />

              <Label
                valueToChange={userInputs.labelColor}
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
          valueToChange={userInputs.pColor}
          text="Toon mesh materials represent cel shading and makes models look cartoonish.">
          </P>
          <br />
          <Label
          valueToChange={userInputs.labelColor}
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
          valueToChange={userInputs.pColor}
          text="The normal mesh material reacts to lights and shadows and will show the geometry normals with different colours depending 
          on the closeness of the camera, no tweakable effects for this material.">
          </P>
        </>
      )}

      else if (props.modelMat === "pointsMaterial") {
        return (
          <>
          <P  
          valueToChange={userInputs.pColor}
          text="The points material shows all the vertices of the selected model.">
          </P>

           <br />
           <Label
            valueToChange={userInputs.labelColor}
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
                <Heading 
                valueToChange={userInputs.h1Color}
                text ="Model Edit Options"
                >
                </Heading>
                </div>

                {/*Click to show or hide light options form*/ }
                <div className='text-center'>
                      <FormButton 
                      className='btn btn-primary'
                      buttonGradientAngle={userInputs.buttonGradientAngle}
                      buttonGradientColor1={userInputs.buttonGradientColor1}
                      buttonGradientColor2={userInputs.buttonGradientColor2}
                      text={showModelOptions ? "Edit Model ^" : "Edit Model ˅"}
                      colour={userInputs.buttonTextColor}

                      onClick={() => setShowModelOptions(!showModelOptions)}>
                      </FormButton>
                    </div>

                    {/*Light options*/}
              {showModelOptions && (
                <>

                {/* Might refactor to less model options in the future*/}
                <Label
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
                      valueToChange={userInputs.labelColor}
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
              buttonGradientAngle={userInputs.buttonGradientAngle}
              buttonGradientColor1={userInputs.buttonGradientColor1}
              buttonGradientColor2={userInputs.buttonGradientColor2}
              text={showLightOptions ? "Edit Lights ^" : "Edit Lights ˅"}
              colour={userInputs.buttonTextColor}

              onClick={() => setShowLightOptions(!showLightOptions)}>
            </FormButton>
            </div>

            {/*Light options*/}
              {showLightOptions && (
                <>
                <Label
                valueToChange={userInputs.labelColor}
                text = "Ambient Light Colour"
                ></Label>
                <input type={"color"}
                name={"ambientLightColor"}
                onChange={props.handleChange}
                value={props.ambientLightColor || ''}
                />

                <br />
                
                <Label
                valueToChange={userInputs.labelColor}
                text = "Light Colour"
                ></Label>
                <input type={"color"}
                name={"lightColor"}
                onChange={props.handleChange}
                value={props.lightColor || ''}
                />

                <br />

                <Label
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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
                valueToChange={userInputs.labelColor}
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