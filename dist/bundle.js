/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./battleship.js"
/*!***********************!*\
  !*** ./battleship.js ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{const { Ship, Gameboard, Player } = __webpack_require__(/*! ./gamelogic */ \"./gamelogic.js\");\n\nconst playerA = new Player(\"human\");\nconst playerB = new Player(\"computer\");\n\n// PlayerA's ships\nconst playerA_destroyer = new Ship(4);\nconst playerA_battleship1 = new Ship(3);\nconst playerA_battleship2 = new Ship(3);\nconst playerA_submarine1 = new Ship(2);\nconst playerA_submarine2 = new Ship(2);\nconst playerA_submarine3 = new Ship(2);\nconst playerA_patrol1 = new Ship(1);\nconst playerA_patrol2 = new Ship(1);\nconst playerA_patrol3 = new Ship(1);\nconst playerA_patrol4 = new Ship(1);\n// Placing PlayerA's ships\nplayerA.board.placeShip(playerA_destroyer, [\n  [0, 9],\n  [0, 8],\n  [0, 7],\n  [0, 6],\n]);\nplayerA.board.placeShip(playerA_battleship1, [\n  [2, 7],\n  [3, 7],\n  [4, 7],\n]);\nplayerA.board.placeShip(playerA_battleship2, [\n  [5, 9],\n  [5, 8],\n  [5, 7],\n]);\nplayerA.board.placeShip(playerA_submarine1, [\n  [3, 5],\n  [3, 4],\n]);\nplayerA.board.placeShip(playerA_submarine2, [\n  [1, 3],\n  [1, 2],\n]);\nplayerA.board.placeShip(playerA_submarine3, [\n  [5, 5],\n  [6, 5],\n]);\nplayerA.board.placeShip(playerA_patrol1, [[2, 1]]);\nplayerA.board.placeShip(playerA_patrol2, [[8, 5]]);\nplayerA.board.placeShip(playerA_patrol3, [[8, 2]]);\nplayerA.board.placeShip(playerA_patrol4, [[8, 0]]);\n// PlayerB's ships\nconst playerB_destroyer = new Ship(4);\nconst playerB_battleship1 = new Ship(3);\nconst playerB_battleship2 = new Ship(3);\nconst playerB_submarine1 = new Ship(2);\nconst playerB_submarine2 = new Ship(2);\nconst playerB_submarine3 = new Ship(2);\nconst playerB_patrol1 = new Ship(1);\nconst playerB_patrol2 = new Ship(1);\nconst playerB_patrol3 = new Ship(1);\nconst playerB_patrol4 = new Ship(1);\n// Placing PlayerB's ships\n// Placing PlayerB's ships (same positions as PlayerA)\nplayerB.board.placeShip(playerB_destroyer, [\n  [0, 9],\n  [0, 8],\n  [0, 7],\n  [0, 6],\n]);\nplayerB.board.placeShip(playerB_battleship1, [\n  [2, 7],\n  [3, 7],\n  [4, 7],\n]);\nplayerB.board.placeShip(playerB_battleship2, [\n  [5, 9],\n  [5, 8],\n  [5, 7],\n]);\nplayerB.board.placeShip(playerB_submarine1, [\n  [3, 5],\n  [3, 4],\n]);\nplayerB.board.placeShip(playerB_submarine2, [\n  [1, 3],\n  [1, 2],\n]);\nplayerB.board.placeShip(playerB_submarine3, [\n  [5, 5],\n  [6, 5],\n]);\nplayerB.board.placeShip(playerB_patrol1, [[2, 1]]);\nplayerB.board.placeShip(playerB_patrol2, [[8, 5]]);\nplayerB.board.placeShip(playerB_patrol3, [[8, 2]]);\nplayerB.board.placeShip(playerB_patrol4, [[8, 0]]);\n\nmodule.exports = { playerA, playerB };\n\n\n//# sourceURL=webpack:///./battleship.js?\n}");

