const { logUpdater } = require("../utility/logUpdater");

function downloadMeasurementCallback(data) {
  const {
    Source: source,
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
  } = data;
  if (source === "client") {
    logUpdater(
      `
      Download Measurement:

      Source: ${source}
      Elapsed Time: ${ElapsedTime}
      Timestamp: ${NumBytes}
      Download: ${MeanClientMbps}
    `,
      50
    );
    //TODO: add a timer(milliseconds) and two variables as "startTime" and "finishTime"
    //FIXME: OR just monitor the elapsed time!
  }
}

module.exports = { downloadMeasurementCallback };
