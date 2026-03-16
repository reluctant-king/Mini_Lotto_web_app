import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Login/Login";
import Otp from "./components/Login/Otp";
import Games from "./components/Games/Games";
import Header from "./components/Header/Header";
import BottomNav from "./components/Footer/BottomNav";
import RechargeTable from "./components/Recharge/RechargeTable";
import TicketSlider from "./components/Tickets/TicketSlider";
import WinnerSlider from "./components/Winner Slider/WinnerSlider";
import Account from "./components/Account/Account";
import MyTicket from "./components/MyTicket/MyTicket";
import { Toaster } from "react-hot-toast";

function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/otp";
  const hideHeader = hideLayout || location.pathname === "/account";

  return (
    <>
      {!hideHeader && <Header />}

      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/recharge" element={<RechargeTable />} />
        <Route path="/tickets" element={<TicketSlider />} />
        <Route path="/winners" element={<WinnerSlider />} />
        <Route path="/games" element={<Games />} />
        <Route path="/my-tickets" element={<MyTicket />} />
        <Route path="/account" element={<Account />} />
      </Routes>

      {!hideLayout && <BottomNav />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;