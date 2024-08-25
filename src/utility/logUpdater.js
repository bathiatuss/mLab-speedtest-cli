async function logUpdater(data, time) {
  const logUpdate = await import("log-update");
  setTimeout(() => {
    logUpdate.default(`${data}`);
  }, time);
}
// use .default to access the default export of the module
// import log-update dynamically because it is an ESM(ECMAScript Module)

module.exports = logUpdater;
