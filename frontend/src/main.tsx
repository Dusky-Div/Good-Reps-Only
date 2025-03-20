import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MySplits from "./pages/MySplits.tsx";
import Heatmap from "./pages/Heatmap.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/my-splits" element={<MySplits />} />
        <Route path="/map" element={<Heatmap />} />
      </Routes>
    </Router>
  </StrictMode>
);
