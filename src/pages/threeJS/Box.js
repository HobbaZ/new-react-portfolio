import { DoubleSide } from "three"


function Box ({modelColor, metalness, roughness, modelMat, wireframe, shininess, modelType, specularColor}) {

  // Takes colour and reacts to light
  const standardMat = 
  <meshStandardMaterial
          color= {modelColor}
          roughness={roughness/10}
          metalness={metalness/10}
          specular={specularColor}
          wireframe= {wireframe}
          side={DoubleSide}
          />

  // Takes colour, doesn't react to light
  const basicMat = <meshBasicMaterial 
          color= {modelColor}
          wireframe={wireframe}
          side={DoubleSide}
  />

  // Takes colour, doesn't react to light
  const toonMat = <meshToonMaterial 
          color= {modelColor}
          wireframe={wireframe}
          side={DoubleSide}
  />

  // Phong material is for cheap rendering of shiny surfaces with specular highlighting
  const phongMat = <meshPhongMaterial 
          color={modelColor}
          specular={specularColor}
          wireframe={wireframe}
          shininess={shininess}
          side={DoubleSide}
  />

  const normalMat = <meshNormalMaterial 
          wireframe={wireframe}
          side={DoubleSide}
  />

  const pointsMat = <pointsMaterial
          side={DoubleSide}
          size= {0.02}
          color={modelColor}
  />

  //models

  const cube = <boxGeometry/>
  const cone= <coneGeometry/>
  const torus = <torusGeometry/>
  const tube = <tubeGeometry/>
  const sphere = <sphereGeometry/>
  const ring = <ringGeometry/>
  const cylinder = <cylinderGeometry/>
  const torusKnot = <torusKnotGeometry/>
  const dodecahedron = <dodecahedronGeometry/>

  function modelSelector() {
    if (modelType === "cube") {
      return (
        cube
      )
    }

    else if (modelType === "cone") {
      return (
        cone
      )
    }

    else if (modelType === "torus") {
      return (
        torus
      )
    }

    else if (modelType === "ring") {
      return (
        ring
      )
    }

    else if (modelType === "tube") {
      return (
        tube
      )
    }

    else if (modelType === "sphere") {
      return (
        sphere
      )
    }

    else if (modelType === "cylinder") {
      return (
        cylinder
      )
    }

    else if (modelType === "torusKnot") {
      return (
        torusKnot
      )
    }

    else if (modelType === "dodecahedron") {
      return (
        dodecahedron
      )
    }
  }

  function materialSelector() {
    if (modelMat === "meshStandardMaterial") {
      return (
        standardMat
      )
    }

    else if (modelMat === "meshBasicMaterial") {
      return (
        basicMat
      )
    }

    else if (modelMat === "meshPhongMaterial") {
      return (
        phongMat
      )
    }

    else if (modelMat === "meshToonMaterial") {
      return (
        toonMat
      )
    }

    else if (modelMat === "meshNormalMaterial") {
      return (
        normalMat
      )
    }

    else if (modelMat === "pointsMaterial") {
      return (
        pointsMat
      )
    }

  }

    //render points material by creating points instead of mesh

    if (modelMat !== "pointsMaterial") {
      return (

        <mesh
        castShadow        
        position={[0,0.5,0.02]}
        
        >
          {modelSelector()}

          {materialSelector()}
        </mesh>
    )
  }
    else {
      return (
        <points
        castShadow
        position={[0,0.5,0.02]}
        >
          {modelSelector()}

          {materialSelector()}

        </points>
      )
    }

    
}

export default Box