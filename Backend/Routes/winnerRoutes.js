import express from "express";
import { getWinners } from "../controllers/winnerController.js";

const router = express.Router();

router.get("/getwinners", getWinners);

export default router;