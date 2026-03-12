import React, { useState } from "react";
import "./login.css";
import BottomNav from "../components/BottomNav";
import { FaDice } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {

    const cleanPhone = phone.replace(/\D/g, "");

    if (!cleanPhone) {
      toast.error("Please enter phone number");
      return;
    }

    if (cleanPhone.length !== 10) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    if (!/^[6-9]/.test(cleanPhone)) {
      toast.error("Enter a valid Indian mobile number");
      return;
    }

    toast.success("OTP sent to +91 " + cleanPhone + " 📩");

    setTimeout(() => {
      navigate("/otp");
    }, 1200);
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

        <div className="phone-input">

          <div className="country">
            +91
          </div>

          <input
            type="tel"
            placeholder="Enter 10 digit number"
            value={phone}
            maxLength={10}
            onChange={(e)=>setPhone(e.target.value)}
          />

        </div>

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