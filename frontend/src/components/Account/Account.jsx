import React, { useEffect, useState } from "react";
import axios from "axios";
import "./account.css";

export default function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [formData, setFormData] = useState({});

  const agentPhone = "+919876543210";

  // FETCH PROFILE
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/profile",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const data = res.data.user;

      setUser(data);
      setFormData({
        name: data.name || "",
        email: data.email || "",
        city: data.city || "",
        state: data.state || "",
        country: data.country || "",
        gender: data.gender || "",
        dob: data.dob ? data.dob.slice(0, 10) : ""
      });

    } catch (err) {
      console.error("Profile fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // UPDATE PROFILE
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:8080/api/v1/auth/profile",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setShowEdit(false);
      fetchProfile();
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // HELPERS
  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString();
  };

  const formatLocation = (city, state) => {
    if (!city && !state) return "-";
    return `${city || ""}${city && state ? ", " : ""}${state || ""}`;
  };

  if (loading) return <div className="ap">Loading...</div>;

  return (
    <div className="ap">

      {/* HERO */}
      <div className="hero">
        <div className="account-avatar-wrap">
          <img
            className="account-avatar"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="user"
          />
          <div className="status-dot"></div>
        </div>

        <div className="hero-name">
          {user?.name || "User"} 👋
        </div>

        <div className="hero-role">
          Member since {user?.createdAt ? new Date(user.createdAt).getFullYear() : "-"}
        </div>
      </div>

      {/* BODY */}
      <div className="body">

        {/* ACCOUNT INFO */}
        <div className="card">
          <div className="card-head">
            <div className="card-head-title">Account Info</div>
            <button
              className="edit-btn"
              onClick={() => setShowEdit(true)}
            >
              Edit
            </button>
          </div>

          <div className="card-body">

            <div className="row">
              <span className="row-label">Member ID</span>
              <span className="row-value accent">
                {user?.memberId || "-"}
              </span>
            </div>

            <div className="row">
              <span className="row-label">Email</span>
              <span className="row-value">
                {user?.email || "-"}
              </span>
            </div>

            <div className="row">
              <span className="row-label">Location</span>
              <span className="row-value">
                {formatLocation(user?.city, user?.state)}
              </span>
            </div>

            <div className="row">
              <span className="row-label">Gender</span>
              <span className="row-value">
                {user?.gender || "-"}
              </span>
            </div>

            <div className="row">
              <span className="row-label">DOB</span>
              <span className="row-value">
                {formatDate(user?.dob)}
              </span>
            </div>

            <div className="row">
              <span className="row-label">Status</span>
              <span className="row-value accent">● Active</span>
            </div>

          </div>
        </div>

        {/* SUPPORT */}
        <div className="card">
          <div className="card-head">
            <div className="card-head-title">Help & Support</div>
          </div>

          <div className="agent-row">
            <div className="agent-account-avatar">P</div>
            <div>
              <div className="agent-name">Pranav</div>
              <div className="agent-title">{agentPhone}</div>
            </div>

            <a href={`tel:${agentPhone}`} className="call-btn">
              Call
            </a>
          </div>
        </div>

        {/* LOGOUT */}
        <button className="logout-btn" onClick={handleLogout}>
          Sign Out
        </button>

      </div>

      {/* EDIT MODAL */}
      {showEdit && (
        <div
          className="modal-overlay"
          onClick={() => setShowEdit(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Edit Profile</h2>

            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" />

            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />

            <div className="modal-actions">
              <button onClick={() => setShowEdit(false)}>Cancel</button>
              <button onClick={handleUpdate}>Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}