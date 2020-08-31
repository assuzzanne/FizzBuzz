var express = require("express");
var router = express.Router();

const statsHandler = require("../handlers/stats");

/*  */
router.get("/", async function (
  req,
  res,
  next
) {
    // Return the parameters corresponding to the most used request, as well as the number of hits for this request
    res.send(await statsHandler());
});

module.exports = router;