// server.js
const config = require("./config");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const routers = require("./routers/index");
const { initDataModels } = require("./utils/loadData");
const { authJwt, handleResponse } = require("./middleware");

const Database = initDataModels();
const dbRouter = jsonServer.router(Database);

server.use(middlewares);
server.use((req, res, next) => {
  authJwt.verifyToken(req, res, next);
});

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);
// Add custom routes before JSON Server router - ( before )
routers(server);

// json server router - ( after )
server.use(dbRouter);

// server('/todos', )
//modify response here
dbRouter.render = function (req, res) {
  handleResponse(req, res);
};

server.listen(config.port, () => {
  let msg = `%c Hi 👋! Welcome Json Mock Server on port ${config.port}!`;
  let styles = [
    "font-size: 12px",
    "font-family: monospace",
    "background: white",
    "display: inline-block",
    "color: black",
    "padding: 8px 19px",
    "border: 1px dashed;",
  ].join(";");
  console.log(msg, styles);
});
