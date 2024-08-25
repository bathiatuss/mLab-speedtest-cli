const runTest = require("../controllers/ndt7Service");

function upload() {
  runTest(["error", "uploadMeasurement"]);
}

module.exports = upload;
