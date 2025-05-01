import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MySplits from "./pages/MySplits";
import Heatmap from "./pages/Heatmap";
import LogPR from "./pages/LogPR";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CompleteProfile from "./pages/CompleteProfile";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-splits" element={<MySplits />} />
          <Route path="/map" element={<Heatmap />} />
          <Route path="/log-pr" element={<LogPR />} />
        </Route>
        {/* Here lie the remains of pages dat no hev botam nevigesyon */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
