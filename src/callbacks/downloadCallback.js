function downloadCallback(data) {
  const {
    Source: source = "client",
    Data: { ElapsedTime = 0, NumBytes = 0, MeanClientMbps = 0 },
  } = data;
  if (source === "client" && data) {
    return { source, ElapsedTime, NumBytes, MeanClientMbps };
  }
}

module.exports = downloadCallback;

//TODO: GOAL - EXPORT THE DATA FOR EASY USAGE AS A API. DEVS CAN USE IT WITH ONE LINE OF CODE
//TODO: same for all callback files
//TODO: callbacks folder removed from the project temporarily!
