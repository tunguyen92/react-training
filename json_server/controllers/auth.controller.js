const { verifySignUp, verifySignIn, verifyRefreshToken } = require("../middleware");



exports.customSignInRoute = (req, res, next) => {
  console.log("==== enter signin ====");
  verifySignIn.verify(req, res, next);
};
exports.customSignUpRoute = (req, res, next) => {
  console.log("==== enter signup ====");
  verifySignUp.verify(req, res, next);
};
exports.customRefreshRoute = (req, res, next) => {
  console.log("==== enter refresh ====");
  verifyRefreshToken.verify(req, res, next);
};
