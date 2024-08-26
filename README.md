<div align="center">
    <img src="https://cdn-1.webcatalog.io/catalog/m-lab-speed-test/m-lab-speed-test-icon-filled-256.webp?v=1714775025850" alt="Measurement Lab Logo" width="200" style="margin: 10px;"/>
    <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google Inc." width="200" style="margin: 10px;"/>
    <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="200" style="margin: 10px;"/>
</div>

# mLab Speed Test CLI

**mLab Speed Test CLI** is a Node.js application that provides a command-line interface (CLI) for accessing the Measurement Lab (M-Lab) speed testing system developed by Google Inc. This tool allows users to test their internet speed and view the results.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Contributing](#contributing)
- [License](#license)

## 🎉 Features

- **Internet Speed Testing**: Tests download and upload speeds, and ping times.
- **Command-Line Interface**: Performs test operations through various commands.
- **Results Viewing**: Displays test results immediately.

## 🚀 Installation

To get started with this project, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/bathiatuss/mLab-speedtest-cli.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd mLab-speedtest-cli
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Install Globally:**

   To make the `mlab-speedtest` command available globally, run:

   ```bash
   npm install -g .
   ```

## 📋 Usage

You can run the following commands to perform speed test operations from the command line:

### Commands

- **Help (`--help, -h`):**

  Shows available commands and usage instructions.

  ```bash
  mlab-speedtest --help
  mlab-speedtest -h
  ```

- **Get Server (`--server, -s`):**

  Selects the most efficient server for testing.

  ```bash
  mlab-speedtest -server
  mlab-speedtest -s
  ```

- **Download Test (`--download, -d`):**

  Tests the download speed.

  ```bash
  mlab-speedtest --download
  mlab-speedtest -d
  ```

- **Upload Test (`--upload, -u`):**

  Tests the upload speed.

  ```bash
  mlab-speedtest --upload
  mlab-speedtest -u
  ```

- **Start Test (`--run, -r`):**

  Starts the speed test process for download speed, upload speed, most efficient server and network latency.

  ```bash
  mlab-speedtest --run

  mlab-speedtest -r
  ```

- **Show Results (`--results [params], -res [params]`):**

  Displays the latest test results. "params" is optional.

  ```bash
  mlab-speedtest --results

  mlab-speedtest -res 5
  ```

## 👏 Contributing

To contribute to this project, please follow these steps:

1. **Fork the Repository and Clone It to Your Local Machine.**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/feature-name
   ```

3. **Make Your Changes and Test Them.**
4. **Commit Your Changes and Open a Pull Request.**

## 📄 License

This project is licensed under the [Apache-2.0 License](LICENSE).

---

For more information and assistance, you can refer to the project repository or reach out with any issues.