/***/ },

/***/ "./dom.js"
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship.js */ \"./battleship.js\");\n/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_battleship_js__WEBPACK_IMPORTED_MODULE_0__);\nconst { Ship, Gameboard, Player } = __webpack_require__(/*! ./gamelogic */ \"./gamelogic.js\");\n\n\nconsole.log(\"this is working\");\n\nfunction createBoard() {\n  let container = document.getElementById(\"PlayerA_board\");\n  for (let i = 0; i < 10; i++) {\n    for (let k = 0; k < 10; k++) {\n      // create a div element\n      const newDiv = document.createElement(\"div\");\n      // Apply class\n      newDiv.classList.add(\"cell\");\n      // Set the proper size of each accoding to the size of the box;\n      newDiv.style.width = `${460 / 10}px`;\n      newDiv.style.height = `${460 / 10}px`;\n      // append container\n      container.appendChild(newDiv);\n    }\n  }\n}\n\nfunction renderShips(gameboard) {\n  for (let ship of gameboard.ships) {\n    console.log(ship);\n  }\n}\n\ncreateBoard();\n\nrenderShips(_battleship_js__WEBPACK_IMPORTED_MODULE_0__.playerA.board);\n\n\n//# sourceURL=webpack:///./dom.js?\n}");

/***/ },

/***/ "./gamelogic.js"
/*!**********************!*\
  !*** ./gamelogic.js ***!
  \**********************/
(module) {

eval("{class Ship {\n  constructor(length) {\n    this.length = length;\n    this.damage = 0;\n    this.sunk = false;\n  }\n  hit() {\n    this.damage++;\n    if(this.damage === this.length){\n      this.sunk = true\n    }\n  }\n}\n\nclass Gameboard {\n  constructor() {\n    this.missedAttacks = [];\n    this.ships = [];\n    this.missedAttacks = new Set();\n  }\n  placeShip(ship, coordinates) {\n    let unit = {};\n    // ship = new Ship(coordinates.length);\n    coordinates.forEach((el) => {\n      let key = el.toString();\n      unit[key] = ship;\n    });\n    this.ships.push(unit);\n  }\n  getShipAt(coordinates) {\n    // lets say it's [0,0]\n    // Iterate over everyship on the board\n    for (let ship of this.ships) {\n      let found;\n      // check if this ship has coordinate\n      if (ship.hasOwnProperty(coordinates.toString())) {\n        let key = coordinates.toString();\n        return ship[key];\n      }\n      // when finished searching check if found still false and return\n      if (!found) {\n        return \"not found\";\n      }\n    }\n  }\n  receiveAttack(coordinates) {\n    for (let ship of this.ships) {\n      let found;\n      if (ship.hasOwnProperty(coordinates.toString())) {\n        let key = coordinates.toString();\n        ship[key].hit();\n        return 0;\n      }\n    }\n    let key = coordinates.toString();\n    if (!this.missedAttacks.has(key)) {\n      this.missedAttacks.add(key);\n      return;\n    } else {\n      return \"You already hit here\";\n    }\n  }\n  areSunk() {\n    let sunk;\n    this.ships.forEach((ship) => {\n      sunk = Object.values(ship)[0].sunk;\n    });\n    return sunk;\n  }\n}\n\nclass Player {\n    constructor(type) {\n        this.type = type\n        this.board = new Gameboard()\n    }\n    attack(player, coordinates) {\n        player.board.receiveAttack(coordinates)\n    }\n    aiAttack(player) {\n        function randomPosition(){\n            return Math.floor(Math.random() * 10);\n        }\n        player.board.receiveAttack([randomPosition(), randomPosition()])\n    }\n}\n\nmodule.exports = { Ship, Gameboard, Player };\n\n//# sourceURL=webpack:///./gamelogic.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dom.js");
/******/ 	
/******/ })()
;