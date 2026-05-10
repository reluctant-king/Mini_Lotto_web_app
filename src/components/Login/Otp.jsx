import React, { useState } from "react";
import "./otp.css";
import { FaDice } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // 📌 Get phone from login page
  const phone = location.state?.phone;



  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const verifyOtp = async () => {
    const code = otp.join("");

    if (code.length < 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    if (!phone) {
      toast.error("Session expired. Please login again.");
      navigate("/");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/verify-otp",
        {
          phone,
          otp: code,
        }
      );

      toast.success(res.data.message || "OTP Verified 🎉");

        localStorage.setItem("token", res.data.token);

      if (res.data.isNewUser) {
        navigate("/complete-profile"); 
      } else {
        navigate("/homepage");
      }

      // setTimeout(() => {
      //   navigate("/homepage");
      // }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <div className="brand">
        <div className="brand-icon">
          <FaDice />
        </div>

        <h1>Mini Lottos</h1>
        <p className="subtitle">Enter the verification code</p>
      </div>

      <div className="otp-card">
        <p className="otp-info">We sent a code to your phone</p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <button onClick={verifyOtp} disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <p className="resend">
          Didn't receive code? <span>Resend</span>
        </p>
      </div>
    </div>
  );
}