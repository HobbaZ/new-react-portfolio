import { DoubleSide } from "three";
import { extend, useFrame } from "@react-three/fiber";
import fontFace from "./fonts/helvetiker_regular.typeface.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import React, { useRef } from "react";
import Floor from "./Floor";

function ModelSettings({
  modelColor,
  metalness,
  roughness,
  modelMat,
  wireframe,
  shininess,
  modelType,
  specularColor,
}) {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.geometry.center();
    mesh.current.rotation.y += 0.01;
  });

  const standardMat = (
    <meshStandardMaterial
      color={modelColor}
      roughness={roughness / 10}
      metalness={metalness / 10}
      specular={specularColor}
      wireframe={wireframe}
      side={DoubleSide}
    />
  );

  const basicMat = (
    <meshBasicMaterial
      color={modelColor}
      wireframe={wireframe}
      side={DoubleSide}
    />
  );

  const toonMat = (
    <meshToonMaterial
      color={modelColor}
      wireframe={wireframe}
      side={DoubleSide}
    />
  );

  const phongMat = (
    <meshPhongMaterial
      color={modelColor}
      specular={specularColor}
      wireframe={wireframe}
      shininess={shininess}
      side={DoubleSide}
    />
  );

  const normalMat = (
    <meshNormalMaterial wireframe={wireframe} side={DoubleSide} />
  );

  const pointsMat = (
    <pointsMaterial side={DoubleSide} size={0.02} color={modelColor} />
  );

  const cube = <boxGeometry />;
  const torus = <torusGeometry />;
  const tube = <tubeGeometry />;
  const sphere = <sphereGeometry />;
  const cylinder = <cylinderGeometry />;
  const torusKnot = <torusKnotGeometry />;
  const dodecahedron = <dodecahedronGeometry />;

  extend({ TextGeometry });
  const font = new FontLoader().parse(fontFace);

  const customText = (
    <textGeometry
      args={[
        "Zachary Hobba",
        {
          font,
          size: 0.5,
          height: 0.1,
        },
      ]}
    />
  );

  function modelSelector() {
    if (modelType === "cube") {
      return cube;
    } else if (modelType === "torus") {
      return torus;
    } else if (modelType === "tube") {
      return tube;
    } else if (modelType === "sphere") {
      return sphere;
    } else if (modelType === "cylinder") {
      return cylinder;
    } else if (modelType === "torusKnot") {
      return torusKnot;
    } else if (modelType === "dodecahedron") {
      return dodecahedron;
    } else if (modelType === "text") {
      return customText;
    }
  }

  function materialSelector() {
    if (modelMat === "meshStandardMaterial") {
      return standardMat;
    } else if (modelMat === "meshBasicMaterial") {
      return basicMat;
    } else if (modelMat === "meshPhongMaterial") {
      return phongMat;
    } else if (modelMat === "meshToonMaterial") {
      return toonMat;
    } else if (modelMat === "meshNormalMaterial") {
      return normalMat;
    } else if (modelMat === "pointsMaterial") {
      return pointsMat;
    }
  }

  if (modelMat !== "pointsMaterial") {
    return (
      <>
        <mesh ref={mesh} castShadow position={[0, 0, 0]}>
          {modelSelector()}
          {materialSelector()}
        </mesh>
        <Floor />
      </>
    );
  } else {
    return (
      <>
        <points ref={mesh} castShadow position={[0, 0, 0]}>
          {modelSelector()}
          {materialSelector()}
        </points>
        <Floor />
      </>
    );
  }
}

export default ModelSettings;
