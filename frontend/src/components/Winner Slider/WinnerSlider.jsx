import React, { useRef, useEffect, useState } from "react";
import "./winnerSlider.css";
import axios from "axios";

export default function WinnerSlider() {
  const sliderRef = useRef(null);

  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🎯 FETCH WINNERS FROM BACKEND
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/winners/getwinners")
      .then((res) => setWinners(res.data))
      .catch((err) => console.error("Winner fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // 🎯 SCROLL
  const scroll = (dir) => {
    sliderRef.current.scrollBy({
      left: dir * 260,
      behavior: "smooth"
    });
  };

  // 🎯 LOADING STATE (SKELETON)
  if (loading) {
    return (
      <div className="slider-wrapper">
        <div className="slider">
          {[1, 2, 3, 4].map((_, i) => (
            <div className="winner-card skeleton" key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="slider-wrapper">

      <button className="arrow arrow-left" onClick={() => scroll(-1)}>
        ‹
      </button>

      <button className="arrow arrow-right" onClick={() => scroll(1)}>
        ›
      </button>

      <div className="slider" ref={sliderRef}>

        {winners.length === 0 ? (
          <div className="no-data">No winners yet</div>
        ) : (
          winners.map((winner, index) => (
            <div className="winner-card" key={winner._id || index}>

              <img
                src={winner.img || "https://via.placeholder.com/80"}
                alt={winner.name}
              />

              <div className="winner-name">
                {winner.name || "Unknown"}
              </div>

              <div className="winner-place">
                {winner.place || "-"}
              </div>

              <div className="winner-amount">
                {winner.amount || "₹0"}
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}