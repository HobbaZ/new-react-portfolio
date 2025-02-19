import React, { useState } from "react";

import { OrbitControls, softShadows } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";

import CanvasValuesForm from "../../components/CanvasValuesForm";

import Model from "./Model";

import Lights from "./Lights";

import { FormButton } from "../../components/BaseSettings";

//enable soft shadows
softShadows();

function CanvasContainer(props) {
  //edit form
  const [showEditModelForm, setShowEditModelForm] = useState(false);

  return (
    <div id="canvasContainer">
      <Canvas
        camera={{ position: [0, 1, 2] }}
        shadows={{
          type: "PCFSoftShadowMap",
        }}
        //display pixel ratio
        dpr={[1, 2]}
      >
        <Lights {...props} />

        <Model {...props} />
        <OrbitControls />
      </Canvas>

      {/*Click to show or hide edit form*/}
      <div className="formContainer col-xs-12 col-sm-10 col-md-10 col-lg-6 mx-auto p-0">
        <div className="position-absolute w-100">
          <div className="text-center col-xs-12 col-sm-10 col-md-10 col-lg-6 modelFormButton">
            <FormButton
              className="form-btn-primary buttonText"
              {...props}
              text={
                showEditModelForm ? (
                  <div className="buttonText">Customise Model x </div>
                ) : (
                  <div className="buttonText">Customise Model </div>
                )
              }
              colour={props.buttonTextColor}
              onClick={() => setShowEditModelForm(!showEditModelForm)}
            ></FormButton>
          </div>

          {/*Edit form*/}
          {showEditModelForm && (
            <div className="w-100 m-auto">
              <CanvasValuesForm {...props} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CanvasContainer;
