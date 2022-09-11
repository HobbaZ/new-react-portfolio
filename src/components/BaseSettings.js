import React from 'react';

//Must set default value otherwise you get console warning everytime colour changes
function ColorInput ({ colourValue, handleChange}) {
    return (
      <>
      <input type="color"
      className="MaterialColor"
      value={colourValue}
      defaultValue={"#ffffff"}
      onChange={handleChange} />
      </>
    )
  }

  function CheckboxInput ({ checkBoxValue, handleChange }) {
    return (
      <>
      <input type="checkbox"
      checked= {checkBoxValue}
      className="checkbox"
      onChange={handleChange} />
      </>
    )
  }

  function RangeInput ({value, handleChange, min, max}) {
    return (
      <>
      <input type="range"
      value={value}
      min={min}
      max={max}
      onChange={handleChange} />
      </>
    )
  }

  function TextInput ({ value, handleChange }) {
    return (
      <>
      <input type= "number"
      value={value}
      className="textInput"
      onChange={handleChange} >

      </input>
      </>
    )
  }

  export {ColorInput, CheckboxInput, TextInput, RangeInput} 