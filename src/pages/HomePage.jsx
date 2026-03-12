import React from "react";
import Header from "../components/Header";
import RechargeTable from "../components/RechargeTable";
import WinnerSlider from "../components/WinnerSlider";
import BottomNav from "../components/BottomNav";
import TicketSlider from "../components/TicketSlider";
export default function HomePage() {
  return (
    <div>
   <div style={{padding:"10px"}}>
      <Header />
</div>
      <div style={{padding:"10px"}}>
        <RechargeTable />
      </div>
      <div style={{padding:"10px"}}>
      <TicketSlider />
</div>
<div style={{padding:"10px"}}>
      <WinnerSlider />
      </div>
      <BottomNav />

    </div>
  );
}