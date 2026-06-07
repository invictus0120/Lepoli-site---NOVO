/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b3d91] text-white overflow-x-hidden selection:bg-purple-600 selection:text-white flex flex-col">
        {/* Dynamic Glassmorphic Navigation Header */}
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </div>

        {/* Corporate USP & LEPoli Contacts Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

