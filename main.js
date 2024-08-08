const { runCommand } = require("./src/commands/index");

//TODO: DONE write the cmd-related code here
const args = process.argv.slice(2); // Komut satırı argümanlarını al

if (args.length === 0) {
  console.error("No command provided. Please provide a command.");
  process.exit(1);
}

const command = args[0];
runCommand(command);
