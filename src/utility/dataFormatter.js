const logUpdater = require("../utility/logUpdater");
const loader = require("./loadingAnimation");
const { error, header, title, result, success } = require("./chalk");

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
    default: {
      console.log(error("Unknown Test Type on Data Formatter"));
      process.exit(1);
    }
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
      ${header(`NDT7 Network Diagnosis ${animation}`)} 

      ${title("Source")} ${result("Client", "Response")}
      ${title("Time")} ${result(this.ElapsedTime, "Seconds")} 
      ${title(type)} ${result(this.MeanClientMbps, "Mbps")} 
      ${title("Transfer")} ${result(this.NumBytes, "Bytes")} 
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
    (Number(_data.MeanClientMbps / 10) || 0).toFixed(2) || animation;

  if (data.Source == "client") {
    logUpdater(
      `
      ${header(`NDT7 Network Diagnosis ${animation}`)} 

      ${title("Source")} ${result("Client", "Response")}
      ${title("Time")} ${result(this.ElapsedTime, "Seconds")} 
      ${title(type)} ${result(this.MeanClientMbps, "Mbps")} 
      ${title("Transfer")} ${result(this.NumBytes, "Bytes")} 
      `,
      50
    );
  }
}

function serverFormatter(data) {
  if (!data) return;

  const location = data.location;

  console.log(
    `\n      ${success("Server Discovered!")}\n\n      ${title(
      "Server Location"
    )} ${result(location.city, ",")} ${result(
      location.country
    )}\n\n      ${title("Virtual Machine")} ${result(data.machine)}\n`
  );
  // process.exit(0); //KILLS the process after the console log!
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

module.exports = dataFormatter;
