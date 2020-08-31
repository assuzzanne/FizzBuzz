var express = require("express");
var router = express.Router();

const statsHandler = require("../handlers/stats");

/*  */
router.get("/", async function (
  req,
  res,
  next
) {
    res.send(await statsHandler());
});

module.exports = router;