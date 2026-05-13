import express from "express";
import { getRechargePlans } from "../controllers/rechargeController.js";

const router = express.Router();

router.get("/getplans", getRechargePlans);

export default router;