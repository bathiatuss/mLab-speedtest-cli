const loaderFrames = ["⣷", "⣯", "⣟", "⡿", "⢿", "⣻", "⣽", "⣾"];
const { loading } = require("./chalk");

let i = 0;
let frameIndex = 0;

function loader() {
  frameIndex++;
  if (frameIndex >= 2) {
    frameIndex = 0;
    i = (i + 1) % loaderFrames.length;
  }

  return loading(loaderFrames[i]);
}

module.exports = loader;
