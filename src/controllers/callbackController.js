const { errorCallback } = require("../callbacks/errorCallback");
const dataFormatter = require("../utility/dataFormatter");

const userCallbacks = {
  error: (data) => errorCallback(data),
  serverChosen: (server) => dataFormatter(server, "server"),
  downloadMeasurement: (data) => dataFormatter(data, "download"),
  uploadMeasurement: (data) => dataFormatter(data, "upload"),
  fullNetworkDiagnosis: (data) => dataFormatter(data, "full"), //TODO: TEST IT - WORK IN PROGRESS
  //TODO: LATER - ${JSON.stringify(data)} for json data
  //TODO: LATER - As a third argument to CLI - pass somewhere(god knows) the source prop as a params
};

module.exports = { userCallbacks };
