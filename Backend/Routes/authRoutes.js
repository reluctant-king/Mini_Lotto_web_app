const express = require("express");
const router = express.Router();

const { sendOtp, verifyOtp, completeProfile } = require("../Controllers/authController");
const { isAuthenticated } = require("../Middlleware/authMiddleware"); 

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);

router.post("/complete-profile", isAuthenticated, completeProfile);

module.exports = router;