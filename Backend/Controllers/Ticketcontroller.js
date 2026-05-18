import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export const getAvailableTickets = async (req, res) => {
  const tickets = await Ticket.find({
    $or: [
      { status: "available" },
      { status: { $exists: false } }
    ]
  });
  res.json(tickets);
};

export const buyTicket = async (req, res) => {
  const { ticketId } = req.body;
  const userId = req.user.id;

  const ticket = await Ticket.findById(ticketId);
  const user = await User.findById(userId);

  if (!ticket || ticket.status !== "available")
    return res.status(400).json({ msg: "Ticket not available" });

  if (user.balance < ticket.price)
    return res.status(400).json({ msg: "Insufficient balance" });

  user.balance -= ticket.price;
  ticket.status = "sold";
  ticket.owner = userId;

  await user.save();
  await ticket.save();

  res.json({ msg: "Ticket purchased" });
};