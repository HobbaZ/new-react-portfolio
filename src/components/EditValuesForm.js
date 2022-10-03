import React, { useEffect } from 'react';

import {Heading, Label} from '../components/BaseSettings'

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

/*useEffect(() => {
  h1Color = JSON.parse(localStorage.getItem("h1Color")) || "#000000"
}, [h1Color])*/

        return (
            <>
                
                <form id='HTMLEditForm'>
                <Heading  
                valueToChange={props.h1Color}
                text="HTML Edit Options">
                </Heading>

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
                <input type={"color"}
                name= {"h1Color"}
                onChange={props.handleChange}
                value={props.h1Color || ''}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Paragraph Colour"
                ></Label>
                <input type={"color"}
                name= {"pColor"}
                onChange={props.handleChange}
                value={props.pColor || ''}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Label Colour"
                ></Label>
                <input type={"color"}
                name= {"labelColor"}
                onChange={props.handleChange}
                value={props.labelColor || ''}
                />

                <br />

                <Label
                valueToChange={props.labelColor}
                text = "Link Colour"
                ></Label>
                <input type={"color"}
                name= {"linkColor"}
                onChange={props.handleChange}
                value={props.linkColor || ''}
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