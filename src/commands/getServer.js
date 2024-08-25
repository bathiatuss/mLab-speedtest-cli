const runTest = require("../controllers/ndt7Service");

function getServer(extraArgs) {
  //TODO: Show the discovered server list with the extraArgs
  runTest(["error", "serverChosen"]);
}

module.exports = getServer;
