import express, { Request, Response, NextFunction } from "express";
import "../env";
import { log } from "../custom_lib/log_util";

// middleWare
import morganMiddleware from "../custom_lib/morgan_middleware";
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "compression";
import fileUpload from "express-fileupload";
import { logHandler, errorHandler } from "custom_lib/log_middleware.js";

// router
import apiRouter from "./api";

const app = express();
app.set("port", process.env.PORT || 443);

app.use(cors());
app.use(fileUpload());
app.use(morganMiddleware);
app.use(express.json());
app.use(cookieParser());
app.use(morganMiddleware);
app.use(compression());

// Router
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Server On");
});

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.use("/api", apiRouter);

// Log After Router
app.use(logHandler);
app.use(errorHandler);

app.listen(app.get("port"), function () {
  log.info(`Express server listening on port ${app.get("port")}`);
  log.info(`Env: ${process.env.NODE_ENV}`);
  log.info(`Current Dir: ${__dirname}`);
});
