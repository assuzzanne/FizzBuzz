const Request = require("../models/request");

module.exports = async function format() {
  const mostUsedRequest = await Request.find().sort({ counter: -1 }).limit(1);
  const [{ params, counter }] = mostUsedRequest;
  
  return `The parameters corresponding to the most used request are ${params.int1}, ${params.int2}, ${params.limit}, ${params.str1}, ${params.str2}. The number of hits for this request is ${counter}.`;
};
