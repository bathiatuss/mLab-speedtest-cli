//that func returns the "wanted"(by commands files) callbacks.
const { userCallbacks } = require("../controller/callbackController");

function getCallbacks(callbacks = []) {
  const selectedCallbacks = {};
  callbacks.forEach((callback) => {
    if (userCallbacks[callback]) {
      selectedCallbacks[callback] = userCallbacks[callback];
    }
  });
  return selectedCallbacks;
}

module.exports = { getCallbacks };
