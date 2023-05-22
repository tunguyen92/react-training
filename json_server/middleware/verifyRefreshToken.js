const jwt = require("jsonwebtoken");
const config = require("../config");
const authJwt = require("./authJwt");
const verifyRefreshToken = (req, res, next) => {
  const {
    body: { refreshToken: rfToken },
  } = req;

  const finishCheck = (id) => {
    const token = jwt.sign({ id }, config.secret, {
      expiresIn: config.expiresTime,
    });
    res.status(200).send({
      accessToken: token,
      errorCode: 0,
      errorMessages: [],
    });
  };

  authJwt.checkJwtToken(
    rfToken,
    config.rfSecrect,
    config.rfExpiresTime,
    res,
    finishCheck
  );
};

module.exports = {
  verify: verifyRefreshToken,
};
