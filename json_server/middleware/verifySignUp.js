const { database } = require("../config");
const { getUsersInfo } = require("../utils/common");
const { getAllDataModels } = require("../utils/loadData");

const verify = (req, res, next) => {
  const tableName = database.accounts.name;
  const listUsers = getAllDataModels()[tableName];
  const { username } = req.body || {};
  const userCheckRes = getUsersInfo(username, listUsers);
  if (userCheckRes) {
    res.status(403).send({
      data: "",
      errorCode: 403,
      errorMessages: ["User name is already use"],
    });
  }
  next();
};

const checkRolesExisted = (req, res, next) => {};

const verifySignUp = {
  verify: verify,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
