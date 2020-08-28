var express = require("express");
var router = express.Router();

const customisedBuzzFeedHandler = require("../handlers/customisedBuzzFeed");

/* Get params and call computing function from handler */
router.get("/int/:int1/:int2/:limit/str/:str1/:str2/", function (
  req,
  res,
  next
) {
  // Accepts five parameters : three integers int1, int2 and limit, and two strings str1 and str2.
  // to optimise

  // const result = customisedBuzzFeedHandler(
  //   parseInt(req.params.int1),
  //   parseInt(req.params.int2),
  //   parseInt(req.params.limit),
  //   req.params.str1,
  //   req.params.str2
  // );
  // res.send(result);

  res.send(customisedBuzzFeedHandler(
    parseInt(req.params.int1),
    parseInt(req.params.int2),
    parseInt(req.params.limit),
    req.params.str1,
    req.params.str2
  ));
});

module.exports = router;
