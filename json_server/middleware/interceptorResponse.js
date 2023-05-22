const { database } = require("../config");
const { syncTodo } = require("../controllers/todo.controller");
const { customLog } = require("../utils/common");
const { pathName, requestMethod } = require("../utils/const");
const { getAllDataModels } = require("../utils/loadData");
const observer = require("../utils/syncFile");

const syncModelToDatabaseTodo = (req) => {
  const path = req.url;
  const method = req.method;
  if (method === requestMethod.get) return;
  let tableName = path.split("/")[1];
  if (`/${tableName}` === pathName.refreshToken) return;
  customLog(['table name ', tableName]);
  if (tableName) {
    setTimeout(() => {
      console.log(`=== SYNC DATA FOR : ${tableName} ===`);
      observer.publish(tableName); // syns model to file
    }, 1000);
  }
};

const handleResponse = (req, res, next) => {
  const data = res.locals.data;
  const model = getAllDataModels();
  // console.log(model);
  // default response, didmount response, sync with database json file if have new update
  syncModelToDatabaseTodo(req);
  res.jsonp({
    data,
    errorCode: res.statusCode < 400 ? 0 : res.statusCode,
    errorMessages: [],
  });
};
module.exports = handleResponse;
