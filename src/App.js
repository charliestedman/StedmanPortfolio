import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-800 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
}
