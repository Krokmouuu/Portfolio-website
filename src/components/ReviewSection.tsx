import { ReviewCard } from "./ReviewCard";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    name: "Thomas",
    rating: 4,
    comment:
      "Benoit s'est bien intégré à l'équipe et a fait preuve d'un bon esprit d'initiative en proposant des idées intéressantes et innovantes.",
    date: "17 févr. 2025",
    project: "MNGRS.AI",
  },
  {
    name: "Adrien",
    rating: 5,
    comment:
      "Benoit a été super réactif et à l'écoute de nos besoins pour notre garage familial. Il a tout de suite compris ce qu'on attendait et nous a apporté des solutions efficaces. Son professionnalisme et sa gentillesse ont vraiment fait la différence.",
    date: "17 mars 2025",
    project: "Le Garage",
  },
  {
    name: "*********",
    rating: 4.5,
    comment:
      "Benoit a proposé un design très rapidement et nous a conseillé tout au long du projet. Une fois le site refait et le référencement mis en place, il a généré des dizaines de visites et de réservations dès le deuxième jour après sa mise en ligne.",
    date: "12 oct. 2024",
    project: "L'inattendu",
  },
  {
    name: "Utilisateur Arc Cycle",
    rating: 5,
    comment:
      "Application clean et bien travaillée, la meilleure que j'ai pu essayer dans le genre habitudes et motivations, hâte de voir la suite !",
    date: "12 déc. 2025",
    project: "Arc Cycle",
  },
  {
    name: "Julien",
    rating: 4,
    comment:
      "Benoit nous a permis de migrer notre site web sur un nouveau langage et une nouvelle plateforme. Il a été très professionnel et a su s'adapter à nos besoins.",
    date: "30 juil. 2025",
    project: "Phenix",
  },
];

export function ReviewsSection() {
  const { t } = useTranslation();
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="relative w-full py-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(126,211,33,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(126,211,33,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Geometric network background (decorative) */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#7ED321" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#BD10E0" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line
            x1="10%"
            y1="20%"
            x2="30%"
            y2="80%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <line
            x1="70%"
            y1="10%"
            x2="90%"
            y2="70%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <line
            x1="40%"
            y1="30%"
            x2="60%"
            y2="90%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Title - same style as Services / other sections */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl mb-6 font-mono">
            <span className="text-lime-400">{"<"}</span>
            <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              {t("reviews.title")}
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">
            {t("reviews.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Animated scrolling reviews - full width so gradients sit on screen edges */}
      <div className="relative w-full">
        {/* Gradient overlays at viewport edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1 * (380 + 24) * reviews.length], // 380px width + 24px gap
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
