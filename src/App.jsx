import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

      <Toaster position="top-center" />

      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;