const runTest = require("../services/ndt7Service");

function upload() {
  runTest(["error", "uploadMeasurement"]);
}

module.exports = upload;
