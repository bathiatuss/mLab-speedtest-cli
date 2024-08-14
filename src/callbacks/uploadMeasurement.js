const { logUpdater } = require("../utility/logUpdater");

function uploadMeasurementCallback(data) {
  const {
    Source: source,
    Data: { ElapsedTime, NumBytes, MeanClientMbps },
  } = data;
  if (source === "client") {
    logUpdater(
      `
      Upload Measurement:

      Source: ${source}
      Elapsed Time: ${ElapsedTime}
      Timestamp: ${NumBytes}
      Upload: ${MeanClientMbps}
      `,
      15000
    );
  }
}

module.exports = { uploadMeasurementCallback };
