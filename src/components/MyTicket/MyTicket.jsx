import React from "react";
import "./myticket.css";
import { FaTicketAlt } from "react-icons/fa";

const tickets = [
  {
    name: "KARUNYA PLUS",
    day: "Sunday",
    date: "09/03/2026",
    number: "75JKH7662M4",
    status: "lost"
  },
  {
    name: "SUVARNA KERALAM",
    day: "Monday",
    date: "10/03/2026",
    number: "78JKP462M4",
    status: "won"
  },
  {
    name: "KARUNYA",
    day: "Tuesday",
    date: "11/03/2026",
    number: "95JKR762M4",
    status: "lost"
  },
  {
    name: "SAMRUDDHI",
    day: "Wednesday",
    date: "12/03/2026",
    number: "85JKT562M4",
    status: "expired"
  },
  {
    name: "BHAGYATHARA",
    day: "Thursday",
    date: "13/03/2026",
    number: "35ZKD962M4",
    status: "expired"
  },
  {
    name: "STHREE SAKTHI",
    day: "Friday",
    date: "14/03/2026",
    number: "25JKQ362O4",
    status: "lost"
  },
  {
    name: "DHANALEKSHMI",
    day: "Saturday",
    date: "15/03/2026",
    number: "7GJKX162M4",
    status: "won"
  }
];

export default function MyTickets() {
  return (
    <div className="ticketPageRoot">

      <h2 className="ticketPageTitle">My Tickets</h2>

      <div className="ticketListContainer">
        {tickets.map((ticket, index) => (
          <div key={index} className="ticketCardBox">

            <div className="ticketIconBox">
              <FaTicketAlt />
            </div>

            <div className="ticketInfoBox">
              <h3>{ticket.name}</h3>

              <p className="ticketDay">{ticket.day}</p>
              <p className="ticketDate">{ticket.date}</p>

              <div className="ticketBottomRow">
                <span className="ticketNumber">{ticket.number}</span>

                {ticket.status === "won" && (
                  <span className="ticketWon">Won</span>
                )}

                {ticket.status === "lost" && (
                  <span className="ticketLost">Lost</span>
                )}

                {ticket.status === "expired" && (
                  <span className="ticketExpired">Expired</span>
                )}

              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}