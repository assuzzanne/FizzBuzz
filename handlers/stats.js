const Request = require("../models/request");

module.exports = async function format() {
    // Return the parameters corresponding to the most used request, as well as the number of hits for this request
  const mostUsedRequest = await Request.find().sort({ counter: -1 }).limit(1);
  const [{ params, counter }] = mostUsedRequest;
  
  const formattedData = `The parameters corresponding to the most used request are ${params.int1}, ${params.int2}, ${params.limit}, ${params.str1}, ${params.str2}. The number of hits for this request is ${counter}.`;
  return formattedData;
};
