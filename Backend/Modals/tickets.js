const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  number: String,
  price: Number,
  status: {
    type: String,
    enum: ["available", "sold"],
    default: "available"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  }
}, { timestamps: true });

export default mongoose.model("Ticket", ticketSchema);