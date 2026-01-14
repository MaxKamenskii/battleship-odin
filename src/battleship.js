// const { Ship, Gameboard, Player } = require("./gamelogic");
import { Ship, Gameboard, Player } from "./gamelogic.js";

const playerA = new Player("human");
const playerB = new Player("computer");

function getAdjacentCells(coordinate) {
  const [x, y] = coordinate;
  const adjacent = [];

  // Check all 8 directions + the cell itself
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      const newX = x + dx;
      const newY = y + dy;

      // Make sure it is within the bounds
      if (newX >= 0 && newX <= 9 && newY >= 0 && newY <= 9) {
        adjacent.push([newX, newY]);
      }
    }
  }
  return adjacent;
}

function randomShipPlacement(player, shipLengths) {
  // shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]

  shipLengths.forEach((length) => {
    let placed = false;

    while (!placed) {
      // 1. Generate random coordinates
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);

      // 2. Pick random direction (0 = horizontal, 1 = vertical)
      const direction = Math.floor(Math.random() * 2);

      // 3. Generate coordinates for the ship
      const coordinates = [];

      // Generate coordinates based on direction
      for (let i = 0; i < length; i++) {
        let coordinate = direction === 0 ? [x, y + i] : [x + i, y];
        coordinates.push(coordinate);
      }
      // Check if ship fits on board
      let fitsOnBoard = true;
      for (let c of coordinates) {
        if (c[0] > 9 || c[0] < 0 || c[1] > 9 || c[1] < 0) {
          fitsOnBoard = false;
          break;
        }
      }
      if (!fitsOnBoard) {
        continue;
      }
      // Check if ship overlaps with the existing ships
      let overlaps = false;
      for (let coord of coordinates) {
        const cellsToCheck = getAdjacentCells(coord);
        for (let cell of cellsToCheck) {
          if (player.board.getShipAt(cell) !== "not found") {
            overlaps = true;
            break;
          }
        }
        if (overlaps) break;
      }
      if (overlaps) {
        continue;
      }
      // If valid, place the ship
      const ship = new Ship(length);
      player.board.placeShip(ship, coordinates);
      placed = true;
    }
  });
}

// module.exports = { playerA, playerB, randomShipPlacement };
export { playerA, playerB, randomShipPlacement };
