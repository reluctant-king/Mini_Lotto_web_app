import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });


const app = express();


app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


import authRoutes from "./routes/authRoutes.js";
import rechargeRoutes from "./routes/rechargeRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import winnerRoutes from "./routes/winnerRoutes.js";

app.use("/api/recharge", rechargeRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/winners", winnerRoutes);

app.use("/api/v1/auth", authRoutes);


mongoose.connect(process.env.DATA_BASE_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ DB error:", err);
    process.exit(1);
  });


app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});