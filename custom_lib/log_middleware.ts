import { log } from "./log_util.js";
import { ErrorRequestHandler } from "express";

// logger middleware
export const logHandler: ErrorRequestHandler = (err, req, res, next) => {
  log.error("[" + new Date() + "]\n" + err.stack);
  next(err);
};

// error handler middleware
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || "Error!!");
};
