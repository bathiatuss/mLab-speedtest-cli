const logUpdater = require("../utility/logUpdater");

function downloadMeasurementCallback(data) {
  const {
    Source,
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
  } = data;
  if (Source === "client") {
    logUpdater(
      `
      Download Measurement:

      Source: ${Source}
      Elapsed Time: ${ElapsedTime}
      Timestamp: ${NumBytes}
      Download: ${MeanClientMbps}
    `,
      50
    );
    //TODO: LATER - add a timer(milliseconds) and two variables as "startTime" and "finishTime"
    //FIXME: LATER - OR just monitor the elapsed time!
  }
}

module.exports = { downloadMeasurementCallback };
