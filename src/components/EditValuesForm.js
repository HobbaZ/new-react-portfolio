import React, { useEffect } from 'react';

  function EditValuesForm ({
    handleChange,
    labelColor,
    greyscale, 
    h1Color, 
    pColor,
    linkColor,
    backgroundGradientAngle,
    backgroundGradientColor1,
    backgroundGradientColor2,
    buttonGradientAngle,
    buttonGradientColor1,
    buttonGradientColor2,
    buttonTextColor
  }) {

//set values on form side
useEffect(() => {
  localStorage.setItem("greyscale", JSON.stringify(greyscale))
  localStorage.setItem("h1Color", JSON.stringify(h1Color))
  localStorage.setItem("pColor", JSON.stringify(pColor))
  localStorage.setItem("linkColor", JSON.stringify(linkColor))
  localStorage.setItem("backgroundGradientAngle", JSON.stringify(backgroundGradientAngle))
  localStorage.setItem("backgroundGradientColor1", JSON.stringify(backgroundGradientColor1))
  localStorage.setItem("backgroundGradientColor2", JSON.stringify(backgroundGradientColor2))
  localStorage.setItem("buttonGradientAngle", JSON.stringify(buttonGradientAngle))
  localStorage.setItem("buttonGradientColor1", JSON.stringify(buttonGradientColor1))
  localStorage.setItem("buttonGradientColor2", JSON.stringify(buttonGradientColor2))
  localStorage.setItem("labelColor", JSON.stringify(labelColor))
  localStorage.setItem("buttonTextColor", JSON.stringify(buttonTextColor))

} ,[
  greyscale, 
  h1Color, 
  pColor, 
  linkColor, 
  backgroundGradientAngle, 
  backgroundGradientColor1, 
  backgroundGradientColor2, 
  buttonGradientAngle, 
  buttonGradientColor1, 
  buttonGradientColor2,
  labelColor,
  buttonTextColor
]);

        return (
            <>
                
                <form>
                <h1 className='text-center'>HTML Edit Options</h1>

                <label>{greyscale ? "Enable": "Disable"} Greyscale</label>
                <input type={"checkbox"}
                name= {"greyscale"}
                onChange={handleChange}
                checked={greyscale || false}
                />

                <br />

                <label>Heading Colour</label>
                <input type={"color"}
                name= {"h1Color"}
                onChange={handleChange}
                value={h1Color || '#000000'}
                />

                <br />

                <label>Paragraph Colour</label>
                <input type={"color"}
                name= {"pColor"}
                onChange={handleChange}
                value={pColor || '#000000'}
                />

                <br />

                <label>label Colour</label>
                <input type={"color"}
                name= {"labelColor"}
                onChange={handleChange}
                value={labelColor || '#000000'}
                />

                <br />

                <label>Link Colour</label>
                <input type={"color"}
                name= {"linkColor"}
                onChange={handleChange}
                value={linkColor || '#000000'}
                />

                <br />

                <label>Background Gradient</label><br />
                
                <label>Angle</label>
                <input type={"text"}
                placeholder="0"
                name= {'backgroundGradientAngle'}
                onChange={handleChange}
                value={backgroundGradientAngle || "0"}
                />

                <br />

                <label>Colours</label>
                <input type={"color"}
                name= {"backgroundGradientColor2"}
                onChange={handleChange}
                value={backgroundGradientColor2 || '#ffffff'}
                />

                <input type={"color"}
                name= {"backgroundGradientColor1"}
                onChange={handleChange}
                value={backgroundGradientColor1 || '#ffffff'}
                />

                <br />

                <label>Button Gradient</label><br />

                <label>Angle</label>
                <input type={"text"}
                name= {"buttonGradientAngle"}
                placeholder="0"
                onChange={handleChange}
                value={buttonGradientAngle || "0"}
                />

                <br />

                <label>Colours</label>
                <input type={"color"}
                name= {"buttonGradientColor2"}
                onChange={handleChange}
                value={buttonGradientColor2 || '#000000'}
                />

                <input type={"color"}
                name= {"buttonGradientColor1"}
                onChange={handleChange}
                value={buttonGradientColor1 || '#000000'}
                />

                <br />

                <label>Button Text Colour</label>
                <input type={"color"}
                name= {"buttonTextColor"}
                onChange={handleChange}
                value={buttonTextColor || '#ffffff'}
                />

                </form>
        </>
        )
}

export default EditValuesForm