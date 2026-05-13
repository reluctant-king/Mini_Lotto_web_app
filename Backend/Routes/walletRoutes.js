import express from "express";
import { getBalance, rechargeWallet } from "../Controllers/walletController.js";
import auth from "../Middlleware/authMiddleware.js";

const router = express.Router();

router.get("/getbalance", auth, getBalance);
router.post("/recharge", auth, rechargeWallet);

export default router;