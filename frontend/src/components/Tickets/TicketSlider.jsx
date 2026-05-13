import React, { useRef, useEffect, useState } from "react";
import "./ticketSlider.css";
import { FaHistory } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TicketSlider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🎯 FETCH FROM BACKEND
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tickets")
      .then((res) => setTickets(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🎯 SLIDE
  const slide = (dir) => {
    const slider = sliderRef.current;
    const scrollAmount = 220;

    slider.scrollBy({
      left: dir * scrollAmount,
      behavior: "smooth"
    });
  };

  // 🎯 ACTIVE CENTER LOGIC (NO DOM MANIPULATION)
  const handleScroll = () => {
    const slider = sliderRef.current;
    const children = Array.from(slider.children);

    const sliderCenter =
      slider.scrollLeft + slider.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const childCenter =
        child.offsetLeft + child.offsetWidth / 2;

      const distance = Math.abs(sliderCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => slider.removeEventListener("scroll", handleScroll);
  }, [tickets]);

  return (
    <div className="ticket-container">

      <button className="arrow left" onClick={() => slide(-1)}>
        ❮
      </button>

      <div className="ticket-slider" ref={sliderRef}>

        {tickets.map((ticket, index) => (
          <div
            key={ticket._id || index}
            className={`ticket ${ticket.day?.toLowerCase()} ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="ticket-title">{ticket.title}</div>
            <div className="ticket-day">{ticket.day}</div>
            <div className="ticket-date">
              {new Date(ticket.date).toLocaleDateString()}
            </div>
            <div className="ticket-id">{ticket.ticketId}</div>
          </div>
        ))}

        {/* HISTORY CARD */}
        <div
          className={`ticket history ${
            activeIndex === tickets.length ? "active" : ""
          }`}
          onClick={() => navigate("/my-tickets")}
        >
          <FaHistory className="history-icon" />
          <div className="ticket-title">View History</div>
        </div>

      </div>

      <button className="arrow right" onClick={() => slide(1)}>
        ❯
      </button>
    </div>
  );
}