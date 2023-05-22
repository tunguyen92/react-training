const controller = require("../controllers/auth.controller");
const { pathName } = require("../utils/const");

module.exports = function (app) {
  app.post(pathName.signin, controller.customSignInRoute);
};
