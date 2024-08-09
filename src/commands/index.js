const startTest = require("../commands/startTest");
const getServer = require("../commands/getServer");
const download = require("../commands/download");
const upload = require("../commands/upload");
const showResult = require("../commands/showResults");
const { helper } = require("./helper");

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
