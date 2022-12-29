import React, { useEffect } from 'react';

import {ColorInput} from '../components/BaseSettings'

  function EditValuesForm ({
    ...props
  }) {

//set values on form side
useEffect(() => {
  localStorage.setItem("greyscale", JSON.stringify(props.greyscale))
  localStorage.setItem("h1Color", JSON.stringify(props.h1Color)) 
  localStorage.setItem("pColor", JSON.stringify(props.pColor))
  localStorage.setItem("linkColor", JSON.stringify(props.linkColor))
  localStorage.setItem("backgroundGradientAngle", JSON.stringify(props.backgroundGradientAngle))
  localStorage.setItem("backgroundGradientColor1", JSON.stringify(props.backgroundGradientColor1))
  localStorage.setItem("backgroundGradientColor2", JSON.stringify(props.backgroundGradientColor2))
  localStorage.setItem("buttonGradientAngle", JSON.stringify(props.buttonGradientAngle))
  localStorage.setItem("buttonGradientColor1", JSON.stringify(props.buttonGradientColor1))
  localStorage.setItem("buttonGradientColor2", JSON.stringify(props.buttonGradientColor2))
  localStorage.setItem("labelColor", JSON.stringify(props.labelColor))
  localStorage.setItem("buttonTextColor", JSON.stringify(props.buttonTextColor))

} ,[
  props.greyscale, 
  props.h1Color, 
  props.pColor, 
  props.linkColor, 
  props.backgroundGradientAngle, 
  props.backgroundGradientColor1, 
  props.backgroundGradientColor2, 
  props.buttonGradientAngle, 
  props.buttonGradientColor1, 
  props.buttonGradientColor2,
  props.labelColor,
  props.buttonTextColor,
]);

        return (
            <>
               <div className="htmlEditContainer"> 
                <form className='p-2 htmlForm w-100'>

                <h4 style={{color: `${props.h1Color}`, 'textAlign': 'center'} }>
                HTML Edit Options
                </h4>

                <label style={{color: `${props.labelColor}`}}>
                  {props.greyscale ? "Enable Greyscale": "Disable Greyscale"}
                </label>

                <input type={"checkbox"}
                name= {"greyscale"}
                onChange={props.handleChange}
                checked={props.greyscale || false}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Heading Colour
                </label>

                <ColorInput
                colourValue={props.h1Color}
                defaultValue={"#000000"}
                fieldName={"h1Color"}
                handleChange={props.handleChange}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Paragraph Colour
                </label>

                <ColorInput
                colourValue={props.pColor}
                defaultValue={"#000000"}
                fieldName={"pColor"}
                handleChange={props.handleChange}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Label Colour
                </label>

                <ColorInput
                colourValue={props.labelColor}
                defaultValue={"#000000"}
                fieldName={"labelColor"}
                handleChange={props.handleChange}
                />

                <br />

                <label style={{color: `${props.labelColor}`}}>
                Link Colour
                </label>
                <ColorInput
                colourValue={props.linkColor}
                defaultValue={"#000000"}
                fieldName={"linkColor"}
                handleChange={props.handleChange}
                />

                <br />

                <label style={{color: `${props.labelColor}`}}>
                <b>Background Gradient</b>
                </label>
                <br />
                
                <label style={{color: `${props.labelColor}`}}>
                Angle
                </label>

                <input type={"text"}
                placeholder="0"
                name= {'backgroundGradientAngle'}
                onChange={props.handleChange}
                value={props.backgroundGradientAngle || ""}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Colours
                </label>

                <input type={"color"}
                name= {"backgroundGradientColor2"}
                onChange={props.handleChange}
                value={props.backgroundGradientColor2 || ''}
                />

                <input type={"color"}
                name= {"backgroundGradientColor1"}
                onChange={props.handleChange}
                value={props.backgroundGradientColor1 || ''}
                />

                <br />

                <label style={{color: `${props.labelColor}`}}>
                <b>Button Gradient</b>
                </label>
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Angle
                </label>

                <input type={"text"}
                name= {"buttonGradientAngle"}
                placeholder="0"
                onChange={props.handleChange}
                value={props.buttonGradientAngle || ""}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Colours
                </label>

                <input type={"color"}
                name= {"buttonGradientColor2"}
                onChange={props.handleChange}
                value={props.buttonGradientColor2 || ''}
                />

                <input type={"color"}
                name= {"buttonGradientColor1"}
                onChange={props.handleChange}
                value={props.buttonGradientColor1 || ''}
                />
                <br />

                <label style={{color: `${props.labelColor}`}}>
                Button Text
                </label>

                <input type={"color"}
                name= {"buttonTextColor"}
                onChange={props.handleChange}
                value={props.buttonTextColor || ''}
                />

                </form>
                </div>
        </>
        )
}

export default EditValuesForm