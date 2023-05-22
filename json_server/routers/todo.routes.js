const controller = require("../controllers/todo.controller");
const { pathName } = require("../utils/const");

module.exports = function (app) {
  app.get(pathName.todos, controller.getListTodo);
  app.post(pathName.todos, controller.postListTodo);
  app.put(pathName.todos, controller.putListTodo);
  app.delete(pathName.todos, controller.deleteListTodo);
};
