import React from "react";
import Header from "../Header/Header";
import RechargeTable from "../Recharge/RechargeTable";
import WinnerSlider from "../Winner Slider/WinnerSlider";
import BottomNav from "../Footer/BottomNav";
import TicketSlider from "../Tickets/TicketSlider";
export default function HomePage() {
  return (
    <div>
   <div style={{padding:"10px"}}>
</div>
      <div style={{padding:"10px"}}>
        <RechargeTable />
      </div>
      <div style={{padding:"10px"}}>
      <TicketSlider />
</div>
<div style={{padding:"10px"}}>
      <WinnerSlider />
      <br/>
            <br/>
      <br/>

      </div>

      <BottomNav />
    </div>
  );
}