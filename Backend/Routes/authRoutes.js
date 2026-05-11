const express = require("express");
const router = express.Router();

const { sendOtp, verifyOtp, completeProfile, getProfile, updateProfile } = require("../Controllers/authController");
const { isAuthenticated } = require("../Middlleware/authMiddleware"); 

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

router.get("/profile", isAuthenticated, getProfile);
router.put("/profile", isAuthenticated, updateProfile);

router.post("/complete-profile", isAuthenticated, completeProfile);

module.exports = router;