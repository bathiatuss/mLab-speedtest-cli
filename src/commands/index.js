const startTest = require("../commands/startTest");
const getServer = require("../commands/getServer");
const download = require("../commands/download");
const upload = require("../commands/upload");
const showResult = require("../commands/showResults");

function runCommand(args) {
  // const args = process.argv.slice(2);

  switch (args) {
    case "start-test":
      startTest();
      break;
    case "get-server":
      getServer();
      break;
    case "download":
      download();
      break;
    case "upload":
      upload();
      break;
    case "show-result":
      showResult();
      break;
    default:
      console.log("Unknown command");
  }
}

module.exports = { runCommand };
