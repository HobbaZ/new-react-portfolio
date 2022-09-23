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

  //get all h1s
  const headings = document.getElementsByTagName("h1");

  for (let index = 0; index < headings.length; index++) {
    headings[index].style = `color: ${h1Color}`
  }

  //get all paragraphs
  const paragraphs = document.getElementsByTagName("p");

  for (let index = 0; index < paragraphs.length; index++) {
    paragraphs[index].style = `color: ${pColor}`
  }

  //Get background gradient
  document.body.style = `background: linear-gradient(${backgroundGradientAngle}deg, ${backgroundGradientColor1}, ${backgroundGradientColor2})`;

  //Get all buttons and change gradient
  const buttons = document.getElementsByTagName("button");

  for (let index = 0; index < buttons.length; index++) {
    buttons[index].style = `background: linear-gradient(${buttonGradientAngle}deg, ${buttonGradientColor1}, ${buttonGradientColor2}`;
    //buttons[index].style = `color: ${buttonTextColor}`;
  }

  //get all nav links
  const navLinks = document.getElementsByClassName("nav-link");

  for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].style = `color: ${linkColor}`
  }

  //set values on form side
  useEffect(() => {
    localStorage.setItem("greyscale", JSON.stringify(greyscale));
  }, [greyscale]);


        return (
            <>
                <h1 className='text-center'>Edit Form</h1>
                <form>

                <label>{greyscale ? "Enable": "Disable"} Greyscale</label>
                <input type={"checkbox"}
                name= {"greyscale"}
                onChange={handleChange}
                defaultChecked={greyscale}
                />

                <br />

                <label>H1 Colour</label>
                <input type={"color"}
                name= {"h1Color"}
                onChange={handleChange}
                defaultValue={h1Color}
                />

                <br />

                <label>Paragraph Colour</label>
                <input type={"color"}
                name= {"pColor"}
                onChange={handleChange}
                defaultValue={pColor}
                />

                <br />

                <label>Link Colour</label>
                <input type={"color"}
                name= {"linkColor"}
                onChange={handleChange}
                defaultValue={linkColor}
                />

                <br />

                <label>Background Gradient</label><br />
                
                <label>Angle</label>
                <input type={"text"}
                name= {'backgroundGradientAngle'}
                onChange={handleChange}
                defaultValue={backgroundGradientAngle}
                />

                <br />

                <label>Colours</label>
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

                <label>Button Gradient</label><br />

                <label>Angle</label>
                <input type={"text"}
                name= {"buttonGradientAngle"}
                onChange={handleChange}
                defaultValue={buttonGradientAngle}
                />

                <br />

                <label>Colours</label>
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