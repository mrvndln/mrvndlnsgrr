import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { portfolioData } from "./data/portfolio";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme");
    return stored ? stored === "dark" : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <div className="app-shell">
      <Navbar items={navItems} onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu
        open={menuOpen}
        items={navItems}
        onClose={() => setMenuOpen(false)}
      />
      <ThemeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode((prev) => !prev)}
      />

      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Projects data={portfolioData} />
        <Skills data={portfolioData} />
        <Contact data={portfolioData} />
      </main>

      <Footer name={portfolioData.name} />
    </div>
  );
}
