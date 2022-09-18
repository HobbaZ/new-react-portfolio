import React, {useState} from 'react';

import {OrbitControls, softShadows } from '@react-three/drei'

import { Button } from 'react-bootstrap';

import { Canvas } from '@react-three/fiber'

import CanvasValuesForm from '../../components/CanvasValuesForm';

import Model from './Model'

import Lights from './Lights'

//enable soft shadows
softShadows()

function CanvasContainer ({handleModelChange, modelColor, handleLightChange, 
  handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, 
  lightPositiony, lightColor, lightIntensity, handleColour4Change, handleLightPositionZChange, lightPositionz, 
  metalness, handleMetalnessChange, roughness, handleRoughnessChange, modelMat, 
  handleModelMatChange, specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange}) {

  //edit form
  const [showEditModelForm, setShowEditModelForm] = useState(false)

        return (
            <div id='canvasContainer'>
            <Canvas 
            camera={[0,0,0]}
            shadows={{ 
              type: "PCFSoftShadowMap",
            }}
      
              //display pixel ratio
              dpr={[1, 2]}
            >
              <Lights {...{lightColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, shininess}}/>

              <Model {...{modelColor, metalness, roughness, modelMat, wireframe, modelType, specularColor}}
              />
              <OrbitControls />
            </Canvas>

            {/*Click to show or hide edit form*/ }
            <div className='text-center modelFormButton'>
                      <Button className=' btn btn-primary w-75'
                      
                            onClick={() => setShowEditModelForm(!showEditModelForm)}>
                                {showEditModelForm ? "Edit Model Values ^" : "Edit Model Values ˅"}
                      </Button>
                    </div>

                    {/*Edit form*/}
              {showEditModelForm && (
                <>
              <CanvasValuesForm {...{handleModelChange, modelColor, handleLightChange, 
                handleLightIntensityChange, handleLightPositionXChange, handleLightPositionYChange, lightPositionx, 
                lightPositiony, lightColor, lightIntensity, handleColour4Change, handleLightPositionZChange, lightPositionz, 
                metalness, handleMetalnessChange, roughness, handleRoughnessChange, modelMat, 
                handleModelMatChange, specularColor, handleSpecularColor, handleWireframeMode, wireframe, shininess, handleShininessChange, modelType, handleModelTypeChange}}/>
                </>

              )}
            </div>
        );
}

export default CanvasContainer;