const logUpdater = require("../utility/logUpdater");
const loader = require("./loadingAnimation");

function dataFormatter(data, type) {
  const types = ["full", "download", "upload", "server", "results"];

  switch (type) {
    case types[0]:
      return "Full Test Work In Progress";
      fullNetworkFormatter(data);
      break;
    case types[1]:
      downloadFormatter(data, "Download");
      break;
    case types[2]:
      uploadFormatter(data, "Upload");
      break;
    case types[3]:
      serverFormatter(data);
      break;
    case types[4]:
      return "Results Work In Progress";
    default:
      return "Unknown Test Type on Formatter";
  }
}

function downloadFormatter(data, type) {
  if (!data) return;

  _data = data.Data;

  let animation = loader();

  this.Source = data.Source || animation;
  this.ElapsedTime = (Number(_data.ElapsedTime) || 0).toFixed(2) || animation;
  this.NumBytes = _data.NumBytes || animation;
  this.MeanClientMbps =
    (Number(_data.MeanClientMbps) || 0).toFixed(2) || animation;

  if (data.Source == "client") {
    logUpdater(
      `
      NDT7 Network Diagnosis ${animation}

      Source\t: ${this.Source}
      Time\t: ${this.ElapsedTime} Seconds
      ${type}\t: ${this.MeanClientMbps} Mbps
      Transfer\t: ${this.NumBytes} Bytes

`,
      50
    );
  }
}

function uploadFormatter(data, type) {
  if (!data) return;

  let animation = loader();

  _data = data.Data;

  this.Source = data.Source || animation;
  this.ElapsedTime = (Number(_data.ElapsedTime) || 0).toFixed(2) || animation;
  this.NumBytes = _data.NumBytes || animation;
  this.MeanClientMbps =
    (Number(_data.MeanClientMbps) || 0).toFixed(2) || animation;

  if (data.Source == "client") {
    logUpdater(
      `
      NDT7 Network Diagnosis ${animation}

      Source: ${data.Source}
      Time: ${_data.ElapsedTime} Seconds
      ${type} : ${_data.MeanClientMbps / 10} Mbps
      Transfer: ${_data.NumBytes} Bytes
      `,
      50
    );
  }
}

function serverFormatter(data) {
  if (!data) return;

  const location = data.location;

  console.log(
    `\nServer Discovered!\n\nMost Efficient Server: ${location.city}, ${location.country}\n\nVirtual Machine: ${data.machine}\n`
  );
  process.exit(0); //KILLS the process after the console log!
}

function fullNetworkFormatter(data) {
  if (!data) return;

  let animation = loader();

  if (Source == "client") {
    logUpdater(
      `
      NDT7 Network Diagnosis ${animation}

      Download Measurement: ${data.download}
      Upload Measurement: ${data.upload}
      Server: ${data.server}
      `,
      50
    );
  }
}

//TODO: NO NEED - use ElapsedTime LATER INSTEAD - add a timer(milliseconds) and two variables as "startTime" and "finishTime"
module.exports = dataFormatter;
