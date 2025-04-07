import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavbarComponent";  // Impor NavbarComponent
import Login from "./components/Login";  // Impor halaman Login yang baru saja dibuat
import LandingPage from "./components/LandingPage";
import 'tailwindcss/tailwind.css';
import RegisterPage from "./components/RegisterPage";


const App = () => {
  return (
    <Router>
      {/* Navbar yang tetap ada di atas */}
      <Navbar />
      {/* Routing untuk halaman-halaman yang ada */}
      <div>
        <Routes>
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />  {/* Halaman login */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
