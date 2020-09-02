const chai = require("chai");

const Request = require("../../models/request");
const customisedFizzBuzzHandler = require("../../handlers/customisedFizzBuzz");

describe("CustomisedFizzBuzz Handler", () => {
  beforeEach(async () => {
    await Request.remove();
  });

  it("should fail if one of the parameter is invalid", async () => {
    const result = await customisedFizzBuzzHandler(3, 5, "100", "bella", "italia");
    chai.expect(result).to.equal("One or more parameter values are not valid!");
  });
});
