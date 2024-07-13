import React from "react";
import "./../../../App.css";
import createEnemies from "./createEnemies.js";

function Main() {
  const numOfEnemies = 10;
  const enemies = createEnemies(numOfEnemies);

  return (
    <>
      <h1>Block Dodging game</h1>
      {console.log(enemies)}
      <canvas>{/* Your canvas rendering logic here */}</canvas>
    </>
  );
}

export default Main;
