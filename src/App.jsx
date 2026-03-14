import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login"; // import login page
import Header from "./components/Header/Header";
import BottomNav from "./components/Footer/BottomNav";
import RechargeTable from "./components/Recharge/RechargeTable";
import TicketSlider from "./components/Tickets/TicketSlider";
import WinnerSlider from "./components/Winner Slider/WinnerSlider";
=======
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import { Toaster } from "react-hot-toast";
>>>>>>> frontendp

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Header /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/recharge" element={<RechargeTable />} />
        <Route path="/tickets" element={<TicketSlider />} />
        <Route path="/winners" element={<WinnerSlider />} />
      </Routes>
      <BottomNav />
=======

      <Toaster position="top-center" />

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>

>>>>>>> frontendp
    </BrowserRouter>
  );
}

export default App;