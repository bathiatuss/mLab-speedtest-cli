const { runTest } = require("../controller/ndt7Service");

function startTest() {
  runTest(["error", "downloadMeasurement"]);
}

module.exports = download;
