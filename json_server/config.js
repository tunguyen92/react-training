const EXPIRES_TIME = 60 * 10; // second -> minute -> X minute
const RF_EXPIRES_TIME = 60 * 60 * 24 * 10; // second -> minute -> hour -> day * X day 
const fs = require("fs");
const path = require("path");
const getFileNames = () => {
  const absolutePath = path.resolve(__dirname, "data");
  const listFile = fs.readdirSync(absolutePath);
  return listFile.reduce((prev, current) => {
    const tableName = current.replace(".json", "");
    prev = {
      ...prev,
      [tableName]: {
        name: tableName,
      },
    };
    return prev;
  }, {});
};

const DBS = getFileNames();

module.exports = {
  secret: "s68-secret-key",
  rfSecrect: "s68-rfsecrect-key",
  expiresTime: EXPIRES_TIME,
  rfExpiresTime: RF_EXPIRES_TIME,
  port: 3001,
  // key must be is the same with name ( JSON file name at /data folder )
  database: DBS,
};
