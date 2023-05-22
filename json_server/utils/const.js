const requestMethod = {
  post: "POST",
  get: "GET",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

const pathName = {
  signin: "/signin",
  signup: "/accounts",
  todos: "/todos",
  refreshToken: "/refresh-token",
};

module.exports = {
  requestMethod,
  pathName,
};
