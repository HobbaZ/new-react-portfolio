function Lights ({lightColor, lightIntensity, lightPositionx, lightPositiony, lightPositionz, ambientLightColor}) {
    return (
        <>
            <ambientLight 
              intensity={0.3}
              position={[20,20, 20]}
              color={ambientLightColor}
              />
      
              <directionalLight
              castShadow
              shadow-mapSize-height={512}
              shadow-mapSize-width={512}
              shadow-radius={10}
              shadow-bias={0.0001}
      
              position={[lightPositiony,lightPositionz, lightPositionx]}
              intensity={lightIntensity/100} //divide by the max value, too bright otherwise
              color={lightColor}
              />
        </>
    );
}

export default Lights