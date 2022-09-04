import React, {useState} from 'react';

import {OrbitControls, softShadows } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

import Box from './Box'

import Lights from './Lights'

//enable soft shadows
softShadows()

function CanvasContainer () {
  const [colourValue, setColourValue] = useState("#000000")

  const handleColourChange = (event) => {
    setColourValue(event.target.value)
  };

        return (
            <div id='canvasContainer'>
            <Canvas 
            shadows={{ 
              type: "PCFSoftShadowMap",
            }}
      
              //display pixel ratio
              dpr={[1, 2]}
            >
              <Lights />
              <Box 
              handleChange={handleColourChange}
              value={colourValue}
              />
              <OrbitControls />
            </Canvas>
            </div>
        );
}

export default CanvasContainer;