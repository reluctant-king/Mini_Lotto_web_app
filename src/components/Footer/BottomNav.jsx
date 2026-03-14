import React from "react";
import "./bottomNav.css";

import { FaHome, FaDice, FaTicketAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {

  const navigate = useNavigate();

  return (
    <div className="bottom-nav">

      <div className="nav-item" onClick={() => navigate("/homepage")}>
        <FaHome />
        <span>Home</span>
      </div>

      <div className="nav-item" onClick={() => navigate("/games")}>
        <FaDice />
        <span>Games</span>
      </div>

      <div className="nav-item" onClick={() => navigate("/tickets")}>
        <FaTicketAlt />
        <span>My Tickets</span>
      </div>

      <div className="nav-item" onClick={() => navigate("/account")}>
        <FaUser />
        <span>Account</span>
      </div>

    </div>
  );
}