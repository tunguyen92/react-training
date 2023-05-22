const getUsersInfo = (username, listUsers) => {
  const res = listUsers.find((item) => {
    return item.username === username;
  });
  return res;
};
/**
 *
 * @param {*} objlog
 * is string or array message
 */
const customLog = (objlog) => {
  console.log("***************************************");
  if (typeof objlog === "string") {
    console.log(objlog)
  } else if (Array.isArray(objlog)) {
    objlog.forEach((element) => {
      console.log(element);
      console.log("------");
    });
  } else {
    console.log("invalid params log");
  }
  console.log("***************************************");
};
module.exports = {
  getUsersInfo,
  customLog,
};
