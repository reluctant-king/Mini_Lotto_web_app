import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BottomNav from "../Footer/BottomNav";
import "./HomePage.css";

export default function HomePage() {
  const [tickets, setTickets] = useState([]);
  const [winners, setWinners] = useState([]);
  const [plans, setPlans] = useState([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const requests = [
        axios.get("http://localhost:8080/api/tickets/getavailtickets"),
        axios.get("http://localhost:8080/api/winners/getwinners"),
        axios.get("http://localhost:8080/api/recharge/getrechargeplans"),
      ];

      if (token) {
        requests.push(
          axios.get("http://localhost:8080/api/wallet/getbalance", {
            headers: { Authorization: `Bearer ${token}` },
          })
        );
      }

      const results = await Promise.allSettled(requests);
      const [ticketResult, winnerResult, rechargeResult, walletResult] = results;

      if (ticketResult.status === "fulfilled") {
        setTickets(ticketResult.value.data || []);
      } else {
        throw new Error("Failed to load tickets");
      }

      if (winnerResult.status === "fulfilled") {
        setWinners(winnerResult.value.data || []);
      } else {
        throw new Error("Failed to load winners");
      }

      if (rechargeResult.status === "fulfilled") {
        setPlans(rechargeResult.value.data || []);
      } else {
        throw new Error("Failed to load recharge plans");
      }

      if (walletResult && walletResult.status === "fulfilled") {
        setBalance(walletResult.value.data?.balance || 0);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load homepage data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="homepage-container">
      {error && (
        <div className="error-banner">
          <span>{error}</span>
          <button onClick={fetchData}>Retry</button>
        </div>
      )}

      <div className="home-summary-grid">
        <div className="home-card" onClick={() => navigate("/tickets")}>
          <div className="card-header">
            <h2>Tickets</h2>
            <span>{tickets.length} available</span>
          </div>
          <p className="card-description">Browse available tickets and play for a chance to win.</p>
          <div className="ticket-preview-slider">
            {tickets.length === 0 ? (
              <div className="ticket-preview-empty">No tickets available</div>
            ) : (
              tickets.slice(0, 4).map((ticket) => (
                <div key={ticket._id || ticket.number} className="ticket-preview-card">
                  <div className="ticket-preview-title">
                    {ticket.name || `Ticket #${ticket.number}`}
                  </div>
                  <div className="ticket-preview-meta">
                    <span>{ticket.day || "Available"}</span>
                    <span>{ticket.date || new Date(ticket.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="ticket-preview-price">
                    {ticket.price ? `₹${ticket.price}` : "Price not set"}
                  </div>
                </div>
              ))
            )}
          </div>
          <button className="card-button">Go to Tickets</button>
        </div>

        <div className="home-card" onClick={() => navigate("/recharge")}>
          <div className="card-header">
            <h2>Recharge</h2>
            <span>{plans.length} plans</span>
          </div>
          <p className="card-description">Top up your balance with the best recharge offers.</p>
          <ul className="card-preview-list">
            {plans.slice(0, 3).map((plan, index) => (
              <li key={index}>₹{plan.amount} → ₹{plan.bonus}</li>
            ))}
          </ul>
          <button className="card-button">Go to Recharge</button>
        </div>

        <div className="home-card" onClick={() => navigate("/winners")}>
          <div className="card-header">
            <h2>Winners</h2>
            <span>{winners.length} recent</span>
          </div>
          <p className="card-description">View the latest winners and their prize amounts.</p>
          <ul className="card-preview-list">
            {winners.slice(0, 3).map((winner) => (
              <li key={winner._id || winner.ticketNumber}>{winner.name || winner.user?.name || "Winner"} - ₹{winner.prize || winner.amount || 0}</li>
            ))}
          </ul>
          <button className="card-button">Go to Winners</button>
        </div>
      </div>

      <section className="wallet-section">
        <div className="wallet-card">
          <h3>Your Balance</h3>
          <p className="wallet-amount">₹{balance.toFixed(2)}</p>
          <p className="wallet-note">Wallet data loaded from your account.</p>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
