import mongoose from "mongoose";

const winnerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ticketNumber: String,
  prize: Number,
}, { timestamps: true });

export default mongoose.model("Winner", winnerSchema);