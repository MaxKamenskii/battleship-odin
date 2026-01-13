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
    // console.log(ship);
    for (let key in ship) {
      // console.log(`Key is: ${key}`);
      let id = `cell${letter} ${key}`;
      let cell = document.getElementById(id);
      // console.log(id);
      if (letter == "A") {
        cell.style.backgroundColor = "grey";
      }
    }
    // console.log(coord);
  }
}

function setupAttackListeners() {
  const enemyBoard = document.getElementById("PlayerB_board");
  console.log("PlayerB ships:", playerB.board.ships);
  enemyBoard.addEventListener("click", (el) => {
    if (el.target.classList.contains("cell")) {
      const cellId = el.target.id;
      // Extract coordinates from cellid
      const coordinates = cellId.toString().split(" ")[1];
      const x = parseInt(coordinates.split(",")[0]);
      const y = parseInt(coordinates.split(",")[1]);
      // console.log(`X and Y are: ${x} and ${y}`);
      // check if there is ship at those coordinates
      const ship = playerB.board.getShipAt([x, y]);
      if (ship == "not found") {
        playerA.attack(playerB, [x, y]);
        el.target.style.backgroundColor = "white";
        el.target.style.pointerEvents = "none";
      } else if (ship !== "not found") {
        playerA.attack(playerB, [x, y]);
        el.target.style.backgroundColor = "red";
        el.target.style.pointerEvents = "none";
      }
      // Attack playerB at those coordinates

      // Update the cell color based on hit/miss
    }
  });
}

createBoard("A");
createBoard("B");

renderShips(playerA.board, "A");
renderShips(playerB.board, "B");

setupAttackListeners();
