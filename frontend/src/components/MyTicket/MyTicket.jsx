import React, { useEffect, useState } from "react";
import "./myticket.css";
import { FaTicketAlt } from "react-icons/fa";
import axios from "axios";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Fetch tickets from backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tickets/getavailtickets")
      .then((res) => {
        setTickets(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="ticketPageRoot">
      <h2 className="ticketPageTitle">Available Tickets</h2>

      {loading ? (
        <p>Loading tickets...</p>
      ) : tickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
        <div className="ticketListContainer">
          {tickets.map((ticket, index) => (
            <div key={ticket._id || index} className="ticketCardBox">

              <div className="ticketIconBox">
                <FaTicketAlt />
              </div>

              <div className="ticketInfoBox">
                <h3>{ticket.name || `Ticket #${ticket.number}`}</h3>

                <p className="ticketDay">{ticket.day || "Available"}</p>
                <p className="ticketDate">
                  {ticket.date || new Date(ticket.createdAt).toLocaleDateString()}
                </p>

                <div className="ticketBottomRow">
                  <span className="ticketNumber">#{ticket.number}</span>

                  <span className="ticketPrice">
                    {ticket.price ? `₹${ticket.price}` : "Price not set"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}