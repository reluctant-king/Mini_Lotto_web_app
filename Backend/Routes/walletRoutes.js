import express from "express";
import { getBalance, rechargeWallet } from "../controllers/walletController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/getbalance", isAuthenticated, getBalance);
router.post("/recharge", isAuthenticated, rechargeWallet);

export default router;