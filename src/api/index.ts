// index.ts

import express, { Router } from "express";

const router: Router = express.Router();

import db from "./db";
router.use("/db", db);

import sample from "./sample";
router.use("/sample", sample);

export default router;
