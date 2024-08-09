function helper() {
  console.error(`    
    Available Commands:

    - ClI Helper (helper): Provides available commands.
      Usage: mLab-speed-test --help
    
      - Start Test (startTest): Starts the speed test process.
      Usage: mLab-speed-test -run
    
    - Get Server (getServer): Selects the server for testing.
      Usage: mLab-speed-test -server
    
    - Download Test (download): Tests the download speed.
      Usage: mLab-speed-test -download
    
    - Upload Test (upload): Tests the upload speed.
      Usage: mLab-speed-test -upload
    
    - Show Results (showResults): Displays the test results.
      Usage: mLab-speed-test -results
      
                                                          `);
}

module.exports = { helper };
