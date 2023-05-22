const observer = require("./data/syncFile");

module.exports = (req, res, next) => {
  // test
  const PATH = req.path;
  console.log("path", PATH);
  console.log("method", req.method);
  if (PATH.startsWith("/todos") && req.method !== "GET") {
    setTimeout(() => {
      console.log("sync up todos");
      observer.publish("todos");
    }, 3000);
  } else if (PATH.startsWith("/users") && req.method !== "GET") {
    setTimeout(() => {
      console.log("sync up users");
      observer.publish("users");
    }, 3000);
  }
  next();
};
