import express from "express";
import {
  sendOtp,
  verifyOtp,
  completeProfile,
  getProfile,
  updateProfile,
} from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

router.get("/profile", isAuthenticated, getProfile);
router.put("/profile", isAuthenticated, updateProfile);

router.post("/complete-profile", isAuthenticated, completeProfile);

export default router;