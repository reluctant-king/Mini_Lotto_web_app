import React, { useState } from "react";
import "./otp.css";
import { FaDice } from "react-icons/fa";
import BottomNav from "../components/BottomNav";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Otp() {

  const [otp, setOtp] = useState(["","","",""]);
  const navigate = useNavigate();

  const handleChange = (value,index)=>{
    if(!/^[0-9]?$/.test(value)) return;

    const newOtp=[...otp];
    newOtp[index]=value;
    setOtp(newOtp);

    if(value && index<3){
      document.getElementById(`otp-${index+1}`).focus();
    }
  };

  const verifyOtp=()=>{
    const code=otp.join("");

    if(code.length<4){
      toast.error("Please enter complete OTP");
      return;
    }

    toast.success("OTP Verified 🎉");

    setTimeout(()=>{
      navigate("/homepage");
    },1200);
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

        <p className="otp-info">
          We sent a code to your phone
        </p>

        <div className="otp-inputs">

          {otp.map((digit,index)=>(
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="1"
              value={digit}
              onChange={(e)=>handleChange(e.target.value,index)}
            />
          ))}

        </div>

        <button onClick={verifyOtp}>
          Verify OTP
        </button>

        <p className="resend">
          Didn't receive code? <span>Resend</span>
        </p>

      </div>


    </div>
  );
}