
function Box ({modelColor, metalness, roughness, modelMat, wireframe, shininess}) {

  // Takes colour and reacts to light
  const standardMat = 
  <meshStandardMaterial
          color= {modelColor}
          roughness={roughness/10}
          metalness={metalness/10}
          wireframe= {wireframe}
          />

  // Takes colour, doesn't react to light
  const basicMat = <meshBasicMaterial 
          color= {modelColor}
          wireframe={wireframe}
  />

  // Phong material is for cheap rendering of shiny surfaces with specular highlighting
  const phongMat = <meshPhongMaterial 
          color={modelColor}
          specular={"#ffffff"}
          wireframe={wireframe}
          shininess={shininess}
  />

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
  }

    return (

        <mesh
        castShadow
        receiveShadow        
        position={[0,0.5,0.02]}
        
        >
          <boxGeometry />

          {materialSelector()}
        </mesh>
    )
}

export default Box