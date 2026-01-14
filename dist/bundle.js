/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --cell-highlight: 255, 0, 0;\n}\n\nbody {\n  background-color: aliceblue;\n}\n#playerBlocksContainer {\n  display: flex;\n  justify-content: space-evenly;\n}\n#PlayerA_board {\n  display: flex;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 10px;\n  border-color: black;\n  width: 460px;\n  height: 460px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: none;\n  aspect-ratio: 1 / 1;\n  order: 1;\n}\n#PlayerB_board {\n  display: flex;\n  border-style: solid;\n  border-width: 10px;\n  border-radius: 10px;\n  border-color: black;\n  width: 460px;\n  height: 460px;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  gap: none;\n  aspect-ratio: 1 / 1;\n  order: 1;\n}\n\n.cell {\n  background-color: rgb(110, 96, 78);\n  margin: none;\n  outline: 1px solid black;\n  background-color: rgb(8, 159, 240);\n  aspect-ratio: 1/1;\n}\n\n.cell:hover {\n  filter: brightness(0.8);\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/battleship.js"
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playerA: () => (/* binding */ playerA),\n/* harmony export */   playerB: () => (/* binding */ playerB),\n/* harmony export */   randomShipPlacement: () => (/* binding */ randomShipPlacement)\n/* harmony export */ });\n/* harmony import */ var _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamelogic.js */ \"./src/gamelogic.js\");\n// const { Ship, Gameboard, Player } = require(\"./gamelogic\");\n\n\nconst playerA = new _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"human\");\nconst playerB = new _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"computer\");\n\nfunction getAdjacentCells(coordinate) {\n  const [x, y] = coordinate;\n  const adjacent = [];\n\n  // Check all 8 directions + the cell itself\n  for (let dx = -1; dx <= 1; dx++) {\n    for (let dy = -1; dy <= 1; dy++) {\n      const newX = x + dx;\n      const newY = y + dy;\n\n      // Make sure it is within the bounds\n      if (newX >= 0 && newX <= 9 && newY >= 0 && newY <= 9) {\n        adjacent.push([newX, newY]);\n      }\n    }\n  }\n  return adjacent;\n}\n\nfunction randomShipPlacement(player, shipLengths) {\n  // shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]\n\n  shipLengths.forEach((length) => {\n    let placed = false;\n\n    while (!placed) {\n      // 1. Generate random coordinates\n      const x = Math.floor(Math.random() * 10);\n      const y = Math.floor(Math.random() * 10);\n\n      // 2. Pick random direction (0 = horizontal, 1 = vertical)\n      const direction = Math.floor(Math.random() * 2);\n\n      // 3. Generate coordinates for the ship\n      const coordinates = [];\n\n      // Generate coordinates based on direction\n      for (let i = 0; i < length; i++) {\n        let coordinate = direction === 0 ? [x, y + i] : [x + i, y];\n        coordinates.push(coordinate);\n      }\n      // Check if ship fits on board\n      let fitsOnBoard = true;\n      for (let c of coordinates) {\n        if (c[0] > 9 || c[0] < 0 || c[1] > 9 || c[1] < 0) {\n          fitsOnBoard = false;\n          break;\n        }\n      }\n      if (!fitsOnBoard) {\n        continue;\n      }\n      // Check if ship overlaps with the existing ships\n      let overlaps = false;\n      for (let coord of coordinates) {\n        const cellsToCheck = getAdjacentCells(coord);\n        for (let cell of cellsToCheck) {\n          if (player.board.getShipAt(cell) !== \"not found\") {\n            overlaps = true;\n            break;\n          }\n        }\n        if (overlaps) break;\n      }\n      if (overlaps) {\n        continue;\n      }\n      // If valid, place the ship\n      const ship = new _gamelogic_js__WEBPACK_IMPORTED_MODULE_0__.Ship(length);\n      player.board.placeShip(ship, coordinates);\n      placed = true;\n    }\n  });\n}\n\n// module.exports = { playerA, playerB, randomShipPlacement };\n\n\n\n//# sourceURL=webpack:///./src/battleship.js?\n}");

/***/ },

