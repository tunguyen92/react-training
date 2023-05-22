const jwt = require("jsonwebtoken");
const { getAllDataModels } = require("../utils/loadData");
const { expiresTime, database, secret, rfSecrect, rfExpiresTime } = require("../config");
const { getUsersInfo } = require("../utils/common");
const { generateToken } = require("./authJwt");

const accountDbName = database["accounts"].name;

const verify = (req, res) => {
  const listUsers = getAllDataModels()[accountDbName];
  const { username, password } = req.body || {};
  const currentUser = getUsersInfo(username, listUsers);
  // check account exist
  if (!currentUser) {
    return res.status(404).send({
      data: "",
      errorCode: 403,
      errorMessages: ["User Not found."],
    });
  }

  // check password
  if (currentUser.password !== password) {
    return res.status(403).send({
      data: "",
      errorCode: 403,
      errorMessages: ["Password not valid"],
    });
  }

  // generate new token
  const token = generateToken(currentUser.id, secret, expiresTime)
  const rfToken = generateToken(currentUser.id, rfSecrect, rfExpiresTime)
  
  res.status(200).send({
    accessToken: token,
    refreshToken: rfToken,
    errorCode: 0,
    errorMessages: [],
  });
};

const checkRolesExisted = (req, res, next) => {
  next();
};

const verifySignIn = {
  verify: verify,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignIn;
