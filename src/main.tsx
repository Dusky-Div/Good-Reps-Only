import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MySplits from "./pages/MySplits.tsx";
import Heatmap from "./pages/Heatmap.tsx";
import LogPR from "./pages/LogPR.tsx";
import SignUp from "./pages/SignUp.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-splits" element={<MySplits />} />
        <Route path="/map" element={<Heatmap />} />
        <Route path="/log-pr" element={<LogPR />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>
);
