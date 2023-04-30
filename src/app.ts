import express, { Request, Response, NextFunction } from "express";
import "../env";

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Server On");
});

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

import apiRouter from "./api";
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8000
  ################################################
`);
});
