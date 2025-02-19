import React, { useEffect, useState } from "react";

import { FormButton } from "../components/BaseSettings";

function CanvasValuesForm({
  // data from canvas Container
  ...props
}) {
  useEffect(() => {
    localStorage.setItem(
      "ambientLightColor",
      JSON.stringify(props.ambientLightColor)
    );
    localStorage.setItem(
      "lightPositionx",
      JSON.stringify(props.lightPositionx)
    );
    localStorage.setItem(
      "lightPositiony",
      JSON.stringify(props.lightPositiony)
    );
    localStorage.setItem(
      "lightPositionz",
      JSON.stringify(props.lightPositionz)
    );
    localStorage.setItem("lightColor", JSON.stringify(props.lightColor));
    localStorage.setItem(
      "lightIntensity",
      JSON.stringify(props.lightIntensity)
    );
    localStorage.setItem("roughness", JSON.stringify(props.roughness));
    localStorage.setItem("metalness", JSON.stringify(props.metalness));
    localStorage.setItem("modelMat", JSON.stringify(props.modelMat));
    localStorage.setItem("specularColor", JSON.stringify(props.specularColor));
    localStorage.setItem("wireframe", JSON.stringify(isChecked));
    localStorage.setItem("shininess", JSON.stringify(props.shininess));
    localStorage.setItem("modelType", JSON.stringify(props.modelType));
    localStorage.setItem("modelColor", JSON.stringify(props.modelColor));
  });

  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("wireframe")) ?? false
  );

  const handleCheckboxChange = () => {
    const newWireframeValue = !isChecked;
    setIsChecked(newWireframeValue);

    if (props.handleChange) {
      props.handleChange({
        target: { name: "wireframe", value: newWireframeValue },
      });
    }
  };

  //Model submenu form
  const [showModelOptions, setShowModelOptions] = useState(false);

  //lights submenu form
  const [showLightOptions, setShowLightOptions] = useState(false);

  //Populate material options
  function materialOptions() {
    if (props.modelMat === "meshStandardMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            The standard mesh material reacts to lights and shadows (and is more
            expensive to create), metalness and roughness values create a more
            realistic looking object.
          </p>
          <br />
          <label style={{ color: `${props.labelColor}` }}>Model Colour</label>

          <input
            type={"color"}
            name={"modelColor"}
            onChange={props.handleChange}
            value={props.modelColor || ""}
          />

          <br />

          <label style={{ color: `${props.labelColor}` }}>
            Specular Colour
          </label>

          <input
            type={"color"}
            name={"specularColor"}
            onChange={props.handleChange}
            value={props.specularColor || ""}
          />

          <br />

          <label style={{ color: `${props.labelColor}` }}>
            Model Metalness
          </label>

          <input
            className="sliderPos"
            type={"range"}
            name={"metalness"}
            min={0}
            max={10}
            step={0.01}
            onChange={props.handleChange}
            value={props.metalness || ""}
          />

          <br />
          <br />

          <label style={{ color: `${props.labelColor}` }}>
            Model Roughness
          </label>

          <input
            className="sliderPos"
            type={"range"}
            name={"roughness"}
            min={0}
            max={10}
            step={0.01}
            onChange={props.handleChange}
            value={props.roughness || ""}
          />
        </>
      );
    } else if (props.modelMat === "meshBasicMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            The basic mesh material doesn't react to lights and is flat-shaded,
            meaning it is cheap to create and best suited for background
            elements.
          </p>

          <br />
          <label style={{ color: `${props.labelColor}` }}>Model Colour</label>

          <input
            type={"color"}
            name={"modelColor"}
            onChange={props.handleChange}
            value={props.modelColor || ""}
          />
        </>
      );
    } else if (props.modelMat === "meshPhongMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            Phong mesh materials are often used to represent glass or glossy
            surfaces, for example, plastic.
          </p>
          <br />
          <label style={{ color: `${props.labelColor}` }}>Model Colour</label>

          <input
            type={"color"}
            name={"modelColor"}
            onChange={props.handleChange}
            value={props.modelColor || ""}
          />

          <br />

          <label style={{ color: `${props.labelColor}` }}>
            Specular Colour
          </label>

          <input
            type={"color"}
            name={"specularColor"}
            onChange={props.handleChange}
            value={props.specularColor || ""}
          />

          <br />

          <label style={{ color: `${props.labelColor}` }}>Shininess</label>

          <input
            className="sliderPos"
            type={"range"}
            name={"shininess"}
            min={30}
            max={100}
            step={0.01}
            onChange={props.handleChange}
            value={props.shininess || ""}
          />
        </>
      );
    } else if (props.modelMat === "meshToonMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            Toon mesh materials represent cel shading and make models look
            cartoonish.
          </p>
          <br />

          <label style={{ color: `${props.labelColor}` }}>Model Colour</label>

          <input
            type={"color"}
            name={"modelColor"}
            onChange={props.handleChange}
            value={props.modelColor || ""}
          />
        </>
      );
    } else if (props.modelMat === "meshNormalMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            Normal mesh materials map the normal vectors of a shape to rgb
            colors. No options for this material.
          </p>
        </>
      );
    } else if (props.modelMat === "meshBasicMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            The normal mesh material reacts to lights and shadows and will show
            the geometry normals with different colours depending on the
            closeness of the camera, no tweakable effects for this material.
          </p>
        </>
      );
    } else if (props.modelMat === "pointsMaterial") {
      return (
        <>
          <p style={{ color: `${props.pColor}` }}>
            The points material shows all the vertices of the selected model.
          </p>

          <br />

          <label style={{ color: `${props.labelColor}` }}>Model Colour</label>

          <input
            type={"color"}
            name={"modelColor"}
            onChange={props.handleChange}
            value={props.modelColor || ""}
          />
        </>
      );
    }
  }

  return (
    <>
      <form className="p-2 col-12 col-md-8 col-lg-6 m-auto modelForm">
        <div className="text-center">
          <h4 style={{ color: `${props.h1Color}` }}>Model Edit Options</h4>
        </div>

        {/*Click to show or hide model options form*/}
        <div className="text-center w-100 m-auto">
          <FormButton
            className="form-btn-primary col-xs-12 col-sm-10 col-md-10 col-lg-8 my-2"
            type="button"
            buttonGradientAngle={props.buttonGradientAngle}
            buttonGradientColor1={props.buttonGradientColor1}
            buttonGradientColor2={props.buttonGradientColor2}
            text={
              showModelOptions ? (
                <div className="buttonText">Edit Model x </div>
              ) : (
                <div className="buttonText">Edit Model </div>
              )
            }
            colour={props.buttonTextColor}
            onClick={() => setShowModelOptions(!showModelOptions)}
          ></FormButton>
        </div>

        {/*Model options*/}
        {showModelOptions && (
          <div className="p-2">
            <label style={{ color: `${props.labelColor}` }}>Model Type</label>
            <br />
            <select
              value={props.modelType || "cube"}
              name={"modelType"}
              onChange={props.handleChange}
            >
              <option value="cube">Cube</option>
              <option value="cylinder">Cylinder</option>
              <option value="dodecahedron">Dodecahedron</option>
              <option value="generated">Generated Terrain</option>
              <option value="sphere">Sphere</option>
              <option value="text">Text</option>
              <option value="torus">Torus</option>
              <option value="torusKnot">Torus Knot</option>
              <option value="tube">Tube</option>
            </select>
            <br />
            <br />
            <label style={{ color: `${props.labelColor}` }}>
              Model Material
            </label>
            <br />
            <select
              value={props.modelMat || "meshNormalMaterial"}
              name={"modelMat"}
              onChange={props.handleChange}
            >
              <option value="meshBasicMaterial">MeshBasicMaterial</option>
              <option value="meshNormalMaterial">MeshNormalMaterial</option>
              <option value="meshPhongMaterial">MeshPhongMaterial</option>
              <option value="meshStandardMaterial">MeshStandardMaterial</option>
              <option value="meshToonMaterial">MeshToonMaterial</option>
              <option value="pointsMaterial">PointsMaterial</option>
            </select>
            {materialOptions()} {/*call function*/}
            {/* Show wireframe option for any materials other than points material */}
            {
              props.modelMat !== "pointsMaterial" ? (
                <>
                  <br />
                  <br />
                  <label style={{ color: `${props.labelColor}` }}>
                    Wireframe
                  </label>

                  <input
                    type={"checkbox"}
                    name={"wireframe"}
                    className="wireframe"
                    onChange={handleCheckboxChange}
                    checked={isChecked}
                  />
                </>
              ) : null //if false don't show anything
            }
          </div>
        )}

        {/*End of model options */}

        {/*Click to show or hide light options form*/}
        <div className="text-center h-100 w-100 m-auto">
          <FormButton
            className="form-btn-primary col-xs-12 col-sm-10 col-md-10 col-lg-8 my-2"
            buttonGradientAngle={props.buttonGradientAngle}
            buttonGradientColor1={props.buttonGradientColor1}
            buttonGradientColor2={props.buttonGradientColor2}
            text={
              showLightOptions ? (
                <div className="buttonText">Edit Lights x </div>
              ) : (
                <div className="buttonText">Edit Lights </div>
              )
            }
            colour={props.buttonTextColor}
            type="button"
            onClick={() => setShowLightOptions(!showLightOptions)}
          ></FormButton>
        </div>

        {/*Light options*/}
        {showLightOptions && (
          <div className="p-2">
            <label style={{ color: `${props.labelColor}` }}>
              Ambient Light Colour
            </label>

            <input
              type={"color"}
              name={"ambientLightColor"}
              onChange={props.handleChange}
              value={props.ambientLightColor || ""}
            />

            <br />

            <label style={{ color: `${props.labelColor}` }}>Light Colour</label>

            <input
              type={"color"}
              name={"lightColor"}
              onChange={props.handleChange}
              value={props.lightColor || ""}
            />

            <br />

            <label style={{ color: `${props.labelColor}` }}>
              Left/Right Light Position
            </label>

            <input
              className="sliderPos"
              type={"range"}
              name={"lightPositionx"}
              min={-10}
              max={10}
              step={0.01}
              onChange={props.handleChange}
              value={props.lightPositionx || ""}
            />

            <br />

            <label style={{ color: `${props.labelColor}` }}>
              Up/Down Light Position
            </label>

            <input
              className="sliderPos"
              type={"range"}
              name={"lightPositionz"}
              min={-10}
              max={10}
              step={0.01}
              onChange={props.handleChange}
              value={props.lightPositionz || ""}
            />

            <br />

            <label style={{ color: `${props.labelColor}` }}>
              Forward/Back Light Position
            </label>

            <input
              className="sliderPos"
              type={"range"}
              name={"lightPositiony"}
              min={-10}
              max={10}
              step={0.01}
              onChange={props.handleChange}
              value={props.lightPositiony || ""}
            />

            <br />

            <label style={{ color: `${props.labelColor}` }}>
              Light Intensity
            </label>

            <input
              className="sliderPos"
              type={"range"}
              name={"lightIntensity"}
              min={0}
              max={100}
              step={0.01}
              onChange={props.handleChange}
              value={props.lightIntensity || ""}
            />
          </div>
        )}
        {/*End of light options */}
      </form>
    </>
  );
}

export default CanvasValuesForm;
