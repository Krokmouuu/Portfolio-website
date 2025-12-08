import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experiences = [
  {
    title: "Fondateur et Développeur",
    company: "Arc Cycle",
    location: "Nice, France",
    period: "2025 - Actuellement",
    description:
      "Création d'une application mobile avec un suivi d'habitudes, des défis quotidiens aléatoires, un système de gamification motivant, et des statistiques avancées pour suivre ta progression.",
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
    title: "Vendeur",
    company: "I ❤️ Nice",
    location: "Nice, France",
    period: "2025 - 2025",
    description:
      "Accueil et conseil clientèle dans un magasin de souvenirs. Gestion des ventes, encaissements et suivi de l'inventaire. Communication multilingue avec une clientèle internationale.",
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
    title: "Full Stack Developpeur",
    company: "MNGRS.AI",
    location: "Paris, France",
    period: "2024 - 2025",
    description:
      "Contribution au développement d'une plateforme web innovante utilisant l'intelligence artificielle pour accompagner les artistes musicaux dans leur processus de création et la gestion complète de leur carrière artistique.",
    image: "/assets/mngrs-ai.png",
    tags: [
      "React",
      "Node.js",
      "Python Django",
      "TypeScript",
      "Sentry",
      "Heroku",
      "PostgresSQL",
      "figma",
      "Intelligence Artificielle",
    ],
  },
  {
    title: "Consultant / Développeur",
    company: "Cleeven",
    location: "Sophia-Antipolis, France",
    period: "2023 - 2024",
    description:
      "Consultant polyvalent intervenant sur des projets variés : développement logiciel, applications web, solutions techniques et mise en place d'infrastructures DevOps pour différents clients.",
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
    title: "Full Stack Developpeur Freelance",
    company: "",
    location: "Nice, France",
    period: "2022 - 2024",
    description:
      "Occasionnellement en parallèle de mes études, j'ai travaillé comme développeur freelance pour différents clients, principalement des sites vitrines et des boutiques e-commerce personnelles.",
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
    title: "Joueur professionnel de jeu vidéo",
    company: "",
    location: "Online",
    period: "2016 - 2024",
    description:
      "Grand passionné de jeux vidéo, j'ai participé à des centaines de tournois compétitifs sur 6 jeux différents, développant ainsi des compétences en stratégie, analyse, travail d'équipe, leadership en tant que capitaine, prise de décision rapide et adaptation.",
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

export function Experience() {
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
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 via-lime-400 to-cyan-400" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-black/30 border border-lime-400/20 group-hover:border-lime-400/40 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={exp.image}
                      alt={exp.company || exp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      style={
                        exp.company === "Arc Cycle"
                          ? { objectPosition: "center 55%" }
                          : exp.title === "Joueur professionnel de jeu vidéo"
                          ? { objectPosition: "center 55%" }
                          : undefined
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl mb-2">{exp.title}</h3>
                    <div className="text-xl text-lime-400 mb-4">
                      {exp.company}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

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
