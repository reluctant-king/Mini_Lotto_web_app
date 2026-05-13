import React, { useState } from "react";
import { FaDice } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Complete_Profile.css";

export default function CompleteProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    state: "",
    country: "",
    gender: "",
    dob: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const err = {};

    if (!formData.name.trim()) err.name = "Name required";
    if (!formData.email.trim()) err.email = "Email required";
    if (!formData.city.trim()) err.city = "City required";
    if (!formData.state.trim()) err.state = "State required";
    if (!formData.country.trim()) err.country = "Country required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/complete-profile",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      toast.success(res.data.message || "Success 🎉");
      setTimeout(() => navigate("/homepage"), 1000);

    } catch (err) {
      toast.error("Error saving profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">

        {/* Header */}
        <div className="header-box">
          <div className="icon">
            <FaDice />
          </div>
          <p>Fill in your details</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="field">
            <input name="name" placeholder="Full Name" onChange={handleChange} />
            <span className="error">{errors.name || ""}</span>
          </div>

          <div className="field">
            <input name="email" placeholder="Email" onChange={handleChange} />
            <span className="error">{errors.email || ""}</span>
          </div>

          <div className="field">
            <input name="city" placeholder="City" onChange={handleChange} />
            <span className="error">{errors.city || ""}</span>
          </div>

          <div className="row">
            <div className="field">
              <input name="state" placeholder="State" onChange={handleChange} />
              <span className="error">{errors.state || ""}</span>
            </div>

            <div className="field">
              <input name="country" placeholder="Country" onChange={handleChange} />
              <span className="error">{errors.country || ""}</span>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <select name="gender" onChange={handleChange}>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <span className="error"></span>
            </div>

            <div className="field">
              <input type="date" name="dob" onChange={handleChange} />
              <span className="error"></span>
            </div>
          </div>

          <button disabled={loading}>
            {loading ? "Saving..." : "Continue"}
          </button>

        </form>

      </div>
    </div>
  );
}