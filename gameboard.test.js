const Gameboard = require("./gameboard");
const Ship = require("./ship");

test("place ship and search at the right coordinate", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  expect(myGameboard.getShipAt([0, 0])).toStrictEqual(ship);
});

test("place ship and sarch at sea", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  expect(myGameboard.getShipAt([1, 0])).toBe("not found");
});

test("receive attack", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  myGameboard.receiveAttack([0, 0]);
  expect(ship.damage).toBe(1);
});

test("receive missed attack", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
  myGameboard.receiveAttack([1, 0]);
  expect(ship.damage).toBe(0);
});

test("attack attacked spot", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [[0, 0], [0, 1], [0, 2]]);
  myGameboard.receiveAttack([1, 0]);
  expect(myGameboard.receiveAttack([1, 0])).toBe("You already hit here");
});

test("check if sunk when sunk", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [[0, 0], [0, 1], [0, 2]]);
  myGameboard.receiveAttack([0, 0]);
  myGameboard.receiveAttack([0, 1]);
  myGameboard.receiveAttack([0, 2]);
  expect(myGameboard.areSunk()).toBe(true);
});

test("check if sunk when not sunk", () => {
  const myGameboard = new Gameboard();
  const ship = new Ship(3);
  myGameboard.placeShip(ship, [[0, 0], [0, 1], [0, 2]]);
  myGameboard.receiveAttack([0, 0]);
  myGameboard.receiveAttack([0, 1]);
  expect(myGameboard.areSunk()).toBe(false);
});
