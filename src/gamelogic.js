class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
    this.sunk = false;
  }
  hit() {
    this.damage++;
    if (this.damage === this.length) {
      this.sunk = true;
    }
  }
}

class Gameboard {
  constructor() {
    this.missedAttacks = [];
    this.ships = [];
    this.missedAttacks = new Set();
    this.attackedCoordinates = new Set();
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
      // check if this ship has coordinate
      if (ship.hasOwnProperty(coordinates.toString())) {
        let key = coordinates.toString();
        return ship[key];
      }
    }
    // when finished searching check if found still false and return
    return "not found";
  }
  receiveAttack(coordinates) {
    for (let ship of this.ships) {
      let found;
      if (ship.hasOwnProperty(coordinates.toString())) {
        let key = coordinates.toString();
        this.attackedCoordinates.add(key);
        ship[key].hit();
        return 0;
      }
    }
    let key = coordinates.toString();
    if (!this.missedAttacks.has(key)) {
      this.missedAttacks.add(key);
      this.attackedCoordinates.add(key);
      return;
    } else {
      return "You already hit here";
    }
  }
  areSunk() {
    let sunk = 0;
    this.ships.forEach((ship) => {
      if (Object.values(ship)[0].sunk === true) {
        sunk++;
      }
    });
    return sunk === this.ships.length;
  }

  clearBoard() {
    this.ships = [];
    this.missedAttacks.clear();
    this.attackedCoordinates.clear();
  }
}

class Player {
  constructor(type) {
    this.type = type;
    this.board = new Gameboard();
  }
  attack(player, coordinates) {
    player.board.receiveAttack(coordinates);
  }
  aiAttack(player) {
    function randomPosition() {
      return Math.floor(Math.random() * 10);
    }
    let coordinates;
    let key;

    do {
      coordinates = [randomPosition(), randomPosition()];
      key = coordinates.toString();
    } while (player.board.attackedCoordinates.has(key));

    player.board.receiveAttack(coordinates);
    return coordinates;
  }
}

// module.exports = { Ship, Gameboard, Player };
export { Ship, Gameboard, Player };
