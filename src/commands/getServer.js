const { runTest } = require("../controller/ndt7Service");

function getServer() {
  runTest(["error", "serverChosen"]);
}

module.exports = getServer;
