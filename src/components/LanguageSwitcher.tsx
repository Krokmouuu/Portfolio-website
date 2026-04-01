import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fr", flagClass: "fi fi-fr", label: "Français" },
  { code: "en", flagClass: "fi fi-gb", label: "English" },
] as const;

type LanguageCode = (typeof languages)[number]["code"];

export function LanguageSwitcher({
  variant = "dropdown",
  onChanged,
  className,
}: {
  variant?: "dropdown" | "buttons";
  onChanged?: (lng: LanguageCode) => void;
  className?: string;
}) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang =
    languages.find((l) => l.code === i18n.language) ?? languages[0];

  const otherLangs = useMemo(
    () => languages.filter((l) => l.code !== currentLang.code),
    [currentLang.code]
  );

  const changeLanguage = (lng: LanguageCode) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setOpen(false);
    onChanged?.(lng);
  };

  useEffect(() => {
    if (variant !== "dropdown") return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [variant]);

  if (variant === "buttons") {
    return (
      <div className={className}>
        <div className="flex items-center gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                i18n.language === lang.code
                  ? "bg-lime-400/20 border border-lime-400"
                  : "bg-white/5 border border-white/10 hover:border-lime-400/40"
              }`}
            >
              <span
                className={lang.flagClass}
                style={{ width: "1.5rem", height: "1.125rem" }}
                aria-hidden
              />
              <span
                className={`font-mono text-sm ${
                  i18n.language === lang.code
                    ? "text-lime-400"
                    : "text-white/60"
                }`}
              >
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="transition-all duration-200 hover:scale-110 flex items-center gap-1"
          title={currentLang.label}
          aria-label="Change language"
        >
          <span
            className={currentLang.flagClass}
            style={{ width: "1.5rem", height: "1.125rem" }}
            aria-hidden
          />
        </button>

        <AnimatePresence>
          {open && (
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
                  <span
                    className={lang.flagClass}
                    style={{ width: "1.5rem", height: "1.125rem" }}
                    aria-hidden
                  />
                  <span className="font-mono text-sm">{lang.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

