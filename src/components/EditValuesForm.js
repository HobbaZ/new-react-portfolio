import React, { useEffect } from 'react';

  function EditValuesForm ({
    handleChange,
    greyscale, 
    h1Color, 
    pColor,
    linkColor,
    backgroundGradientAngle,
    backgroundGradientColor1,
    backgroundGradientColor2,
    buttonGradientAngle,
    buttonGradientColor1,
    buttonGradientColor2
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

}, [
  greyscale, 
  h1Color, 
  pColor, 
  linkColor, 
  backgroundGradientAngle, 
  backgroundGradientColor1, 
  backgroundGradientColor2, 
  buttonGradientAngle, 
  buttonGradientColor1, 
  buttonGradientColor2
]);

        return (
            <>
                
                <form>
                <h1 className='text-center'>HTML Edit Options</h1>

                <label className='label'>{greyscale ? "Enable": "Disable"} Greyscale</label>
                <input type={"checkbox"}
                name= {"greyscale"}
                onChange={handleChange}
                defaultChecked={greyscale}
                />

                <br />

                <label className='label'>Heading Colour</label>
                <input type={"color"}
                name= {"h1Color"}
                onChange={handleChange}
                defaultValue={h1Color}
                />

                <br />

                <label className='label'>Paragraph / label Colour</label>
                <input type={"color"}
                name= {"pColor"}
                onChange={handleChange}
                defaultValue={pColor}
                />

                <br />

                <label className='label'>Link Colour</label>
                <input type={"color"}
                name= {"linkColor"}
                onChange={handleChange}
                defaultValue={linkColor}
                />

                <br />

                <label className='label'>Background Gradient</label><br />
                
                <label className='label'>Angle</label>
                <input type={"text"}
                name= {'backgroundGradientAngle'}
                onChange={handleChange}
                defaultValue={backgroundGradientAngle}
                />

                <br />

                <label className='label'>Colours</label>
                <input type={"color"}
                name= {"backgroundGradientColor2"}
                onChange={handleChange}
                defaultValue={backgroundGradientColor2}
                />

                <input type={"color"}
                name= {"backgroundGradientColor1"}
                onChange={handleChange}
                defaultValue={backgroundGradientColor1}
                />

                <hr />

                <label className='label'>Button Gradient</label><br />

                <label className='label'>Angle</label>
                <input type={"text"}
                name= {"buttonGradientAngle"}
                onChange={handleChange}
                defaultValue={buttonGradientAngle}
                />

                <br />

                <label className='label'>Colours</label>
                <input type={"color"}
                name= {"buttonGradientColor2"}
                onChange={handleChange}
                defaultValue={buttonGradientColor2}
                />

                <input type={"color"}
                name= {"buttonGradientColor1"}
                onChange={handleChange}
                defaultValue={buttonGradientColor1}
                />

                </form>
        </>
        )
}

export default EditValuesForm