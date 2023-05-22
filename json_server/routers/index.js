const signup = require("./signup.routes");
const signin = require("./signin.routes");
const todo = require("./todo.routes");
const refresh = require("./refresh.routes");
module.exports = (server) => {
  [signup, signin, todo, refresh].forEach((router) => router(server));
};
