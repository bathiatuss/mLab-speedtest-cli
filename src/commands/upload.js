const { runTest } = require("../controller/ndt7Service");

function upload() {
  runTest(["error", "uploadMeasurement"]);
}

module.exports = upload;
