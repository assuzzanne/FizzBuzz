const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const app = require("../../app");

const Request = require("../../models/request");
const { assert } = require("chai");

chai.use(chaiHttp);

describe("Stats", () => {
  describe("/GET route", () => {
    it("it should return data about the most used request", async () => {
      const res = await chai
        .request(app)
        .get(
          "/stats/")
        .send();

      assert.equal(res.status, 200);
      assert.deepEqual(
        res.text,
        "The parameters corresponding to the most used request are 3, 5, 50, pomodoro, rosso. The number of hits for this request is 1."
      );
    });
  });
});
