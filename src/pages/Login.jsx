import React, { useState } from "react";
import "./login.css";
import BottomNav from "../components/BottomNav";
import { FaDice } from "react-icons/fa";

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

      <div className="brand">

        <div className="brand-icon">
          <FaDice />
        </div>

        <h1>Mini Lottos</h1>
        <p className="subtitle">Play Smart. Win Big.</p>

      </div>

      <div className="login-card">

        <label>Phone Number</label>

        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Send OTP
        </button>

      </div>

      <p className="terms">
        By continuing you agree to our
        <span> Terms</span> and
        <span> Privacy Policy</span>
      </p>

      <BottomNav />

    </div>
  );
}