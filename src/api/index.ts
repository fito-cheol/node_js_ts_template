// index.ts

import express, { Router } from "express";

const router: Router = express.Router();

import sample from "./sample";

router.use("/sample", sample);

export default router;
