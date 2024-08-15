const { helper } = require("../commands/helper");

function errorCallback(error) {
  console.error("Callback Error:", error);
  helper();
}

module.exports = { errorCallback };
