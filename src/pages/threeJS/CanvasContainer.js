import React from 'react';

import {OrbitControls, softShadows } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

import Box from './Box'

import Lights from './Lights'

//enable soft shadows
softShadows()

function CanvasContainer ({lightColor, modelColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, metalness, roughness, modelMat, wireframe, shininess, modelType, specularColor}) {

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

              <Box {...{modelColor, metalness, roughness, modelMat, wireframe, modelType, specularColor}}
              />
              <OrbitControls />
            </Canvas>
            </div>
        );
}

export default CanvasContainer;