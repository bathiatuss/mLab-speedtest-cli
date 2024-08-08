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
        console.log("Download measurement:");
        console.log(`
        Source: ${source}
        Elapsed Time: ${ElapsedTime}
        Timestamp: ${NumBytes}
        Download: ${MeanClientMbps}
        `);
      }
    },
    uploadMeasurement: (data) => {
      const {
        Source: source,
        Data: { ElapsedTime, NumBytes, MeanClientMbps },
      } = data;
      if (source === "client") {
        console.log("Upload measurement:");
        console.log(`
        Source: ${source}
        Elapsed Time: ${ElapsedTime}
        Timestamp: ${NumBytes}
        Upload: ${MeanClientMbps}
        `);
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
