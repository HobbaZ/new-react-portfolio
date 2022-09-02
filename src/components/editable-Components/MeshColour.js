import React from 'react';

function MeshColour ({ colourValue, handleChange }) {
    return (
      <>
      <input type="color"
      className="MaterialColor"
      value={colourValue}
      onChange={handleChange} />
      </>
    )
  }

  export default MeshColour