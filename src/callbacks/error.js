const { helper } = require("../commands/helper");

function errorCallback(error) {
  console.error("Error:", error);
  helper();
}

module.exports = { errorCallback };
