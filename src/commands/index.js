const startTest = require("../commands/startTest");
const getServer = require("../commands/getServer");
const download = require("../commands/download");
const upload = require("../commands/upload");
const showResult = require("../commands/showResults");
const helper = require("./helper");

//TODO: LATER - work on those funcs:
//run, download, upload, server, showResults
//run: starts the network testing and gives all network data(upload,download,ping,server)
//download-upload [pass parameter(client,server)]: starts the download test with detailed server and client data.
//DONE help: add -h, --help
//results: show the results of the last test
//pass params to results: as num. show "last ${number} test"

async function runCommand(args, extraArgs) {
  //TODO: LATER - add extraArgs to funcs if its necessary
  switch (args) {
    case "--run":
    case "-r":
      startTest();
      break;
    case "--server":
    case "-s":
      getServer(extraArgs);
      break;
    case "--download":
    case "-d":
      download();
      break;
    case "--help":
    case "-h":
      helper();
      break;
    case "--upload":
    case "-u":
      upload();
      break;
    case "--results":
    case "-res":
      showResult(extraArgs);
      break;
    default:
      helper();
  }
}

module.exports = { runCommand };
