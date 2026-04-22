import "./index.css";
import { useGsapReveal } from "./components/useGsap";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  useGsapReveal();

  return (
    <>
      {/* Global overlays */}
      <ScrollProgress />
      <CursorGlow />
      <SideNav />

      {/* Layout */}
      <Navbar />

      <main>
        <Hero />
        <div className="rule" />
        <About />
        <div className="rule" />
        <Experience />
        <div className="rule" />
        <Skills />
        <div className="rule" />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
