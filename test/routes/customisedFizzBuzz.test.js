const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

const app = require("../../app");

const Request = require("../../models/request");
const { assert } = require("chai");

chai.use(chaiHttp);

describe("Request", () => {
  beforeEach(async () => {
    await Request.remove();
  });

  describe("/GET customisedFizzBuzz", () => {
    it("it should GET a list of strings", async () => {
      const req = {
        params: {
          int1: "3",
          int2: "5",
          limit: "50",
          str1: "pomodoro",
          str2: "rosso",
        },
      };

      const res = await chai
        .request(app)
        .get(
          "/customisedFizzBuzz/" +
            req.params.int1 +
            "/" +
            req.params.int2 +
            "/" +
            req.params.limit +
            "/" +
            req.params.str1 +
            "/" +
            req.params.str2
        )
        .send();

      assert.equal(res.status, 200);
      assert.deepEqual(
        res.text,
        "1,2,pomodoro,4,rosso,pomodoro,7,8,pomodoro,rosso,11,pomodoro,13,14,pomodororosso,16,17,pomodoro,19,rosso,pomodoro,22,23,pomodoro,rosso,26,pomodoro,28,29,pomodororosso,31,32,pomodoro,34,rosso,pomodoro,37,38,pomodoro,rosso,41,pomodoro,43,44,pomodororosso,46,47,pomodoro,49"
      );
    });
  });
});
