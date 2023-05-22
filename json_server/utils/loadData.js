const fs = require("fs");
const path = require("path");
const { database } = require("../config");
const observer = require("./syncFile");

// list of files to load data when server starts
let DATA_MODEL = {};
const listDataBase = Object.keys(database);
const readFile = (fileName) => {
  const absolutePath = path.resolve(
    __dirname,
    "..",
    "data",
    `${fileName}.json`
  );
  //   fs.readFile("./db.json", "utf8", (err, jsonString) => {
  try {
    const data = fs.readFileSync(absolutePath, "utf8");
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
  return null;
};

const writeFile = (fileName, data) => {
  const absolutePath = path.resolve(
    __dirname,
    "..",
    "data",
    `${fileName}.json`
  );
  try {
    fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2));
  } catch (e) {
    console.log("writeFile ERROR: ", e);
  }
};

const syncDataToFile = (fileName) => {
  const dataModel = DATA_MODEL[fileName];
  console.log("Table ", fileName);
  console.log("====================================");
  console.log("write new Data to File ", dataModel);
  console.log("====================================");
  writeFile(fileName, dataModel);
};

const initDataModels = () => {
  observer.subscribe(syncDataToFile);
  if (Object.keys(DATA_MODEL).length > 0) return;
  for (const fileName of listDataBase) {
    const resp = readFile(fileName);
    if (resp) {
      DATA_MODEL[fileName] = resp;
    } else {
      DATA_MODEL[fileName] = [];
    }
  }
  return DATA_MODEL;
};

const writeDataToFile = (fileName, data) => {
  DATA_MODEL[fileName].push(data);
  return DATA_MODEL;
};

module.exports = {
  readDataFromFile: (fileName) => readFile(fileName),
  initDataModels,
  writeDataToFile: (fileName, data) => writeDataToFile(fileName, data), // only need write and update when router is custom ( not in list data/fileName )
  getAllDataModels: () => DATA_MODEL,
};
