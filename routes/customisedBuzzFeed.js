const express = require("express");
const router = express.Router();

const Request = require("../models/request");

const customisedBuzzFeedHandler = require("../handlers/customisedBuzzFeed");

/* Get params and call computing function from handler */
router.get("/int/:int1/:int2/:limit/str/:str1/:str2/", async function (
  req,
  res,
  next
) {
  try {
    const query = {
      params: {
        int1: req.params.int1,
        int2: req.params.int2,
        limit: req.params.limit,
        str1: req.params.str1,
        str2: req.params.str2,
      },
    };
    const update = { $inc: { counter: 1 } };
    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    const request = await Request.findOneAndUpdate(query, update, options);
    console.log("Request created or updated successfully!", request);
  } catch (err) {
    console.error("Failed to create or update request!", err.message);
  }

  res.send(
    customisedBuzzFeedHandler(
      parseInt(req.params.int1),
      parseInt(req.params.int2),
      parseInt(req.params.limit),
      req.params.str1,
      req.params.str2
    )
  );
});

module.exports = router;
