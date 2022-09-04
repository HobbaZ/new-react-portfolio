import React from 'react';

function H1 ({text, colourValue1}) {
    return (
        <>
        <h1 style={{ color: `${colourValue1}`}}>{text}</h1>
        </>
    )
}

function P ({text, colourValue2}) {
    return (
        <>
        <p style={{ color: `${colourValue2}`}}>{text}</p>
        </>
    )
}

//Must set default value otherwise you get console warning everytime colour changes
function MeshColour ({ colourValue, handleChange }) {
    return (
      <>
      <input type="color"
      className="MaterialColor"
      value={colourValue}
      defaultValue="#ffffff"
      onChange={handleChange} />
      </>
    )
  }

  function GrayscaleCheckbox ({ checkBoxValue, handleChange }) {
    return (
      <>
      <label>Disable icon greyscale</label>
      <input type="checkbox"
      checked= {checkBoxValue}
      className="checkbox"
      onChange={handleChange} />
      </>
    )
  }

  export {MeshColour, H1, P, GrayscaleCheckbox} 