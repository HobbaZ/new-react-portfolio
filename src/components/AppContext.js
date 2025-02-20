import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [userInputs, setUserInputs] = useState({
    h1Color: JSON.parse(localStorage.getItem("h1Color")) || "#ffffff",
    pColor: JSON.parse(localStorage.getItem("pColor")) || "#ffffff",
    linkColor: JSON.parse(localStorage.getItem("linkColor")) || "#ffffff",
    backgroundGradientAngle:
      JSON.parse(localStorage.getItem("backgroundGradientAngle")) || 30,
    backgroundGradientColor1:
      JSON.parse(localStorage.getItem("backgroundGradientColor1")) || "#000000",
    backgroundGradientColor2:
      JSON.parse(localStorage.getItem("backgroundGradientColor2")) || "#454545",
    buttonGradientAngle:
      JSON.parse(localStorage.getItem("buttonGradientAngle")) || 30,
    buttonGradientColor1:
      JSON.parse(localStorage.getItem("buttonGradientColor1")) || "#ff0000",
    buttonGradientColor2:
      JSON.parse(localStorage.getItem("buttonGradientColor2")) || "#ff0000",
    labelColor: JSON.parse(localStorage.getItem("labelColor")) || "#ffffff",
    buttonTextColor:
      JSON.parse(localStorage.getItem("buttonTextColor")) || "#ffffff",
    buttonOutlineColor:
      JSON.parse(localStorage.getItem("buttonOutlineColor")) || "#000000",
  });

  useEffect(() => {
    document.body.style = `background: linear-gradient(${userInputs.backgroundGradientAngle}deg, ${userInputs.backgroundGradientColor1}, ${userInputs.backgroundGradientColor2})`;

    const navLinks = document.getElementsByClassName("nav-link");

    for (let index = 0; index < navLinks.length; index++) {
      navLinks[index].style = `color: ${userInputs.linkColor}`;
    }
  }, [userInputs]);

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? !event.target.checked
        : event.target.value;

    setUserInputs((prevState) => {
      const updatedState = { ...prevState, [event.target.name]: value };

      return updatedState;
    });
  };

  return (
    <AppContext.Provider value={{ userInputs, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
