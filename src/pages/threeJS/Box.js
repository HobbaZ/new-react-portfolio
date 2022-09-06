function Box ({modelColor, metalness, roughness}) {

    return (
        <mesh
        castShadow
        
        //scale={[1,1,1]}
        position={[0,0.5,0.02]}
        >
          <boxGeometry />

          <meshStandardMaterial 
          color= {modelColor}
          //wireframe={false}
          roughness={roughness/10}
          metalness={metalness/10}
          />
        </mesh>
    )
}

export default Box