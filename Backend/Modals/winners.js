const winnerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  ticketNumber: String,
  prize: Number
}, { timestamps: true });

module.exports = mongoose.model("Winner", winnerSchema);