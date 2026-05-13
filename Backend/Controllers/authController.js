import User from "../models/User.js";
import sendOtpHelper from "../utils/sendOtp.js";
import jwt from "jsonwebtoken";

export const sendOtp = async (req, res) => {
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

    sendOtpHelper(phone, otp);

    res.status(200).json({ message: "OTP sent" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyOtp = async (req, res) => {
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

export const completeProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      city,
      state,
      country,
      gender,
      dob
    } = req.body;

    // Validation
    if (!name || !email || !city || !state || !country) {
      return res.status(400).json({
        message: "Required fields missing"
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

    // Generate unique memberId
    let memberId;
    let exists = true;

    while (exists) {
      memberId = "ML" + Math.floor(100000 + Math.random() * 900000);
      const existingUser = await User.findOne({ memberId });
      exists = !!existingUser;
    }

    // Update user
    user.name = name;
    user.email = email;
    user.city = city;
    user.state = state;
    user.country = country;
    user.gender = gender;
    user.dob = dob;
    user.memberId = memberId;
    user.isProfileComplete = true;

    await user.save();

    res.status(200).json({
      message: "Profile completed successfully",
      user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error"
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-otp -otpExpiry");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const {
      name,
      email,
      city,
      state,
      country,
      gender,
      dob
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Update fields (only if provided)
    user.name = name || user.name;
    user.email = email || user.email;
    user.city = city || user.city;
    user.state = state || user.state;
    user.country = country || user.country;
    user.gender = gender || user.gender;
    user.dob = dob || user.dob;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};