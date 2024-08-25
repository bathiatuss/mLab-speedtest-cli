require("dotenv").config();

const dataPolicy = {
  userAcceptedDataPolicy: true,
  //FIXME: NOT NECESSARY FOR DEV - ASK USER FOR PERMISSION TO COLLECT DATA ON PRODUCTION!
};

module.exports = { dataPolicy };
