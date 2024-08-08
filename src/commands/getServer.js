const { runCommand } = require("../controller/ndt7Service");

function getServer() {
  runCommand(["error", "serverChosen", "downloadMeasurement"]);
}

module.exports = getServer;
