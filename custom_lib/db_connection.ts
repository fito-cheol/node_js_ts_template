import mysql, { PoolConnection } from "mysql2";
import dbconfig from "../config/database";
import dbconfig_production from "../config/databasePro";

// mysql pooling connection 참고
// https://www.npmjs.com/package/mysql#pooling-connections
const config =
  process.env.NODE_ENV == "development" ? dbconfig : dbconfig_production;

const pool = mysql.createPool(config);

pool.on("acquire", function (connection: PoolConnection) {
  console.log("Connection %d acquired", connection.threadId);
});

pool.on("connection", function (connection: PoolConnection) {
  connection.query("SET SESSION auto_increment_increment=1");
});
pool.on("enqueue", function () {
  console.log("Waiting for available connection slot");
});
pool.on("release", function (connection: PoolConnection) {
  console.log("Connection %d released", connection.threadId);
});

let promisePool = pool.promise();

export default promisePool;
