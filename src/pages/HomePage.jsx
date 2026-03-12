import React from "react";
import Header from "../components/Header";
import RechargeTable from "../components/RechargeTable";
import WinnerSlider from "../components/WinnerSlider";
import BottomNav from "../components/BottomNav";

export default function HomePage() {
  return (
    <div>

      <Header />

      <div style={{padding:"0px 10px"}}>
        <RechargeTable />
      </div>
      <WinnerSlider />
      <BottomNav />

    </div>
  );
}