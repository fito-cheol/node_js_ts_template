import express, { Request, Response, Router } from "express";
import connection from "../../../custom_lib/db_connection";

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Youtube API");
});

router.get("/totalCount", async function (req, res, next) {
  try {
    const totalCount = await getTotalCount();
    return res.send({ totalCount });
  } catch (exception) {
    next(exception);
  }
});

async function getTotalCount() {
  try {
    let query = `SELECT count(*) as count FROM youtube`;
    const [rows] = await connection.query(query);
    return rows[0].count;
  } catch (exception) {
    throw exception;
  }
}

export default router;
