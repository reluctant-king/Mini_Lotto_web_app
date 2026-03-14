const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express()
app.use(cors({
    credentials: true,
    origin: true
}))


mongoose.connect(process.env.DATA_BASE_URL)



app.listen(process.env.PORT, () => {
    console.log(`server is running on port 8080 `);

});