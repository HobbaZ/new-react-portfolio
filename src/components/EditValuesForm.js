import React, { useEffect } from 'react';

import {H4, Label, ColorInput} from '../components/BaseSettings'

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
                
                <form>
                <H4  
                valueToChange={props.h1Color}
                text="HTML Edit Options">
                </H4>

                <Label
                valueToChange={props.labelColor}
                text = {props.greyscale ? "Enable Greyscale": "Disable Greyscale"}
                ></Label>

                <input type={"checkbox"}
                name= {"greyscale"}
                onChange={props.handleChange}
                checked={props.greyscale || false}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Heading Colour"
                ></Label>

                <ColorInput
                colourValue={props.h1Color}
                defaultValue={"#000000"}
                fieldName={"h1Color"}
                handleChange={props.handleChange}
                />
                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Paragraph Colour"
                ></Label>
                <ColorInput
                colourValue={props.pColor}
                defaultValue={"#000000"}
                fieldName={"pColor"}
                handleChange={props.handleChange}
                />
                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Label Colour"
                ></Label>
                <ColorInput
                colourValue={props.labelColor}
                defaultValue={"#000000"}
                fieldName={"labelColor"}
                handleChange={props.handleChange}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Link Colour"
                ></Label>
                <ColorInput
                colourValue={props.linkColor}
                defaultValue={"#000000"}
                fieldName={"linkColor"}
                handleChange={props.handleChange}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Background Gradient"
                ></Label>
                <br />
                
                <Label
                valueToChange={props.labelColor}
                text = "Angle"
                ></Label>
                <input type={"text"}
                placeholder="0"
                name= {'backgroundGradientAngle'}
                onChange={props.handleChange}
                value={props.backgroundGradientAngle || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Colours"
                ></Label>
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

                <Label
                valueToChange={props.labelColor}
                text = "Button Gradient"
                ></Label>
                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Angle"
                ></Label>
                <input type={"text"}
                name= {"buttonGradientAngle"}
                placeholder="0"
                onChange={props.handleChange}
                value={props.buttonGradientAngle || ""}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Colours"
                ></Label>
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

                <Label
                valueToChange={props.labelColor}
                text = "Button Text"
                ></Label>
                <input type={"color"}
                name= {"buttonTextColor"}
                onChange={props.handleChange}
                value={props.buttonTextColor || ''}
                />

                </form>
        </>
        )
}

export default EditValuesForm