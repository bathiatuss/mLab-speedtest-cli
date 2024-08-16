function helper() {
  console.log(`    
    Available Commands:

    - ClI Helper (helper): Provides available commands.
      Usage: mlab-speed-test --help, -h
    
      - Start Test (startTest): Starts the speed test process.
      Usage: mlab-speed-test -run, -r
    
    - Get Server (getServer): Selects the server for testing.
      Usage: mlab-speed-test -server, -s
    
    - Download Test (download): Tests the download speed.
      Usage: mlab-speed-test -download, -d
    
    - Upload Test (upload): Tests the upload speed.
      Usage: mlab-speed-test -upload, -u
    
    - Show Results (showResults): Displays the test results.
      Usage: mlab-speed-test -results [params], -res [params]
      
                                                          `);
}

module.exports = helper;
