import React, { useState } from 'react';

import { OrbitControls, softShadows } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

import CanvasValuesForm from '../../components/CanvasValuesForm';

import Model from './Model'

import Lights from './Lights'

import { FormButton } from '../../components/BaseSettings'

//enable soft shadows
softShadows()

function CanvasContainer({
  //Data in
  pColor = JSON.parse(localStorage.getItem("pColor")),
  h1Color = JSON.parse(localStorage.getItem("h1Color")),
  labelColor = JSON.parse(localStorage.getItem("labelColor")),
  buttonGradientAngle = JSON.parse(localStorage.getItem("backgroundGradientAngle")),
  buttonGradientColor1 = JSON.parse(localStorage.getItem("buttonGradientColor1")),
  buttonGradientColor2 = JSON.parse(localStorage.getItem("buttonGradientColor2")),
  buttonTextColor = JSON.parse(localStorage.getItem("buttonTextColor")),
  handleChange,
  ambientLightColor = JSON.parse(localStorage.getItem("ambientLightColour")),
  lightPositionx = JSON.parse(localStorage.getItem("lightPositionx")),
  lightPositiony = JSON.parse(localStorage.getItem("lightPositiony")),
  lightColor = JSON.parse(localStorage.getItem("lightColor")),
  lightIntensity = JSON.parse(localStorage.getItem("lightIntensity")),
  lightPositionz = JSON.parse(localStorage.getItem("lightPositionz")),
  roughness = JSON.parse(localStorage.getItem("roughness")),
  metalness = JSON.parse(localStorage.getItem("metalness")),
  modelMat = JSON.parse(localStorage.getItem("modelMat")),
  specularColor = JSON.parse(localStorage.getItem("specularColor")),
  wireframe = JSON.parse(localStorage.getItem("wireframe")),
  shininess = JSON.parse(localStorage.getItem("shininess")),
  modelType = JSON.parse(localStorage.getItem("modelType")),
  modelColor = JSON.parse(localStorage.getItem("modelColor")),
  //rotateSpeed = JSON.parse(localStorage.getItem("rotateSpeed"))
}) {

  //edit form
  const [showEditModelForm, setShowEditModelForm] = useState(false)

  return (
    <div id='canvasContainer'>
      <Canvas
        camera={{ position: [0, 0, 5] }}
        shadows={{
          type: "PCFSoftShadowMap",
        }}

        //display pixel ratio
        dpr={[1, 2]}
      >
        <Lights {...{ lightColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, ambientLightColor }} />

        <Model {...{ handleChange, modelColor, metalness, roughness, modelMat, wireframe, modelType, specularColor, shininess }}
        />
        <OrbitControls />
      </Canvas>

      {/*Click to show or hide edit form*/}
      <div className='text-center col-12 col-md-6 modelFormButton'>

        <FormButton
          className='form-btn-primary'
          buttonGradientAngle={buttonGradientAngle}
          buttonGradientColor1={buttonGradientColor1}
          buttonGradientColor2={buttonGradientColor2}
          text={showEditModelForm ? "Customise Model -" : "Customise Model"}
          colour={buttonTextColor}

          onClick={() => setShowEditModelForm(!showEditModelForm)}>
        </FormButton>
      </div>

      {/*Edit form*/}
      {showEditModelForm && (
        <>
          <CanvasValuesForm {...{
            //Send data to canvas menu
            pColor,
            h1Color,
            labelColor,
            buttonGradientAngle,
            buttonGradientColor1,
            buttonGradientColor2,
            buttonTextColor,

            handleChange,
            ambientLightColor,
            modelColor,
            lightPositionx,
            lightPositiony,
            lightColor,
            lightIntensity,
            lightPositionz,
            metalness,
            roughness,
            modelMat,
            specularColor,
            wireframe,
            shininess,
            modelType
          }} />
        </>
      )}
    </div>
  );
}

export default CanvasContainer;