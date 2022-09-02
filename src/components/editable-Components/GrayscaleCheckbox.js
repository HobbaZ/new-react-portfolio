import React from 'react';

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

  export default GrayscaleCheckbox