import Winner from "../models/Winner.js";

export const getWinners = async (req, res) => {
  const winners = await Winner.find().populate("user", "name");
  res.json(winners);
};