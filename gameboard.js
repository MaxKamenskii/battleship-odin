const Ship = require("./ship");

class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
    this.missedAttacks = new Set();
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
    for (let ship of this.ships) {
      let found;
      if (ship.hasOwnProperty(coordinates.toString())) {
        let key = coordinates.toString();
        ship[key].hit();
        return 0;
      }
    }
    let key = coordinates.toString();
    if (!this.missedAttacks.has(key)) {
      this.missedAttacks.add(key);
      return;
    } else {
      return "You already hit here";
    }
  }
  areSunk() {
    let sunk;
    this.ships.forEach((ship) => {
      sunk = Object.values(ship)[0].sunk;
    });
    return sunk;
  }
}

module.exports = Gameboard;
