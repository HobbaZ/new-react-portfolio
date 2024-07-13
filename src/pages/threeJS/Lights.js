import React from "react";

function Lights({
  lightColor,
  lightIntensity,
  lightPositionx,
  lightPositiony,
  lightPositionz,
  ambientLightColor,
}) {
  return (
    <>
      <ambientLight intensity={0.3} color={ambientLightColor} />

      <pointLight
        position={[lightPositionx, lightPositiony, lightPositionz]}
        castShadow={true}
        intensity={lightIntensity / 100} // Divide by 100 to control brightness
        color={lightColor}
      />
    </>
  );
}

export default Lights;
