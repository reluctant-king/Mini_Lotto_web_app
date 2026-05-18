import express from "express";
import { getAvailableTickets, buyTicket } from "../controllers/ticketController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/getavailtickets", getAvailableTickets);
router.post("/buy", isAuthenticated, buyTicket);

export default router;