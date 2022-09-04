import React from 'react';

//Must set default value otherwise you get console warning everytime colour changes
function MeshColour ({ colourValue, handleChange }) {
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

  function GrayscaleCheckbox ({ checkBoxValue, handleChange }) {
    return (
      <>
      <input type="checkbox"
      checked= {checkBoxValue}
      className="checkbox"
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

  export {MeshColour, GrayscaleCheckbox, FontSizeOptions} 