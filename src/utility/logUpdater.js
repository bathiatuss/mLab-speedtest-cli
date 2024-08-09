async function logUpdater(data, time) {
  const logUpdate = await import("log-update");
  setInterval(() => {
    logUpdate.default(`${data}`);
  }, time);
  clearInterval();
}
// Use .default because log-update is an ESM

module.exports = { logUpdater };
