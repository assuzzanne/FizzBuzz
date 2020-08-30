var express = require("express");
var router = express.Router();

const Request = require("../models/request");

// const statsHandler = require("../handlers/stats");

/*  */
router.get("/", async function (
  req,
  res,
  next
) {
    // Return the parameters corresponding to the most used request, as well as the number of hits for this request
    const mostUsedRequest =  await Request.find().sort({counter : -1}).limit(1);
    res.send(mostUsedRequest);
});

module.exports = router;