const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");


dotenv.config({ path: "./Config/config.env" })


const app = express();


app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());


const authRoutes = require("./Routes/authRoutes");


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