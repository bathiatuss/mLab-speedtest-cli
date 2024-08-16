function serverChosenCallback(server) {
  const {
    machine,
    location: { city, country },
  } = server;
  console.log(
    `\nServer Discovered!\n\nMost Efficient Server: ${city}, ${country}\n\nVirtual Machine: ${machine}\n`
  );
}
//process.exit(0); removed for causing problem on startTest
//FIXME: now, not stopping after "virtual machine" data!
module.exports = { serverChosenCallback };
