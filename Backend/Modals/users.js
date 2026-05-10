const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
  },

  city: String,
  state: String,
  country: String,

  gender: String,
  dob: Date,

  memberId: {
    type: String,
    unique: true,
  },

  isProfileComplete: {
    type: Boolean,
    default: false,
  },

  otp: String,
  otpExpiry: Date,

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);