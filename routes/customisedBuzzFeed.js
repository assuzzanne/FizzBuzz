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
  // to optimise

  //   var query = {},
  //   update = { expire: new Date() },
  //   options = { upsert: true, new: true, setDefaultsOnInsert: true };

  // // Find the document
  // Model.findOneAndUpdate(query, update, options, function(error, result) {
  //   if (error) return;

  //   // do something with the document
  // });

  try {
    const request = await Request.findOneAndUpdate(
      {
        params: {
          int1: req.params.int1,
          int2: req.params.int2,
          limit: req.params.limit,
          str1: req.params.str1,
          str2: req.params.str2,
        },
      },
      { $inc: { counter: 1 } },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );
    console.log("Request saved or updated successfully!", request);
  } catch (err) {
    console.error("Failed to save or update request!", err.message);
  }

  /*   const request = await Request.findOneAndUpdate(
    {
      params: {
        int1: req.params.int1,
        int2: req.params.int2,
        limit: req.params.limit,
        str1: req.params.str1,
        str2: req.params.str2,
      },
    },
    {},
    {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
      useFindAndModify: false,
    },
    function (error, request) {
      console.log('request before if', request);
        request.counter = ++request.counter;
        request.save();
        console.log("Request saved or updated successfully!", request);
      if (error)
        console.error("Failed to save or update request!", err.message);
    }
  ); */

  /*   const foundRequest = await Request.find({
    params: {
      int1: req.params.int1,
      int2: req.params.int2,
      limit: req.params.limit,
      str1: req.params.str1,
      str2: req.params.str2,
    },
  });
  
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
      console.log("New request saved successfully!", newRequest);
    } catch (err) {
      console.error("Request to save new request failed!", err.message);
    }
  } else {
    let [{ params, counter }] = foundRequest;

    try {
      const updatedRequest = await Request.updateOne(
        { params: params },
        { counter: ++counter }
      );
      console.log("Counter updated successfully!", updatedRequest);
    } catch (err) {
      console.error("Request to update counter failed!", err.message);
    }
  }
 */
  res.send(
    await customisedBuzzFeedHandler(
      parseInt(req.params.int1),
      parseInt(req.params.int2),
      parseInt(req.params.limit),
      req.params.str1,
      req.params.str2
    )
  );
});

module.exports = router;
