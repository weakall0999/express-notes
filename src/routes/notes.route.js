import express from "express";

import { createNote } from "../controller/notes.controller.js";

const router = express.Router();

router.post("/create", createNote);

export default router;
