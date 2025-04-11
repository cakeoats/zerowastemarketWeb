import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarComponent";
import LandingPage from "./components/LandingPage";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";
import ForgotPasswordPage from "./components/ForgetPasswordPage";
import 'tailwindcss/tailwind.css';
import EmailVerificationPage from "./components/EmailVerificationPage";
import EmailVerificationSuccess from "./components/EmailVerificationSuccess";

const App = () => {
  return (
    <Router>
      {/* Navbar akan selalu tampil */}
      <Navbar />

      {/* Routing halaman */}
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/verif-email" element={<EmailVerificationPage/>} />
          <Route path="/success-email" element={<EmailVerificationSuccess/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
