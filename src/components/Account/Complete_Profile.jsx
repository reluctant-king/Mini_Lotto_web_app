import React, { useState } from "react";
import { FaDice } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CompleteProfile() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name || !location) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/complete-profile",
        { name, location },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success(res.data.message || "Profile completed 🎉");

      setTimeout(() => {
        navigate("/homepage");
      }, 1000);

    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <div className="w-full max-w-sm bg-gray-900 rounded-2xl shadow-2xl p-6">

        {/* Brand */}
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-500 text-black p-3 rounded-full text-xl shadow-lg">
            <FaDice />
          </div>

          <h1 className="text-white text-2xl font-bold mt-3">
            Complete Profile
          </h1>

          <p className="text-gray-400 text-sm mt-1 text-center">
            Tell us a bit about yourself
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-gray-400 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-gray-400 text-sm">Location</label>
            <input
              type="text"
              placeholder="City, State"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 outline-none transition"
            />
          </div>

        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-6 py-3 rounded-lg font-semibold text-black bg-yellow-500 hover:bg-yellow-400 transition disabled:opacity-60"
        >
          {loading ? "Saving..." : "Continue"}
        </button>

      </div>
    </div>
  );
}