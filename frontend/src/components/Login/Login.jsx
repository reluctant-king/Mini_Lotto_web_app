import React, { useState } from "react";
import "./login.css";
import { FaDice } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
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

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/send-otp",
        { phone: cleanPhone }
      );

      toast.success(res.data.message || "OTP sent 📩");

      // pass phone to OTP page
      navigate("/otp", { state: { phone: cleanPhone } });

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            <FaDice />
          </div>

          <h1>Mini Lottos</h1>
          <p className="subtitle">Play Smart. Win Big.</p>
        </div>

        {/* Input */}
        <div className="form-group">
          <label>Phone Number</label>

          <div className="phone-input">
            <div className="country">+91</div>

            <input
              type="tel"
              placeholder="Enter 10 digit number"
              value={phone}
              maxLength={10}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
            />
          </div>
        </div>

        {/* Button */}
        <button 
          className="login-btn" 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>

        {/* Terms */}
        <p className="terms">
          By continuing you agree to our
          <span> Terms</span> and
          <span> Privacy Policy</span>
        </p>

      </div>
    </div>
  );
}