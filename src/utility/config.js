require("dotenv").config();
const { errorCallback } = require("../callbacks/error");
const { serverChosenCallback } = require("../callbacks/serverChosen");
const {
  downloadMeasurementCallback,
} = require("../callbacks/downloadMeasurement");
const { uploadMeasurementCallback } = require("../callbacks/uploadMeasurement");

//FIXME: DONE, too many funcs. apply the DRY and SR principle

class Config {
  userCallbacks = {
    error: (err) => errorCallback(err),
    serverChosen: (server) => serverChosenCallback(server),
    downloadMeasurement: (data) => downloadMeasurementCallback(data),
    uploadMeasurement: (data) => uploadMeasurementCallback(data),
    //TODO: pass somewhere(god knows) the source prop as a params
    //TODO: check the Data props every second if they'r bigger than the previous ones
    //TODO: DONE, create files for every callback(especially for download and uploads) and call them here
  };

  dataPolicy = {
    userAcceptedDataPolicy: true,
  };
}

module.exports = new Config();
