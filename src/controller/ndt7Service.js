const ndt7 = require("@m-lab/ndt7");
// Network Diagnostic Tool Protocol v7 2020-02-18

const { dataPolicy } = require("../utility/config");
const { getCallbacks } = require("../callbacks/getCallbacks");

function runTest(callbacks) {
  const userCallbacks = getCallbacks(callbacks);

  return ndt7
    .test(dataPolicy, userCallbacks)
    .then((result) => {
      if (result === 0) {
        console.log("Network Test completed successfully"); //FIXME: PARTIALLY FIXED - command files not stopping after the test!
      } else {
        console.log("Network Test failed with error code:", result);
      }
    })
    .catch((error) =>
      console.error("Network Test encountered an error:", error)
    );
}

module.exports = runTest;

//use the imported(as "module.exports = new Config") config class
//old code: const config = new Config();
