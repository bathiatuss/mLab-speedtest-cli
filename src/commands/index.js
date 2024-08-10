const startTest = require("../commands/startTest");
const getServer = require("../commands/getServer");
const download = require("../commands/download");
const upload = require("../commands/upload");
const showResult = require("../commands/showResults");
const { helper } = require("./helper");

//TODO: work on those funcs:
//run, download, upload, server, showResults
//run: starts the network testing and gives all network data(upload,download,ping,server)
//download-upload [pass parameter(client,server)]: starts the download test with detailed server and client data.
//help: add -h, --help
//results: show the results of the last test
//pass params to results: as num. show "last ${number} test"

function runCommand(args) {
  switch (args) {
    case "-run":
      startTest();
      break;
    case "-server":
      getServer();
      break;
    case "-download":
      download();
      break;
    case "--help":
      helper();
      break;
    case "-upload":
      upload();
      break;
    case "-results":
      showResult();
      break;
    default:
      helper();
  }
}

module.exports = { runCommand };
