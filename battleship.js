// Create the Ship class/factory

class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
    this.sunk = false;
  }
  hit() {
    this.damage++;
  }
  isSunk() {
    if (this.length === this.damage) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Ship;
