const runTest = require("../controller/ndt7Service");

function download() {
  runTest(["error", "downloadMeasurement"]);
}

module.exports = download;
