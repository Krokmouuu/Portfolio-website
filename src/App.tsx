import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
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
      
      <footer className="relative z-10 text-center py-8 border-t border-lime-400/20">
        <div className="text-lime-400/60 font-mono">© 2025 - Crafted with ⚡</div>
      </footer>
    </div>
  );
}
