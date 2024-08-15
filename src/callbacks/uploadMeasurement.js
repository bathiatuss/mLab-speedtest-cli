const { logUpdater } = require("../utility/logUpdater");

function uploadMeasurementCallback(data) {
  const {
    Source: source,
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
    //previous network test results effects the current test results
    //initial values setting to 0 every test!!
  } = data;
  if (source === "client") {
    logUpdater(
      `
      Upload Measurement:

      Source: ${source}
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
