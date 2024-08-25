const runTest = require("../controllers/ndt7Service");

function download() {
  runTest(["error", "downloadMeasurement"]);
}

module.exports = download;
