import express from "express";
import { getAvailableTickets, buyTicket } from "../Controllers/ticketController.js";
import auth from "../Middlleware/authMiddleware.js";

const router = express.Router();

router.get("/getavailable", getAvailableTickets);
router.post("/buy", auth, buyTicket);

export default router;