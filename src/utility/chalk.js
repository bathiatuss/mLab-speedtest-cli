const chalk = require("chalk"); //chalk@4.1.2

function error(params) {
  return chalk.hex("#eb5050")(params);
}

function success(params) {
  return chalk.hex("#34ed78")(params);
}

function loading(params) {
  return chalk.bold.whiteBright(params);
}

function title(params, mark = "\t:") {
  return chalk.hex("#68c9ed").bold(params, mark);
}

function result(params, mark) {
  return chalk.hex("#d6fbff")(params, mark);
}

function header(params) {
  return chalk.bold.yellow(params);
}

module.exports = { error, success, loading, header, title, result };
