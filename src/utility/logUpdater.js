async function logUpdater(data, time) {
  const logUpdate = await import("log-update");
  setTimeout(() => {
    logUpdate.default(`${data}`);
  }, time);
}
// use .default to access the default export of the module
// log-update is an ESM(ECMAScript Module)

module.exports = logUpdater;
