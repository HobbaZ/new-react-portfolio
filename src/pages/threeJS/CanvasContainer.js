import React, {useState} from 'react';

import {OrbitControls, softShadows } from '@react-three/drei'

import { Button } from 'react-bootstrap';

import { Canvas } from '@react-three/fiber'

import CanvasValuesForm from '../../components/CanvasValuesForm';

import Model from './Model'

import Lights from './Lights'

//enable soft shadows
softShadows()

function CanvasContainer ({
    //Data in
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
              <Lights {...{lightColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, ambientLightColor}}/>

              <Model {...{modelColor, metalness, roughness, modelMat, wireframe, modelType, specularColor, shininess}}
              />
              <OrbitControls />
            </Canvas>

            {/*Click to show or hide edit form*/ }
            <div className='text-center modelFormButton'>
                      <Button className=' btn btn-primary w-75'
                      
                            onClick={() => setShowEditModelForm(!showEditModelForm)}>
                                <div className="buttonText">Edit Model Values {showEditModelForm ? "^" : "˅"}</div>
                      </Button>
                    </div>

                    {/*Edit form*/}
              {showEditModelForm && (
                <>
              <CanvasValuesForm {...{
                //Send data to canvas menu
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
                modelType}}/>
                </>

              )}
            </div>
        );
}

export default CanvasContainer;