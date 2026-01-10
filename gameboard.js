const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
    this.missedAttacks = [];
  }
  placeShip(ship, coordinates) {
    let unit = {};
    // ship = new Ship(coordinates.length);
    coordinates.forEach((el) => {
      let key = el.toString();
      unit[key] = ship;
    });
    this.ships.push(unit);
  }
  getShipAt(coordinates) {
    // lets say it's [0,0]
    // Iterate over everyship on the board
    for (let ship of this.ships) {
      let found;
      // check if this ship has coordinate
      if (ship.hasOwnProperty(coordinates.toString())) {
        let key = coordinates.toString();
        return ship[key];
      }
      // when finished searching check if found still false and return
      if (!found) {
        return "not found";
      }
    }
  }
  receiveAttack(coordinates) {
    // Iterate over every ship on the board
    for (let ship of this.ships) {
      let found;
      // check if this ship has the coordinates
      if (ship.hasOwnProperty(coordinates.toString())) {
        let key = coordinates.toString();
        ship[key].hit();
        return;
      }
    }
    return "missed the shot";
  }
}

module.exports = Gameboard;
