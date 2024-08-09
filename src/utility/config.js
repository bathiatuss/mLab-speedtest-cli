const { logUpdater } = require("./logUpdater");

class Config {
  dataPolicy = {
    userAcceptedDataPolicy: true,
  };

  userCallbacks = {
    error: (err) => console.error("Error:", err),
    serverChosen: (server) => {
      const {
        location: { city, country },
      } = server;
      console.log(`Server location: ${city}, ${country}`);
    },
    downloadMeasurement: (data) => {
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
          10
        );
      }
    },
    uploadMeasurement: (data) => {
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
          1000
        );
      }
    },
  };

  getCallbacks(callbacks = []) {
    //that func returns the "wanted"(by commands files) callback
    const selectedCallbacks = {};
    callbacks.forEach((callback) => {
      if (this.userCallbacks[callback]) {
        selectedCallbacks[callback] = this.userCallbacks[callback];
      }
    });
    return selectedCallbacks;
  }
}

module.exports = new Config();
