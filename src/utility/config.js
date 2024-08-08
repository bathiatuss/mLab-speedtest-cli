class Config {
  dataPolicy = {
    userAcceptedDataPolicy: true,
  };

  userCallbacks = {
    error: (err) => console.error("Error:", err),
    serverChosen: (server) => console.log("Server chosen:", server),
    downloadMeasurement: (data) => console.log("Download measurement:", data),
    uploadMeasurement: (data) => console.log("Upload measurement:", data),
  };

  getCallbacks(callbacks = []) {
    //that func returns the "wanted" callback(by commands files)
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
