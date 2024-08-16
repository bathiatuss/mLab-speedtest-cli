const logUpdater = require("../utility/logUpdater");

function uploadMeasurementCallback(data) {
  const {
    Source,
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
    //TODO: previous network test results effects the current test results
    //initialize the values setting to 0 every test!!
  } = data;
  if (Source === "client") {
    logUpdater(
      `
      Upload Measurement:

      Source: ${Source}
      Elapsed Time: ${ElapsedTime}
      Timestamp: ${NumBytes}
      Upload: ${MeanClientMbps / 10}
    `,
      50
    );
    //upload speed divided by 10 for correct result.
  }
}

module.exports = { uploadMeasurementCallback };
