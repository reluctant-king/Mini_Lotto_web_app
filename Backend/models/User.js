import mongoose from "mongoose";

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
  
  balance: { type: Number, default: 0 },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],

  otp: String,
  otpExpiry: Date,

}, { timestamps: true });

export default mongoose.model("User", userSchema);