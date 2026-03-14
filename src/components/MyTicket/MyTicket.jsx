import React from "react";
import "./myticket.css";
import { FaTicketAlt } from "react-icons/fa";

const tickets = [
  {
    name: "KARUNYA PLUS",
    day: "Sunday",
    date: "09/03/2026",
    number: "75JKH7662M4"
  },
  {
    name: "SUVARNA KERALAM",
    day: "Monday",
    date: "10/03/2026",
    number: "78JKP462M4"
  },
  {
    name: "KARUNYA",
    day: "Tuesday",
    date: "11/03/2026",
    number: "95JKR762M4"
  },
  {
    name: "SAMRUDDHI",
    day: "Wednesday",
    date: "12/03/2026",
    number: "85JKT562M4"
  },
  {
    name: "BHAGYATHARA",
    day: "Thursday",
    date: "13/03/2026",
    number: "35ZKD962M4"
  },
  {
    name: "STHREE SAKTHI",
    day: "Friday",
    date: "14/03/2026",
    number: "25JKQ362O4"
  },
  {
    name: "DHANALEKSHMI",
    day: "Saturday",
    date: "15/03/2026",
    number: "7GJKX162M4"
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
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}