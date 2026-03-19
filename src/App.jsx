import "./index.css";
import useReveal from "./components/useReveal";
import ThreeBackground from "./components/ThreeBackground";
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
  useReveal();

  return (
    <>
      {/* Global overlays */}
      <ScrollProgress />
      <ThreeBackground />
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
