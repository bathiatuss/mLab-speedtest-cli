const { runCommand } = require("./src/commands/index");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error(`        
    
        No command provided. Please provide a command.
        
        Available Commands:
        - Start Test (startTest): Starts the speed test process.
          Usage: node main.js run
        
        - Get Server (getServer): Selects the server for testing.
          Usage: node main.js server
        
        - Download Test (download): Tests the download speed.
          Usage: node main.js download
        
        - Upload Test (upload): Tests the upload speed.
          Usage: node main.js upload
        
        - Show Results (showResults): Displays the test results.
          Usage: node main.js results
                                                                  `);
  process.exit(1);
}

const command = args[0];
runCommand(command);
