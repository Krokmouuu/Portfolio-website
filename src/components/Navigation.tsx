import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const navKeys = [
  { key: "about", id: "à propos" },
  { key: "skills", id: "skills" },
  { key: "experience", id: "experience" },
  { key: "projects", id: "mes projets" },
  { key: "services", id: "services" },
  { key: "contact", id: "contact" },
];

const languages = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
];

export function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];
  const otherLangs = languages.filter((l) => l.code !== i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLangDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        <div
          className="text-2xl font-mono bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {"<Dev />"}
        </div>

        <div className="hidden md:flex gap-8 items-center">
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="text-white/70 hover:text-lime-400 transition-colors font-mono relative group"
            >
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Language Switcher Desktop - Dropdown */}
          <div className="relative ml-4 border-l border-lime-400/30 pl-4" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="text-xl transition-all duration-200 hover:scale-110 flex items-center gap-1"
              title={currentLang.label}
            >
              {currentLang.flag}
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 bg-black/95 backdrop-blur-lg border border-lime-400/30 rounded-lg overflow-hidden"
                >
                  {otherLangs.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex items-center gap-2 px-4 py-2 text-white/70 hover:text-lime-400 hover:bg-lime-400/10 transition-colors w-full"
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-mono text-sm">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              {navKeys.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(item.id);
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
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navKeys.length * 0.05, duration: 0.2 }}
                className="flex items-center gap-3 pt-4 border-t border-lime-400/20"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      i18n.language === lang.code
                        ? "bg-lime-400/20 border border-lime-400"
                        : "bg-white/5 border border-white/10 hover:border-lime-400/40"
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className={`font-mono text-sm ${
                      i18n.language === lang.code ? "text-lime-400" : "text-white/60"
                    }`}>
                      {lang.label}
                    </span>
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
