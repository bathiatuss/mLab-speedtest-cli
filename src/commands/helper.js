function helper() {
  console.log(`    
    Available Commands:

    - ClI Helper (helper): Provides available commands.
      Usage: mLab-speed-test --help, -h
    
      - Start Test (startTest): Starts the speed test process.
      Usage: mLab-speed-test -run, -r
    
    - Get Server (getServer): Selects the server for testing.
      Usage: mLab-speed-test -server, -s
    
    - Download Test (download): Tests the download speed.
      Usage: mLab-speed-test -download, -d
    
    - Upload Test (upload): Tests the upload speed.
      Usage: mLab-speed-test -upload, -u
    
    - Show Results (showResults): Displays the test results.
      Usage: mLab-speed-test -results, -res [params]
      
                                                          `);
}

module.exports = { helper };
