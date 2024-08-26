const runTest = require("../services/ndt7Service");

function startTest() {
  //TODO: USE ndt7UploadService.js and downloadService for FULL TEST
  runTest([
    "error",
    "serverChosen",
    "downloadMeasurement",
    "uploadMeasurement",
  ]);
}

module.exports = startTest;
