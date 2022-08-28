import {OrbitControls, softShadows } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'

import Box from './Box'

import Lights from './Lights'

//enable soft shadows
softShadows()

function CanvasContainer () {
        return (
            <div id='canvasContainer'>
            <Canvas 
            shadows={{ 
              type: "PCFSoftShadowMap",
              color: 'red'
            }}
      
              //display pixel ratio
              dpr={[1, 2]}
            >
              <Lights />
              <Box />
              <OrbitControls />
            </Canvas>
            </div>
        );
}

export default CanvasContainer;