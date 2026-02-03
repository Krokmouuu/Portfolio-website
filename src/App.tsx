import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { ParticleBackground } from "./components/ParticleBackground";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./components/NotFound";
import { Capybara } from "./components/Capybara";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Loading...
          </div>
          <div className="flex gap-2 justify-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-lime-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const HomePage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <ParticleBackground />
        <Navigation />

        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
        </div>

        <footer className="relative z-10 py-8 border-t border-lime-400/20">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
            <div className="text-lime-400/60 font-mono text-center flex items-center gap-2">
              © {getCurrentYear()} - {t("footer.craftedWith")}{" "}
              <button
                onClick={() => navigate("/capybara")}
                className="hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Go to Capybara"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/044/835/657/small/orange-fresh-fruit-png.png"
                  alt="Orange"
                  className="w-4 h-4 inline-block"
                />
              </button>
            </div>
          </div>
        </footer>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capybara" element={<Capybara />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
