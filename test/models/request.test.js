const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

const Request = require("../../models/request");

chai.use(chaiAsPromised);

describe("Request Schema", () => {
  beforeEach(async () => {
    await Request.remove();
  });
  
  it("should fail if required fields are missing", async () => {
    const request = await new Request();
    chai.expect(request.validate()).to.eventually.be.rejected;
  });
});
