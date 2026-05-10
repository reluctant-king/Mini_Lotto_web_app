const User = require("../Modals/users");
const sendOtp = require("../utils/sendOtp");


exports.sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone || phone.length !== 10) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await User.findOneAndUpdate(
      { phone },
      {
        otp,
        otpExpiry: Date.now() + 5 * 60 * 1000,
      },
      { upsert: true, new: true }
    );

    sendOtp(phone, otp);

    res.status(200).json({ message: "OTP sent" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const jwt = require("jsonwebtoken");

exports.verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    let user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({
        message: "OTP not found. Please request again"
      });
    }

    if (String(user.otp) !== String(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // clear OTP
    user.otp = null;
    user.otpExpiry = null;

    const isNewUser = !user.isProfileComplete;

    await user.save();

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    console.log("JWT:", process.env.JWT_SECRET);

    res.status(200).json({
      message: "OTP verified",
      token,
      isNewUser,
      user
    });

  } catch (error) {
    console.error("VERIFY ERROR:", error); // 👈 IMPORTANT
    res.status(500).json({ message: error.message });
  }
};

exports.completeProfile = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({
        message: "Name and location are required"
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (user.isProfileComplete) {
      return res.status(400).json({
        message: "Profile already completed"
      });
    }

    let memberId;
    let exists = true;

    while (exists) {
      memberId = "ML" + Math.floor(100000 + Math.random() * 900000);
      exists = await User.findOne({ memberId });
    }

    user.name = name;
    user.location = location;
    user.memberId = memberId;
    user.isProfileComplete = true;

    await user.save();

    res.status(200).json({
      message: "Profile completed successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};