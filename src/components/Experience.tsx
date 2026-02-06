import { useRef } from "react";
import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { useTranslation } from "react-i18next";

const experiencesData = [
  {
    titleKey: "estateUp",
    company: "EstateUp",
    location: "Nice, France",
    period: "2026",
    periodKey: "currently",
    image: "/assets/placeholder.mp4",
    tags: [
      "React",
      "TypeScript",
      "Sentry",
      "Supabase",
      "Vercel",
      "Vite",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "Python Django",
      "API",
      "Stripe",
      "Authentication",
    ],
  },
  {
    titleKey: "arcCycle",
    company: "Arc Cycle",
    location: "Nice, France",
    period: "2025",
    periodKey: "currently",
    image: "/assets/arc-cycle.png",
    tags: [
      "React Native",
      "Swift",
      "Expo",
      "TypeScript",
      "Sentry",
      "Supabase",
      "RevenueCat",
      "App Store Connect",
      "Mixpanel",
    ],
  },
  {
    titleKey: "iLoveNice",
    company: "I ❤️ Nice",
    location: "Nice, France",
    period: "2025 - 2025",
    image: "/assets/nice.jpg",
    tags: [
      "Anglais",
      "Service",
      "Accueil",
      "Conseil",
      "Vente",
      "Gestion",
      "Responsabilité",
    ],
  },
  {
    titleKey: "mngrsAi",
    company: "MNGRS.AI",
    location: "Paris, France",
    period: "2024 - 2025",
    image: "/assets/mngrs-ai.png",
    tags: [
      "React",
      "Node.js",
      "Python Django",
      "TypeScript",
      "Sentry",
      "Heroku",
      "PostgresSQL",
      "Figma",
      "Intelligence Artificielle",
    ],
  },
  {
    titleKey: "consultant",
    company: "",
    location: "Sophia-Antipolis, France",
    period: "2023 - 2024",
    image: "/assets/sophia-antipolis.jpg",
    tags: [
      "C",
      "C++",
      "Python",
      "React",
      "Docker",
      "PostgreSQL",
      "Algorithmes",
    ],
  },
  {
    titleKey: "freelance",
    company: "",
    location: "Nice, France",
    period: "2022 - 2024",
    image: "/assets/wallpaper.jpeg",
    tags: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "Svelte",
      "PostgreSQL",
      "Shopify",
      "WordPress",
      "Figma",
      "HTML/CSS",
      "Stripe",
    ],
  },
  {
    titleKey: "gaming",
    company: "",
    location: "Online",
    period: "2016 - 2024",
    image: "assets/pro-scene.png",
    tags: [
      "Counter-Strike: Global Offensive",
      "Overwatch",
      "Fortnite",
      "Call of Duty",
      "World of Warcraft",
      "League of Legends",
    ],
  },
];

const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

export function Experience() {
  const { t } = useTranslation();
  const estateUpVideoRef = useRef<HTMLVideoElement>(null);
  return (
    <section id="experience" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            <span
              style={{
                background: "linear-gradient(135deg, #a3e635, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("experience.title")}
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 via-lime-400 to-cyan-400" />

          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`relative mb-20 md:mb-32 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              } md:w-1/2`}
            >
              <div
                className={`hidden md:block absolute top-8 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } w-6 h-6 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 border-4 border-black z-10`}
                style={{
                  transform:
                    index % 2 === 0
                      ? "translateX(calc(50% + 2px))"
                      : "translateX(calc(-50% + 2px))",
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-lime-400 to-cyan-400 blur-md" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
                onMouseEnter={() => {
                  if (isVideo(exp.image) && estateUpVideoRef.current) {
                    estateUpVideoRef.current.play();
                  }
                }}
                onMouseLeave={() => {
                  if (isVideo(exp.image) && estateUpVideoRef.current) {
                    estateUpVideoRef.current.pause();
                    estateUpVideoRef.current.currentTime = 0;
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/30 border border-lime-400/20 group-hover:border-lime-400/40 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    {isVideo(exp.image) ? (
                      <video
                        ref={estateUpVideoRef}
                        src={exp.image}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <ImageWithFallback
                        src={exp.image}
                        alt={
                          exp.company ||
                          t(`experience.jobs.${exp.titleKey}.title`)
                        }
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={
                          exp.company === "Arc Cycle"
                            ? { objectPosition: "center 57%" }
                            : exp.titleKey === "gaming"
                              ? { objectPosition: "center 55%" }
                              : exp.company === "MNGRS.AI"
                                ? { objectPosition: "center 65%" }
                                : undefined
                        }
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-2">
                      {t(`experience.jobs.${exp.titleKey}.title`)}
                    </h3>
                    <div className="text-xl text-lime-400 mb-4">
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>
                          {exp.periodKey
                            ? `${exp.period} - ${t(`experience.${exp.periodKey}`)}`
                            : exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">
                      {t(`experience.jobs.${exp.titleKey}.description`)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400/30 text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
