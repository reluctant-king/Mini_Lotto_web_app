import React from "react";
import { FaMapMarkerAlt, FaCoins } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="header-left">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="user"
          className="avatar"
        />

        <div>
          <p className="welcome">Welcome back</p>
          <h2 className="name">Arjun 👋</h2>

          <div className="location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Kottayam</span>
          </div>
        </div>
      </div>

      <div className="balance-box">
        <FaCoins className="coin-icon"/>
        <div>
          <span className="balance-title">COINS</span>
          <span className="balance-amount">1700</span>
        </div>
      </div>

    </header>
  );
}