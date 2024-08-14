const { errorCallback } = require("../callbacks/error");
const { serverChosenCallback } = require("../callbacks/serverChosen");
const { uploadMeasurementCallback } = require("../callbacks/uploadMeasurement");
const { logUpdater } = require("./logUpdater");

//FIXME: partially done; too many funcs. apply the DRY and Single Responsibility principle

class Config {
  dataPolicy = {
    userAcceptedDataPolicy: true,
  };

  userCallbacks = {
    error: (err) => errorCallback(err),
    serverChosen: (server) => serverChosenCallback(server),
    downloadMeasurement: (data) => downloadMeasurementCallback(data),
    //TODO: create files for every callback(especially for download and uploads) and call them here
    //TODO: pass somewhere(god knows) the source prop as a params
    //TODO: check the Data props every second if they'r bigger than the previous ones
    uploadMeasurement: (data) => uploadMeasurementCallback(data),
  };
}

module.exports = new Config();
