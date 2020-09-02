const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require('mongoose');

const app = require("../../app");

chai.use(chaiHttp);

describe("Stats", () => {
  after(async () => {
    await mongoose.disconnect();
  });

  describe("/GET route", () => {
    it("it should return data about the most used request", async () => {
      const res = await chai
        .request(app)
        .get(
          "/stats/")
        .send();

      chai.assert.equal(res.status, 200);
      chai.assert.deepEqual(
        res.text,
        "The parameters corresponding to the most used request are 3, 5, 50, pomodoro, rosso. The number of hits for this request is 1."
      );
    });
  });
});
