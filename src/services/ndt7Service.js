const ndt7 = require("@m-lab/ndt7");
// Network Diagnostic Tool Protocol v7 2020-02-18
const { dataPolicy } = require("../utility/config");
const { getCallbacks } = require("../controllers/getCallbackService");
const { success, error } = require("../utility/chalk");

async function runTest(callbacks) {
  const userCallbacks = getCallbacks(callbacks);

  try {
    const result = await ndt7.test(dataPolicy, userCallbacks);

    console.log(
      result === 0
        ? success("      Network Test completed successfully")
        : error(`      Network Test failed with error code: ${result}`)
    );
  } catch (err) {
    console.error(error("Network Test encountered an error:", err));
  }
}

module.exports = runTest;
