const { logUpdater } = require("../utility/logUpdater");

function downloadMeasurementCallback(data) {
  const {
    Source: source,
    Data: { ElapsedTime, NumBytes, MeanClientMbps },
  } = data;
  if (source === "client") {
    //TODO: ${JSON.stringify(data)} for json data
    logUpdater(
      `
    Download Measurement:

    Source: ${source}
    Elapsed Time: ${ElapsedTime}
    Timestamp: ${NumBytes}
    Download: ${MeanClientMbps}
    `,
      15000
    ); //TODO: add a timer(milliseconds) and two veriables as "startTime" and "finishTime"
  }
}

module.exports = { downloadMeasurementCallback };
