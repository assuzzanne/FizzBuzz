var express = require("express");
var router = express.Router();

const statsHandler = require("../handlers/stats");

/* Get data about the most performed request */
router.get("/", async function (req, res, next) {
  const result = await statsHandler();
  res.status(200).send(result);
});

module.exports = router;
