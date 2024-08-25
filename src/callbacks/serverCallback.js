function serverCallback(server) {
  const {
    machine: machine,
    location: { city, country },
  } = server;

  return { machine, city, country };
}

//FIXME: FIXED ON THE dataFormatter FILE - now, not stopping after "virtual machine" data!

module.exports = { serverCallback };
