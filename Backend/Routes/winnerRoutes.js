import express from "express";
import { getWinners } from "../Controllers/winnerController.js";

const router = express.Router();

router.get("/getwinners", getWinners);

export default router;