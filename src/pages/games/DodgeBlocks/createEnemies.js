import { randWholeNumber } from "../reusableComponents/randWholeNumber";
import { Enemy } from "./Enemy";

const createEnemies = (numOfEnemies) => {
  const enemies = [];

  function createEnemy() {
    const health = randWholeNumber(1, 10);
    const weapons = ["sword", "pistol", "axe", "spear"];
    const weapon = weapons[randWholeNumber(0, weapons.length - 1)];
    const strength = randWholeNumber(1, 3);
    const damage = 0;

    // Correcting the instantiation of Enemy
    let enemy = new Enemy(health, weapon, strength, damage);

    return enemy;
  }

  for (let i = 0; i < numOfEnemies; i++) {
    enemies.push(createEnemy());
  }

  return enemies;
};

export default createEnemies;
