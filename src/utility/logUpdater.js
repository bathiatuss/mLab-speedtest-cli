async function logUpdater(data, time) {
  const logUpdate = await import("log-update");
  setTimeout(() => {
    logUpdate.default(`${data}`);
  }, time);
}
// Use .default while importing(log-update) because log-update is an ESM(ECMAScript Module)

module.exports = { logUpdater };
