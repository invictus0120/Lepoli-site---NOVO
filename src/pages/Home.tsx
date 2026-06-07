import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MVVVideo from "../components/MVVVideo";
import Organizers from "../components/Organizers";
import Initiatives from "../components/Initiatives";

export default function Home() {
  return (
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
  );
}
