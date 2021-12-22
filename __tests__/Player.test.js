const Potion = require("../lib/Potion");
// mock is used as fake data so that one test doesnt have to rely on another constructor and we can also see
// if one test breaks than we know its the result of the current function we are testing
jest.mock("../lib/Potion");

const Player = require("../lib/Player");

test("creates a player object", () => {
  const player = new Player("Dave");

  expect(player.name).toBe("Dave");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
