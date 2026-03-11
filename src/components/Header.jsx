import React from "react";
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
          <p className="welcome">Welcome back,</p>
          <h2 className="name">Arjun!</h2>
        </div>
      </div>

      <div className="balance-box">
        <span className="balance-title">BALANCE</span>
        <span className="balance-amount">₹1700</span>
      </div>

    </header>
  );
}