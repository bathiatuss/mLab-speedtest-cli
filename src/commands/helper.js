function helper() {
  console.error(`
    No command provided. Please provide a command.
    
    Available Commands:
    - ClI Helper (helper): Provides available commands.
      Usage: node main.js --help
    
      - Start Test (startTest): Starts the speed test process.
      Usage: node main.js -run
    
    - Get Server (getServer): Selects the server for testing.
      Usage: node main.js -server
    
    - Download Test (download): Tests the download speed.
      Usage: node main.js -download
    
    - Upload Test (upload): Tests the upload speed.
      Usage: node main.js -upload
    
    - Show Results (showResults): Displays the test results.
      Usage: node main.js -results
                                                          `);
}

module.exports = { helper };
