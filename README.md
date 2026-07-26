<div align="center">
    <img src="https://cdn-1.webcatalog.io/catalog/m-lab-speed-test/m-lab-speed-test-icon-filled-256.webp?v=1714775025850" alt="Measurement Lab Logo" width="200" style="margin: 10px;"/>
    <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google Logo" width="200" style="margin: 10px;"/>
    <img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="200" style="margin: 10px;"/>
    <img src="https://www.measurementlab.net/images/home/logos/cloudflare.png" alt="Cloudflare Logo" width="170" style="margin: 10px;"/>
</div>

<h1 align="center">mLab Speed Test CLI</h1>

<div align="center">

[![npm version](https://img.shields.io/npm/v/mlab-speedtest-cli.svg)](https://www.npmjs.com/package/mlab-speedtest-cli)
[![npm downloads](https://img.shields.io/npm/dm/mlab-speedtest-cli.svg)](https://www.npmjs.com/package/mlab-speedtest-cli)
[![License: Apache-2.0](https://img.shields.io/npm/l/mlab-speedtest-cli.svg)](https://github.com/bathiatuss/mlab-speedtest-cli/blob/main/LICENSE)
[![Node.js version](https://img.shields.io/node/v/mlab-speedtest-cli.svg)](https://www.npmjs.com/package/mlab-speedtest-cli)
[![Demonstration Video](https://img.shields.io/badge/Demonstration%20Video-Click%20Here-brightgreen)](https://github.com/bathiatuss/mlab-speedtest-cli/blob/main/mlab-speedtest@1.0.2-demonstration.mp4)

</div>

**mLab Speed Test CLI** is a Node.js command-line tool for testing your internet speed using the [Measurement Lab (M-Lab)](https://www.measurementlab.net/) NDT7 network diagnostic infrastructure, powered by the open-source [`@m-lab/ndt7`](https://www.npmjs.com/package/@m-lab/ndt7) client. M-Lab's platform is a collaborative effort supported by partners including Google and Cloudflare.

## Contents

- [🚀 Installation](#-installation)
- [⚡ Quick Start](#-quick-start)
- [🎉 Features](#-features)
- [📋 Usage](#-usage)
- [📝 Commands](#-commands)
- [🔧 Developer API](#-need-a-developer-api-or-tui)
- [👏 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Installation

Install globally with npm:

```bash
npm install -g mlab-speedtest-cli
```

Or run it directly without installing, using npx:

```bash
npx mlab-speedtest-cli --run
```

## ⚡ Quick Start

Once installed globally, run your first speed test:

```bash
mlab-speedtest --run
```

That's it — download speed, upload speed, server selection, and latency are tested automatically.

## 🎉 Features

*   **User-Friendly CLI**
    Enjoy a simple and intuitive command-line interface for seamless network testing.

*   **Quick Speed Tests**
    Perform fast download and upload speed measurements with minimal configuration.

*   **Automatic Server Selection**
    Effortlessly selects the optimal server for accurate results.

*   **Flexible Commands**
    Use versatile commands to execute different tests and view results.

*   **Instant Results**
    Get immediate feedback on test results directly in the terminal.

## 📋 Usage

Run any of the commands below from your terminal after installing the package.

## 📝 Commands

| Command | Alias | Description |
|---|---|---|
| `mlab-speedtest --help` | `-h` | Shows available commands and usage instructions |
| `mlab-speedtest --server` | `-s` | Selects the most efficient server for testing |
| `mlab-speedtest --download` | `-d` | Tests download speed |
| `mlab-speedtest --upload` | `-u` | Tests upload speed |
| `mlab-speedtest --run` | `-r` | Runs a full test: download, upload, server selection, and latency |
| `mlab-speedtest --results [params]` | `-res [params]` | Displays the latest test results (`params` optional) |

**Example:**

```bash
mlab-speedtest --results 5
```

## 🔧 Need a Developer API or TUI?

> 🚀 **[bathiatuss/mlab-speedtest-tui](https://github.com/bathiatuss/mlab-speedtest-tui)** — Go-based sibling project with a full developer API + terminal UI.

## 👏 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository and clone it locally:**

   ```bash
   git clone https://github.com/bathiatuss/mlab-speedtest-cli.git
   cd mlab-speedtest-cli
   npm install
   ```

2. **Link the package locally to test your changes as the `mlab-speedtest` command:**

   ```bash
   npm install -g .
   ```

3. **Create a new branch:**

   ```bash
   git checkout -b feature/feature-name
   ```

4. **Make your changes, test them, then commit and open a pull request.**

## 📄 License

This project is licensed under the [Apache-2.0 License](https://github.com/bathiatuss/mlab-speedtest-cli/blob/main/LICENSE).

---

For more information, visit the [project repository](https://github.com/bathiatuss/mlab-speedtest-cli) or open an [issue](https://github.com/bathiatuss/mlab-speedtest-cli/issues).
