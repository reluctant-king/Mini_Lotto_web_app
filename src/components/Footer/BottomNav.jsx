import React from "react";
import "./bottomNav.css";

import { FaHome, FaDice, FaTicketAlt, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="bottom-nav">

      <div
        className={`nav-item ${path === "/" || path === "/homepage" ? "active" : ""}`}
        onClick={() => navigate("/homepage")}
      >
        <FaHome />
        <span>Home</span>
      </div>

      <div
        className={`nav-item ${path === "/games" ? "active" : ""}`}
        onClick={() => navigate("/games")}
      >
        <FaDice />
        <span>Games</span>
      </div>

      <div
        className={`nav-item ${path === "/tickets" ? "active" : ""}`}
        onClick={() => navigate("/tickets")}
      >
        <FaTicketAlt />
        <span>My Tickets</span>
      </div>

      <div
        className={`nav-item ${path === "/account" ? "active" : ""}`}
        onClick={() => navigate("/account")}
      >
        <FaUser />
        <span>Account</span>
      </div>

    </div>
  );
}