const { database } = require("../config");
const { getAllDataModels } = require("../utils/loadData");

const verifyTodoItem = (req, res, next) => {
  const DATA_MODEL = getAllDataModels();
  const TODOS = DATA_MODEL[database.todos.name];
  const requestData = req.body;
  let errorMesssage = [];

  TODOS.forEach((todo) => {
    if (todo.id === requestData.id) {
      errorMesssage.push("Duplicate Todo");
    }
  });

  if (errorMesssage.length) {
    return res.status(401).send({
      data: "",
      errorCode: 403,
      errorMesssage,
    });
  } else {
    next();
  }
};

const checkRolesExisted = (req, res, next) => {
  next();
};

const verifyTodos = {
  verifyTodoItem,
  checkRolesExisted,
};

module.exports = verifyTodos;
