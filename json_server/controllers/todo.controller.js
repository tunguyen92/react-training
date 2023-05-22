// const { getAllDataModels } = require("../utils/loadData");

const verifyTodo = require("../middleware/verifyTodo");

// handle method
exports.getListTodo = (req, res, next) => {
  console.log("getListTodo");
  next();
};
exports.postListTodo = (req, res, next) => {
  console.log("postListTodo");
  verifyTodo.verifyTodoItem(req, res, next);
};

exports.putListTodo = (req, res, next) => {
  console.log("putListTodo");
  next();
};
exports.deleteListTodo = (req, res, next) => {
  console.log("deleteListTodo");
  next();
};
