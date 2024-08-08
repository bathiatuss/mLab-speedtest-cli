const { runTest } = require("../controller/ndt7Service");

function getServer() {
  runTest(["error", "serverChosen", "downloadMeasurement"]);
}

module.exports = getServer;
