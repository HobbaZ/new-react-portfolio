import React from 'react';

import { Button } from 'react-bootstrap';

//Must set default value otherwise you get console warning everytime colour changes
function ColorInput({ colourValue, handleChange, defaultValue, fieldName }) {
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

function FormButton({ buttonGradientAngle, buttonGradientColor1, buttonGradientColor2, text, className, onClick, colour, type }) {
  return (
    <>
      <Button style={{ background: `linear-gradient(${buttonGradientAngle}deg, ${buttonGradientColor1}, ${buttonGradientColor2}` }}
        onClick={onClick}
        //type={type}
        className={className}
      >
        <div style={{ color: `${colour}`, fontSize: '20px' }}>{text}</div>
      </Button>
    </>
  )
}

export { ColorInput, FormButton } 