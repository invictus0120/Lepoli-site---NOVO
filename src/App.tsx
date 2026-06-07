/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MVVVideo from "./components/MVVVideo";
import Organizers from "./components/Organizers";
import Initiatives from "./components/Initiatives";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b3d91] text-white overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Dynamic Glassmorphic Navigation Header */}
      <Header />
      
      <main className="w-full">
        {/* Hero Banner Section */}
        <Hero />

        {/* Story Section ("Quem Somos") */}
        <About />

        {/* CRT Retro MVV Looping Video Player or Simulation Section */}
        <MVVVideo />

        {/* Interactive 3D Flipping Executive and Divisional Team Cards */}
        <Organizers />

        {/* Elegant Bento Grid "Initiatives" Section */}
        <Initiatives />
      </main>

      {/* Corporate USP & LEPoli Contacts Footer */}
      <Footer />
    </div>
  );
}

