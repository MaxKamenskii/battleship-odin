const { Ship, Gameboard, Player } = require('./gamelogic')

// Test Ship class logic
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

// Test Gameboard class logic
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

test("Check creating of player's board", () => {
    const player = new Player();
    expect(player.board).toBeInstanceOf(Gameboard)
})

// Test Player class logic
test("Check type of player", () => {
    const player = new Player("human");
    expect(player.type).toBe("human")
})

test("Attack another player", () => {
    const playerA = new Player('human')
    const playerB = new Player('computer')

    const shipB = new Ship(3);
    playerB.board.placeShip(shipB, [
        [0, 0],
        [0, 1],
        [0, 2],
    ]);
    playerA.attack(playerB, [0,1])
    expect(shipB.damage).toBe(1)
})

test("Attack by computer", () => {
    const playerA = new Player('human')
    const playerB = new Player('computer')

    const shipB = new Ship(3);
    playerB.board.placeShip(shipB, [
        [0, 0],
        [0, 1],
        [0, 2],
    ]);
    playerA.aiAttack(playerB)
    console.log(`${shipB.damage}`)
    console.log(`Missed attacks: ${playerB.board.missedAttacks}`)
})