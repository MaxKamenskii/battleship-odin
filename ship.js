// Create the Ship class/factory

class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
    this.sunk = false;
  }
  hit() {
    this.damage++;
    if(this.damage === this.length){
      this.sunk = true
    }
  }
}

module.exports = Ship;
