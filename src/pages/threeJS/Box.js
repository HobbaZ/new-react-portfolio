function Box () {

    return (
        <mesh
        castShadow
        //scale={[1,1,1]}
        position={[0,0.5,0.02]}
        >
          <boxGeometry />

          <meshStandardMaterial 
          color={"red"}
          //wireframe={false}
          roughness={0.3}
          metalness={0.7}
          />
        </mesh>
    )
}

export default Box