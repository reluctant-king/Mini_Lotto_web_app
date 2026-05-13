import React, { useEffect, useState } from "react";
import axios from "axios";
import RechargeTable from "../Recharge/RechargeTable";
import TicketSlider from "../Tickets/TicketSlider";
import WinnerSlider from "../Winner Slider/WinnerSlider";
import BottomNav from "../Footer/BottomNav";

export default function HomePage() {
  const [tickets, setTickets] = useState([]);
  const [winners, setWinners] = useState([]);
  const [balance, setBalance] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [ticketRes, winnerRes, walletRes] = await Promise.all([
        axios.get("http://localhost:8080/api/tickets"),
        axios.get("http://localhost:8080/api/winners"),
        axios.get("http://localhost:8080/api/wallet", {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setTickets(ticketRes.data);
      setWinners(winnerRes.data);
      setBalance(walletRes.data.balance);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ paddingBottom: "80px" }}>

      <RechargeTable balance={balance} refresh={fetchData} />

      <TicketSlider tickets={tickets} refresh={fetchData} />

      <WinnerSlider winners={winners} />

      <BottomNav />
    </div>
  );
}