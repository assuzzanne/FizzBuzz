const chai = require("chai");

const statsHandler = require("../../handlers/stats");

describe("Stats Handler", () => {
  it("should fail if db is empty", async () => {
    const result = await statsHandler();
    chai.expect(result).to.equal("Failed to find request!");
  });
});
