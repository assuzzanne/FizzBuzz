const chai = require("chai");

const Request = require("../../models/request");
const statsHandler = require("../../handlers/stats");

describe("Stats Handler", () => {
  beforeEach(async () => {
    await Request.remove();
  });

  it("should fail if db is empty", async () => {
    const result = await statsHandler();
    chai.expect(result).to.equal("Failed to find request!");
  });
});