/***/ "./src/dom.js"
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _gamelogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamelogic.js */ \"./src/gamelogic.js\");\n/* harmony import */ var _battleship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleship.js */ \"./src/battleship.js\");\n\n\n\n\nconsole.log(\"this is working\");\n\nfunction createBoard(playerLetter) {\n  let container = document.getElementById(`Player${playerLetter}_board`);\n  for (let i = 9; i >= 0; i--) {\n    for (let k = 0; k < 10; k++) {\n      // create a div element\n      const newDiv = document.createElement(\"div\");\n      // Apply class\n      newDiv.classList.add(\"cell\");\n      // Create and apply an id\n      newDiv.id = `cell${playerLetter} ${i},${k}`;\n      // Set the proper size of each accoding to the size of the box;\n      newDiv.style.width = `${460 / 10}px`;\n      newDiv.style.height = `${460 / 10}px`;\n      // append container\n      container.appendChild(newDiv);\n    }\n  }\n}\n\nfunction renderShips(gameboard, letter) {\n  for (let ship of gameboard.ships) {\n    // console.log(ship);\n    for (let key in ship) {\n      // console.log(`Key is: ${key}`);\n      let id = `cell${letter} ${key}`;\n      let cell = document.getElementById(id);\n      // console.log(id);\n      if (letter == \"A\") {\n        cell.style.backgroundColor = \"grey\";\n      }\n    }\n    // console.log(coord);\n  }\n}\n\nfunction computerTurn() {\n  // Computer attack and returns the coordinates\n  const [x, y] = _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB.aiAttack(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA);\n\n  // Find the cell on PlayerA's board and update it\n  const cellId = `cellA ${x},${y}`;\n  const cell = document.getElementById(cellId);\n\n  // Check if it was a hit or miss\n  const ship = _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.board.getShipAt([x, y]);\n\n  if (ship !== \"not found\") {\n    cell.style.backgroundColor = \"red\";\n  } else {\n    cell.style.backgroundColor = \"white\";\n  }\n\n  cell.style.pointerEvents = \"none\";\n}\n\nfunction setupAttackListeners() {\n  const enemyBoard = document.getElementById(\"PlayerB_board\");\n  console.log(\"PlayerB ships:\", _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB.board.ships);\n  enemyBoard.addEventListener(\"click\", (el) => {\n    if (el.target.classList.contains(\"cell\")) {\n      const cellId = el.target.id;\n      // Extract coordinates from cellid\n      const coordinates = cellId.toString().split(\" \")[1];\n      const x = parseInt(coordinates.split(\",\")[0]);\n      const y = parseInt(coordinates.split(\",\")[1]);\n      // console.log(`X and Y are: ${x} and ${y}`);\n      // check if there is ship at those coordinates\n      const ship = _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB.board.getShipAt([x, y]);\n      if (ship == \"not found\") {\n        _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.attack(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB, [x, y]);\n        el.target.style.backgroundColor = \"white\";\n        el.target.style.pointerEvents = \"none\";\n      } else if (ship !== \"not found\") {\n        _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.attack(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB, [x, y]);\n        el.target.style.backgroundColor = \"red\";\n        el.target.style.pointerEvents = \"none\";\n      }\n      if (_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB.board.areSunk()) {\n        alert(\"You won! All enemy ships destroyed!\");\n        return;\n      }\n      computerTurn();\n\n      if (_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.board.areSunk()) {\n        alert(\"Computer won! All your ships destroyed!\");\n        return;\n      }\n    }\n  });\n}\n\nfunction clearVisualBoard(playerLetter) {\n  const board = document.getElementById(`Player${playerLetter}_board`);\n  const cells = board.querySelectorAll(\".cell\");\n\n  cells.forEach((cell) => {\n    cell.style.backgroundColor = \"\";\n    cell.style.pointerEvents = \"\";\n  });\n}\n\nfunction setupRandomizeButton() {\n  const button = document.getElementById(\"randomize-btn\");\n\n  button.addEventListener(\"click\", () => {\n    _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.board.clearBoard();\n    _battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB.board.clearBoard();\n\n    // Clear visual boards\n    clearVisualBoard(\"A\");\n    clearVisualBoard(\"B\");\n    // Place new random ships\n    const shipLengths = [4, 3, 3, 2, 2, 1, 1, 1, 1];\n    // Place ships randomaly\n    (0,_battleship_js__WEBPACK_IMPORTED_MODULE_2__.randomShipPlacement)(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA, shipLengths);\n    (0,_battleship_js__WEBPACK_IMPORTED_MODULE_2__.randomShipPlacement)(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB, shipLengths);\n\n    renderShips(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.board, \"A\");\n  });\n}\ncreateBoard(\"A\");\ncreateBoard(\"B\");\n// Initial ship placement\nconst shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n(0,_battleship_js__WEBPACK_IMPORTED_MODULE_2__.randomShipPlacement)(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA, shipLengths);\n(0,_battleship_js__WEBPACK_IMPORTED_MODULE_2__.randomShipPlacement)(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerB, shipLengths);\nrenderShips(_battleship_js__WEBPACK_IMPORTED_MODULE_2__.playerA.board, \"A\");\n\nsetupRandomizeButton();\nsetupAttackListeners();\n\n\n//# sourceURL=webpack:///./src/dom.js?\n}");

