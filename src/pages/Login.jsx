import React, { useState } from "react";
import "./login.css";

import { FaTicketAlt, FaHome, FaPhoneAlt, FaUserCheck } from "react-icons/fa";
import { MdHelpOutline } from "react-icons/md";

export default function LoginPage() {

  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    alert("OTP Sent to " + phone);
  };

  return (
    <div className="login-container">

      {/* Logo */}
      <div className="logo-box">
        <div className="logo-icon">
          <FaTicketAlt size={28}/>
        </div>
        <h1>Mini Lottos</h1>
      </div>

      {/* Illustration Card */}
    <div className="card">
  <FaUserCheck className="welcome-icon"/>
  <p className="welcome-text">WELCOME</p>
</div>

      <h2>Welcome to Mini Lottos</h2>
      <p className="subtitle">
        Enter your phone number to play and win big!
      </p>

      <label>Phone Number</label>

      {/* Phone Input */}
      <div className="phone-input">
        <FaPhoneAlt className="phone-icon"/>
        <input
          type="tel"
          placeholder="000-000-0000"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>

      {/* Button */}
      <button className="otp-btn" onClick={handleSubmit}>
        Send OTP →
      </button>

      <p className="terms">
        By continuing, you agree to our
        <span> Terms of Service </span>
        and
        <span> Privacy Policy</span>.
      </p>

      {/* Bottom Navigation */}
      <div className="bottom-nav">

        <div className="nav-item active">
          <FaHome size={22}/>
          <p>HOME</p>
        </div>

        <div className="nav-item">
          <FaTicketAlt size={22}/>
          <p>MY TICKETS</p>
        </div>

        <div className="nav-item">
          <MdHelpOutline size={22}/>
          <p>HELP</p>
        </div>

      </div>

    </div>
  );
}