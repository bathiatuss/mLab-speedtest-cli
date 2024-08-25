// loadingAnimation.js
const loaderFrames = ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"];

let i = 0;

function loader() {
  const frame = loaderFrames[i];
  i = (i + 1) % loaderFrames.length;
  return frame;
}

module.exports = loader;
