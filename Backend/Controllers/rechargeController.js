import Recharge from "../models/rechargeModel.js";

export const getRechargePlans = async (req, res) => {
  try {
    const plans = await Recharge.find();
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: "Error fetching plans" });
  }
};
