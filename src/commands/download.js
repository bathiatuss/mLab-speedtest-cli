const runTest = require("../services/ndt7Service");

function download() {
  runTest(["error", "downloadMeasurement"]);
}

module.exports = download;
