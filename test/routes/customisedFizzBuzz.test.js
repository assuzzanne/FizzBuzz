const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../../app");
const Request = require("../../models/request");

chai.use(chaiHttp);

describe("customisedFizzBuzz", () => {
  describe("/GET route", () => {
    it("it should fail if a parameter is missing", async () => {
      const req = {
        params: {
          int1: "3",
          int2: "5",
          limit: "50",
          str1: "pomodoro",
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
            req.params.str1
        )
        .send();

      chai.assert.equal(res.status, 404);
      chai.expect(res.clientError, true);
    });
    
    it("it should return a list of strings", async () => {
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

      chai.assert.equal(res.status, 200);
      chai.assert.deepEqual(
        res.text,
        "1,2,pomodoro,4,rosso,pomodoro,7,8,pomodoro,rosso,11,pomodoro,13,14,pomodororosso,16,17,pomodoro,19,rosso,pomodoro,22,23,pomodoro,rosso,26,pomodoro,28,29,pomodororosso,31,32,pomodoro,34,rosso,pomodoro,37,38,pomodoro,rosso,41,pomodoro,43,44,pomodororosso,46,47,pomodoro,49"
      );
    });
  });
});
