const { Ship, Gameboard, Player } = require('./gamelogic')

const playerA = new Player('human')
const playerB = new Player('computer')

// PlayerA's ships
const playerA_destroyer = new Ship(4);
const playerA_battleship1 = new Ship(3);
const playerA_battleship2 = new Ship(3);
const playerA_submarine1 = new Ship(2);
const playerA_submarine2 = new Ship(2);
const playerA_submarine3 = new Ship(2);
const playerA_patrol1 = new Ship(1);
const playerA_patrol2 = new Ship(1);
const playerA_patrol3 = new Ship(1);
const playerA_patrol4 = new Ship(1);
// Placing PlayerA's ships
playerA.board.placeShip(playerA_destroyer, [[0,9], [0,8], [0,7], [0,6]]);
playerA.board.placeShip(playerA_battleship1, [[2,7], [3,7], [4,7]]);
playerA.board.placeShip(playerA_battleship2, [[5,9], [5,8], [5,7]]);
playerA.board.placeShip(playerA_submarine1, [[3,5], [3,4]]);
playerA.board.placeShip(playerA_submarine2, [[1,3], [1,2]]);
playerA.board.placeShip(playerA_submarine3, [[5,5], [6,5]]);
playerA.board.placeShip(playerA_patrol1, [[2,1]]);
playerA.board.placeShip(playerA_patrol2, [[8,5]]);
playerA.board.placeShip(playerA_patrol3, [[8,2]]);
playerA.board.placeShip(playerA_patrol4, [[8,0]]);
// PlayerB's ships
const playerB_destroyer = new Ship(4);
const playerB_battleship1 = new Ship(3);
const playerB_battleship2 = new Ship(3);
const playerB_submarine1 = new Ship(2);
const playerB_submarine2 = new Ship(2);
const playerB_submarine3 = new Ship(2);
const playerB_patrol1 = new Ship(1);
const playerB_patrol2 = new Ship(1);
const playerB_patrol3 = new Ship(1);
const playerB_patrol4 = new Ship(1);
// Placing PlayerB's ships
// Placing PlayerB's ships (same positions as PlayerA)
playerB.board.placeShip(playerB_destroyer, [[0,9], [0,8], [0,7], [0,6]]);
playerB.board.placeShip(playerB_battleship1, [[2,7], [3,7], [4,7]]);
playerB.board.placeShip(playerB_battleship2, [[5,9], [5,8], [5,7]]);
playerB.board.placeShip(playerB_submarine1, [[3,5], [3,4]]);
playerB.board.placeShip(playerB_submarine2, [[1,3], [1,2]]);
playerB.board.placeShip(playerB_submarine3, [[5,5], [6,5]]);
playerB.board.placeShip(playerB_patrol1, [[2,1]]);
playerB.board.placeShip(playerB_patrol2, [[8,5]]);
playerB.board.placeShip(playerB_patrol3, [[8,2]]);
playerB.board.placeShip(playerB_patrol4, [[8,0]]);