const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  params: {
    int1: {
      type: String,
      required: true,
    },
    int2: {
      type: String,
      required: true,
    },
    limit: {
      type: String,
      required: true,
    },
    str1: {
      type: String,
      required: true,
    },
    str2: {
      type: String,
      required: true,
    },
  },
  counter: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Request", requestSchema);