/***/ },

/***/ "./src/gamelogic.js"
/*!**************************!*\
  !*** ./src/gamelogic.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.damage = 0;\n    this.sunk = false;\n  }\n  hit() {\n    this.damage++;\n    if (this.damage === this.length) {\n      this.sunk = true;\n    }\n  }\n}\n\nclass Gameboard {\n  constructor() {\n    this.missedAttacks = [];\n    this.ships = [];\n    this.missedAttacks = new Set();\n    this.attackedCoordinates = new Set();\n  }\n  placeShip(ship, coordinates) {\n    let unit = {};\n    // ship = new Ship(coordinates.length);\n    coordinates.forEach((el) => {\n      let key = el.toString();\n      unit[key] = ship;\n    });\n    this.ships.push(unit);\n  }\n  getShipAt(coordinates) {\n    // lets say it's [0,0]\n    // Iterate over everyship on the board\n    for (let ship of this.ships) {\n      // check if this ship has coordinate\n      if (ship.hasOwnProperty(coordinates.toString())) {\n        let key = coordinates.toString();\n        return ship[key];\n      }\n    }\n    // when finished searching check if found still false and return\n    return \"not found\";\n  }\n  receiveAttack(coordinates) {\n    for (let ship of this.ships) {\n      let found;\n      if (ship.hasOwnProperty(coordinates.toString())) {\n        let key = coordinates.toString();\n        this.attackedCoordinates.add(key);\n        ship[key].hit();\n        return 0;\n      }\n    }\n    let key = coordinates.toString();\n    if (!this.missedAttacks.has(key)) {\n      this.missedAttacks.add(key);\n      this.attackedCoordinates.add(key);\n      return;\n    } else {\n      return \"You already hit here\";\n    }\n  }\n  areSunk() {\n    let sunk = 0;\n    this.ships.forEach((ship) => {\n      if (Object.values(ship)[0].sunk === true) {\n        sunk++;\n      }\n    });\n    return sunk === this.ships.length;\n  }\n\n  clearBoard() {\n    this.ships = [];\n    this.missedAttacks.clear();\n    this.attackedCoordinates.clear();\n  }\n}\n\nclass Player {\n  constructor(type) {\n    this.type = type;\n    this.board = new Gameboard();\n  }\n  attack(player, coordinates) {\n    player.board.receiveAttack(coordinates);\n  }\n  aiAttack(player) {\n    function randomPosition() {\n      return Math.floor(Math.random() * 10);\n    }\n    let coordinates;\n    let key;\n\n    do {\n      coordinates = [randomPosition(), randomPosition()];\n      key = coordinates.toString();\n    } while (player.board.attackedCoordinates.has(key));\n\n    player.board.receiveAttack(coordinates);\n    return coordinates;\n  }\n}\n\n// module.exports = { Ship, Gameboard, Player };\n\n\n\n//# sourceURL=webpack:///./src/gamelogic.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;