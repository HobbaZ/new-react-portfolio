import { useRef } from "react";

function Floor() {
  const mesh = useRef(null);

  return (
    <mesh
      ref={mesh}
      receiveShadow
      position={[0, -2, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry args={[20, 20]} />
      <meshStandardMaterial color="white" transparent opacity={0.1} />
    </mesh>
  );
}

export default Floor;
