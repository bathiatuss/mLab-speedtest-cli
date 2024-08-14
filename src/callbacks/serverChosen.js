function serverChosenCallback(server) {
  const {
    location: { city, country },
  } = server;
  console.log(`Server location: ${city}, ${country}`);
}

module.exports = { serverChosenCallback };
