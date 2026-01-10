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
