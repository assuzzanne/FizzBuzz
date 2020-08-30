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
  // validation ?

  const foundRequest = await Request.find({
    params: {
      int1: req.params.int1,
      int2: req.params.int2,
      limit: req.params.limit,
      str1: req.params.str1,
      str2: req.params.str2,
    },
  });
  console.log("foundRequest", foundRequest);

  if (foundRequest.length == 0) {
    const request = new Request({
      params: {
        int1: req.params.int1,
        int2: req.params.int2,
        limit: req.params.limit,
        str1: req.params.str1,
        str2: req.params.str2,
      },
      counter: 1,
    });
    try {
      const newRequest = await request.save();
      // res.status(201).json(newRequest);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    let [{ params, counter }] = foundRequest;
    
    try {
      const updatedRequest = await Request.updateOne(
        { params: params },
        { counter: ++counter }
      );
      // res.status(201).json(updatedCounter);
    } catch (err) {
      //res.status(400).json({ message: err.message });
      console.error(err, "Request to update counter failed!");
    }
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
