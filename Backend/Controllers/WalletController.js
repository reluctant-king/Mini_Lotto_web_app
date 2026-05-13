import User from "../Models/User.js";

export const getBalance = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ balance: user.balance });
};

export const rechargeWallet = async (req, res) => {
  const { amount } = req.body;
  const user = await User.findById(req.user.id);

  user.balance += amount;
  await user.save();

  res.json({ balance: user.balance });
};