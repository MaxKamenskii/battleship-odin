import "./styles.css";
import { Ship, Gameboard, Player } from "./gamelogic.js";
import { playerA, playerB } from "./battleship.js";

console.log("this is working");

function createBoard(playerLetter) {
  let container = document.getElementById(`Player${playerLetter}_board`);
  for (let i = 9; i >= 0; i--) {
    for (let k = 0; k < 10; k++) {
      // create a div element
      const newDiv = document.createElement("div");
      // Apply class
      newDiv.classList.add("cell");

      // Create and apply an id
      newDiv.id = `cell${playerLetter} ${i},${k}`;
      // Set the proper size of each accoding to the size of the box;
      newDiv.style.width = `${460 / 10}px`;
      newDiv.style.height = `${460 / 10}px`;
      // append container
      container.appendChild(newDiv);
    }
  }
}

function renderShips(gameboard, letter) {
  for (let ship of gameboard.ships) {
    console.log(ship);
    for (let key in ship) {
      console.log(`Key is: ${key}`);
      let id = `cell${letter} ${key}`;
      let cell = document.getElementById(id);
      console.log(id);
      cell.style.backgroundColor = "black";
    }
    // console.log(coord);
  }
}

createBoard("A");
createBoard("B");

renderShips(playerA.board, "A");
renderShips(playerB.board, "B");
