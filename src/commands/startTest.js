const runTest = require("../controller/ndt7Service");

function startTest() {
  runTest([
    "error",
    "serverChosen",
    "downloadMeasurement",
    "uploadMeasurement",
  ]);
}

module.exports = startTest;
