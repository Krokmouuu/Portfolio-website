import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Services",
  "Contact",
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-lime-400/20"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-mono bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
          {"<Dev />"}
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="text-white/70 hover:text-lime-400 transition-colors font-mono relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-lime-400"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-lime-400/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element) {
                        const offsetTop = element.offsetTop - 80;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }, 300);
                  }}
                  className="text-white/70 hover:text-lime-400 transition-colors font-mono"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
