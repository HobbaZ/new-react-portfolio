import { DoubleSide } from "three"


function Box ({modelColor, metalness, roughness, modelMat, wireframe, shininess, modelType, specularColor}) {

  // Takes colour and reacts to light
  const standardMat = 
  <meshStandardMaterial
          color= {modelColor}
          roughness={roughness/10}
          metalness={metalness/10}
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

  //models

  const cube = <boxGeometry/>
  const cone= <coneGeometry/>
  const torus = <torusGeometry/>
  const tube = <tubeGeometry/>
  const sphere = <sphereGeometry/>
  const ring = <ringGeometry/>
  const cylinder = <cylinderGeometry/>

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

    if (modelType === "sphere") {
      return (
        sphere
      )
    }

    if (modelType === "cylinder") {
      return (
        cylinder
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
  }

    return (

        <mesh
        castShadow
        receiveShadow        
        position={[0,0.5,0.02]}
        
        >
          {modelSelector()}

          {materialSelector()}
        </mesh>
    )
}

export default Box