import express from "express";
import { getRechargePlans } from "../Controllers/rechargeController.js";

const router = express.Router();

router.get("/getplans", getRechargePlans);

export default router;