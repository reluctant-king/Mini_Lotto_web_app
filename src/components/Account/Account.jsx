import React from "react";
import "./account.css";

export default function Account() {
  const agentPhone = "+919876543210";

  return (
    <div className="ap">
      {/* HERO */}
      <div className="hero">
        <div className="avatar-wrap">
          <img
            className="avatar"
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="user"
          />
          <div className="status-dot"></div>
        </div>
        <div className="hero-name">Arjun 👋</div>
        <div className="hero-role">Member since 2024</div>
      </div>

      {/* BODY */}
      <div className="body">

        {/* ACCOUNT INFO CARD */}
        <div className="card">
          <div className="card-head">
            <div className="card-head-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <div className="card-head-title">Account Info</div>
              <div className="card-head-sub">Your personal details</div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="row-left">
                <div className="row-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M16 2v6M8 2v6M2 10h20" />
                  </svg>
                </div>
                <span className="row-label">Member ID</span>
              </div>
              <span className="row-value accent">7845AX92</span>
            </div>
            <div className="row">
              <div className="row-left">
                <div className="row-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="row-label">Location</span>
              </div>
              <span className="row-value">Kottayam, Kerala</span>
            </div>
            <div className="row">
              <div className="row-left">
                <div className="row-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="row-label">Status</span>
              </div>
              <span className="row-value accent">● Active</span>
            </div>
          </div>
        </div>

        {/* SUPPORT CARD */}
        <div className="card">
          <div className="card-head">
            <div className="card-head-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="card-head-title">Help & Support</div>
              <div className="card-head-sub">Your dedicated agent</div>
            </div>
          </div>
          <div className="agent-row">
            <div className="agent-avatar">P</div>
            <div>
              <div className="agent-name">Pranav</div>
              <div className="agent-title">+91 98765 43210</div>
            </div>
            <div className="agent-right">
              <a href={`tel:${agentPhone}`} className="call-btn" title="Call agent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* LOGOUT */}
        <button className="logout-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign Out
        </button>

      </div>
    </div>
  );
}