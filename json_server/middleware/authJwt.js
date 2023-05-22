const jwt = require("jsonwebtoken");
const config = require("../config");
const { customLog } = require("../utils/common");
const { pathName, requestMethod } = require("../utils/const");

const generateToken = (userId, secrectKey, expTime) => {
  return jwt.sign({ id: userId}, secrectKey, {
    expiresIn: expTime,
  });
};

const checkJwtToken = (token, secretkey, expTime, res, cb) => {
  if (!token) {
    return res.status(403).send({
      message: "No Token provided!",
    });
  } else {
    jwt.verify(token, secretkey, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized",
        });
      } else {
        const { id, iat, exp } = decoded;
        // const tokenExpireTime = exp - iat; //second
        const currentTime = Date.now();
        // customLog([tokenExpireTime, expTime]);

        if (exp - iat !== expTime) {
          return res.status(401).send({
            message: "Invalid Token!",
          });
        } else if (currentTime > exp * 1000) {
          return res.status(401).send({
            message: "Token Expire!",
          });
        } else {
          cb && cb();
        }
      }
    });
  }
};

const verifyToken = (req, res, next) => {
  const path = req.url;
  const method = req.method;

  const isByPassToken =
    path.includes(pathName.signup) ||
    path.includes(pathName.signin) ||
    path.includes(pathName.refreshToken); // add route bypass cheking token hereF
  if (method === requestMethod.post && isByPassToken) {
    next();
  } else {
    const token = (req.headers.authorization || "").replace(/^Bearer\s+/, "");
    checkJwtToken(token, config.secret, config.expiresTime, res, next);
  }
};

const isAdmin = (req, res, next) => {};

const isModerator = (req, res, next) => {};

const isModeratorOrAdmin = (req, res, next) => {};

const authJwt = {
  verifyToken,
  generateToken,
  checkJwtToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin,
};
module.exports = authJwt;
