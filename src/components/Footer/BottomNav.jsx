import React from "react";
import "./bottomNav.css";

import { FaDice, FaTicketAlt, FaTrophy, FaUser } from "react-icons/fa";

export default function BottomNav() {
  return (
    <div className="bottom-nav">

      <div className="nav-item">
        <FaDice />
        <span>Games</span>
      </div>

      <div className="nav-item">
        <FaTicketAlt />
        <span>Tickets</span>
      </div>

      <div className="nav-item">
        <FaUser />
        <span>Account</span>
      </div>

    </div>
  );
}