
function Box ({modelColor, metalness, roughness, modelMat}) {

  // Takes colour and reacts to light
  const standardMat = 
  <meshStandardMaterial
          color= {modelColor}
          roughness={roughness/10}
          metalness={metalness/10}
          />

  // Takes colour, doesn't react to light
  const basicMat = <meshBasicMaterial 
  color= {modelColor}
  />

  // Doesn't react to colour, does react to light
  const phongMat = <meshPhongMaterial />

  function materialSelector() {
    if (modelMat === "meshStandardMaterial") {
      console.log(modelMat)
      return (
        standardMat
      )
    }

    else if (modelMat === "meshBasicMaterial") {
      console.log(modelMat)
      return (
        basicMat
      )
    }

    else if (modelMat === "meshPhongMaterial") {
      console.log(modelMat)
      return (
        phongMat
      )
    }
  }

    return (

        <mesh
        castShadow
        receiveShadow        
        //scale={[1,1,1]}
        position={[0,0.5,0.02]}
        
        >
          <boxGeometry />

          {materialSelector()}

          {/*<meshStandardMaterial
          color= {modelColor}
          
          roughness={roughness/10}
          metalness={metalness/10}
          />*/}
        </mesh>
    )
}

export default Box