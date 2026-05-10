const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  isProfileComplete: {
    type: Boolean,
    default: false
    },
  name: String,
  location: String,
  memberId: String,
  isProfileComplete: {
    type: Boolean,
    default: false,
  },
  otp: String,
  otpExpiry: Date,
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);