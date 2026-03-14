import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
=======
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Otp from "./components/Login/Otp";
import Header from "./components/Header/Header";
import BottomNav from "./components/Footer/BottomNav";
import RechargeTable from "./components/Recharge/RechargeTable";
import TicketSlider from "./components/Tickets/TicketSlider";
import WinnerSlider from "./components/Winner Slider/WinnerSlider";
>>>>>>> main
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

<<<<<<< HEAD
=======
      <Header />
>>>>>>> main
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
<<<<<<< HEAD
      </Routes>

=======
        <Route path="/recharge" element={<RechargeTable />} />
        <Route path="/tickets" element={<TicketSlider />} />
        <Route path="/winners" element={<WinnerSlider />} />
      </Routes>

      <BottomNav />

>>>>>>> main
    </BrowserRouter>
  );
}

export default App;