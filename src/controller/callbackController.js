const { errorCallback } = require("../callbacks/error");
const { serverChosenCallback } = require("../callbacks/serverChosen");
const {
  downloadMeasurementCallback,
} = require("../callbacks/downloadMeasurement");
const { uploadMeasurementCallback } = require("../callbacks/uploadMeasurement");

const userCallbacks = {
  error: (err) => errorCallback(err),
  serverChosen: (server) => serverChosenCallback(server),
  downloadMeasurement: (data) => downloadMeasurementCallback(data),
  uploadMeasurement: (data) => uploadMeasurementCallback(data),
  //TODO: ${JSON.stringify(data)} for json data
  //TODO: !!!As a third argument!!! - pass somewhere(god knows) the source prop as a params
  //TODO: NOT NECESSARY FOR NOW - check the Data props every second if they'r bigger than the previous ones
  //TODO: DONE, create files for every callback(especially for download and uploads) and call them here
};

module.exports = { userCallbacks };