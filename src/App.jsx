import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollManager from "./components/ScrollManager";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Login from "./pages/Login";
import VaultHire from "./pages/VaultHire";
import VaultCareer from "./pages/VaultCareer";
import VaultVerify from "./pages/VaultVerify";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <CursorGlow />
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vaulthire" element={<VaultHire />} />
          <Route path="/vaultcareer" element={<VaultCareer />} />
          <Route path="/vaultverify" element={<VaultVerify />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
