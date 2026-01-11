const Ship = require("./ship");

test("registers hit", () => {
  const myship = new Ship(4);
  myship.hit();
  expect(myship.damage).toBe(1);
});

test("partly damaged ship sunk status", () => {
  const myship = new Ship(3);
  myship.hit();
  myship.hit();
  expect(myship.sunk).toBe(false);
});

test("fully damaged ship sunk status", () => {
  const myship = new Ship(3);
  myship.hit();
  myship.hit();
  myship.hit();
  expect(myship.sunk).toBe(true);
});
