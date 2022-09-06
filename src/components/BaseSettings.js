import React from 'react';

//Must set default value otherwise you get console warning everytime colour changes
function ColorInput ({ colourValue, handleChange }) {
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

  function FontSizeOptions ({ fontSizeValue, handleChange }) {
    return (
      <>
      <select
      value={fontSizeValue}
      className="fontSize"
      onChange={handleChange} >

      <option value="1">10</option>
        <option value="2">12</option>
        <option value="3">15</option>
        <option value="4">18</option>
        <option value="5">20</option>
      </select>
      </>
    )
  }

  export {ColorInput, CheckboxInput, FontSizeOptions, RangeInput} 