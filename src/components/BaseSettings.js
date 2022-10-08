import React from 'react';

import { Button } from 'react-bootstrap';

//Must set default value otherwise you get console warning everytime colour changes
function ColorInput ({ colourValue, handleChange, defaultValue, fieldName}) {
    return (
      <>
      <input type="color"
      name={fieldName}
      className="colorInput w-25 p-0"
      value={colourValue || defaultValue}
      onChange={handleChange} />
      </>
    )
  }

  function CheckboxInput ({ checkBoxValue, handleChange, defaultValue }) {
    return (
      <>
      <input type="checkbox"
      checked= {checkBoxValue || defaultValue}
      className="checkboxInput"
      onChange={handleChange} />
      </>
    )
  }

  function RangeInput ({rangeValue, handleChange, min, max, defaultValue}) {
    return (
      <>
      <input type="range"
      value={rangeValue || defaultValue}
      min={min}
      max={max}
      onChange={handleChange} />
      </>
    )
  }

  function TextInput ({ textValue, handleChange, defaultValue }) {
    return (
      <>
      <input type= "number"
      value={textValue || defaultValue}
      className="textInput"
      onChange={handleChange} >

      </input>
      </>
    )
  }

  function P ({valueToChange, text}) {
    return (
        <>
        <p style = {{color: (valueToChange)}}>
            {text}
        </p>
        </>
    )
  }

  function Heading ({valueToChange, text}) {
    return (
        <>
        <h1 style = {{color: (valueToChange)}}>
        {text}
        </h1>
        </>
    )
  }

  function Label ({valueToChange, text}) {
    return (
        <>
        <label style = {{color: (valueToChange)}}>
        {text}
        </label>
        </>
    )
  }

  function FormButton ({buttonGradientAngle, buttonGradientColor1, buttonGradientColor2, text, className, onClick, colour}) {
    return (
        <>
        <Button style = {{background: `linear-gradient(${buttonGradientAngle}deg, ${buttonGradientColor1}, ${buttonGradientColor2}`}}
        onClick ={onClick}
        className={className}
        >
            <div style = {{color: `${colour}`}}>{text}</div>
        </Button>
        </>
    )
  }

  /*function ButtonText ({colour}) {
    return (
        <>
        <Button style = {{color: `${colour}`}} />
        </>
    )
  }*/

  export {ColorInput, CheckboxInput, P, Heading, Label, TextInput, RangeInput, FormButton} 