const { runCommand } = require("./src/commands/index");

const args = process.argv.slice(2);

if (args.length === 0) {
  process.exit(1);
}

const command = args[0];
runCommand(command);
