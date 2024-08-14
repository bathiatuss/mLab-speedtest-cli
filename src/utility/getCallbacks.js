//that func returns the "wanted"(by commands files) callbacks.
const Config = require("./config");

function getCallbacks(callbacks = []) {
  const config = Config;
  const selectedCallbacks = {};
  callbacks.forEach((callback) => {
    if (config.userCallbacks[callback]) {
      selectedCallbacks[callback] = config.userCallbacks[callback];
    }
  });
  return selectedCallbacks;
}

module.exports = { getCallbacks };
