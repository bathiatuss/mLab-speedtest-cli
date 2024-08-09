#!/usr/bin/env node
const { helper } = require("./src/commands/helper");
const { runCommand } = require("./src/commands/index");

const args = process.argv.slice(2);

if (args.length === 0) {
  helper();
  process.exit(1);
}

const command = args[0];
runCommand(command);
