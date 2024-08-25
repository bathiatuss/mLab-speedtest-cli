function uploadMeasurementCallback(data) {
  const {
    Source: source,
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
    //TODO: previous network test results effects the current test results
    //initialize the values setting to 0 every test!!
  } = data;
  if (Source === "client")
    return { source, ElapsedTime, NumBytes, MeanClientMbps };
}

module.exports = { uploadMeasurementCallback };
