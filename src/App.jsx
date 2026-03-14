import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login"; // import login page
import Header from "./components/Header/Header";
import BottomNav from "./components/Footer/BottomNav";
import RechargeTable from "./components/Recharge/RechargeTable";
import TicketSlider from "./components/Tickets/TicketSlider";
import WinnerSlider from "./components/Winner Slider/WinnerSlider";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/recharge" element={<RechargeTable />} />
        <Route path="/tickets" element={<TicketSlider />} />
        <Route path="/winners" element={<WinnerSlider />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;