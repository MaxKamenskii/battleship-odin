import "./styles.css";
import { Ship, Gameboard, Player } from "./gamelogic.js";
import { playerA, playerB, randomShipPlacement } from "./battleship.js";

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

function computerTurn() {
  // Computer attack and returns the coordinates
  const [x, y] = playerB.aiAttack(playerA);

  // Find the cell on PlayerA's board and update it
  const cellId = `cellA ${x},${y}`;
  const cell = document.getElementById(cellId);

  // Check if it was a hit or miss
  const ship = playerA.board.getShipAt([x, y]);

  if (ship !== "not found") {
    cell.style.backgroundColor = "red";
  } else {
    cell.style.backgroundColor = "white";
  }

  cell.style.pointerEvents = "none";
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
      if (playerB.board.areSunk()) {
        alert("You won! All enemy ships destroyed!");
        return;
      }
      computerTurn();

      if (playerA.board.areSunk()) {
        alert("Computer won! All your ships destroyed!");
        return;
      }
    }
  });
}

function clearVisualBoard(playerLetter) {
  const board = document.getElementById(`Player${playerLetter}_board`);
  const cells = board.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.style.backgroundColor = "";
    cell.style.pointerEvents = "";
  });
}

function setupRandomizeButton() {
  const button = document.getElementById("randomize-btn");

  button.addEventListener("click", () => {
    playerA.board.clearBoard();
    playerB.board.clearBoard();

    // Clear visual boards
    clearVisualBoard("A");
    clearVisualBoard("B");
    // Place new random ships
    const shipLengths = [4, 3, 3, 2, 2, 1, 1, 1, 1];
    // Place ships randomaly
    randomShipPlacement(playerA, shipLengths);
    randomShipPlacement(playerB, shipLengths);

    renderShips(playerA.board, "A");
  });
}
createBoard("A");
createBoard("B");
// Initial ship placement
const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
randomShipPlacement(playerA, shipLengths);
randomShipPlacement(playerB, shipLengths);
renderShips(playerA.board, "A");

setupRandomizeButton();
setupAttackListeners();
