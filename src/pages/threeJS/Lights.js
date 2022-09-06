function Lights ({lightColor, lightIntensity}) {
    return (
        <>
            <ambientLight 
              intensity={0.5}
              />
      
              <directionalLight
              castShadow
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
              shadow-radius={10}
              shadow-bias={0.0001}
      
              position={[10,10,10]}
              intensity={lightIntensity/100} //devide by the max value, too bright otherwise
              color={lightColor}
              />
        </>
    );
}

export default Lights