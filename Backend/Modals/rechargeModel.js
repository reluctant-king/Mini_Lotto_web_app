import mongoose from "mongoose";

const rechargeSchema = new mongoose.Schema({
  amount: Number,
  bonus: Number
});

export default mongoose.model("Recharge", rechargeSchema);