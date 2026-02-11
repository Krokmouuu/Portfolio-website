import { motion } from "motion/react";
import { Apple, ExternalLink, Github, Star } from "lucide-react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

interface Project {
  title?: string;
  titleKey?: string;
  descriptionKey: string;
  image?: string;
  video?: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  live?: string;
  apple?: string;
}

function ProjectCard({
  project,
  projectTitle,
  index,
  hasLinks,
  t,
}: {
  project: Project;
  projectTitle: string;
  index: number;
  hasLinks: boolean;
  t: (key: string) => string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !videoError) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const useVideo = project.video && !videoError;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.featured && (
        <motion.div
          initial={{ rotate: -45, scale: 0 }}
          whileInView={{ rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.5 }}
          className="absolute -top-4 -right-4 z-20"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-yellow-400 opacity-75" />
            <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 border-4 border-black">
              <Star className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        whileHover={{ y: -10 }}
        className="relative h-full overflow-hidden rounded-2xl backdrop-blur-xl bg-black/30 border border-lime-400/20 group-hover:border-lime-400/40 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative h-64 overflow-hidden">
          {useVideo ? (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={{
                objectPosition:
                  project.title === "Bleroy's Life"
                    ? "center 40%"
                    : "center 70%",
              }}
            />
          ) : (
            <ImageWithFallback
              src={project.image || ""}
              alt={projectTitle}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              style={
                project.title === "Arc Cycle"
                  ? { objectPosition: "center 55%" }
                  : project.title === "Street Shop"
                  ? { objectPosition: "center 0%" }
                  : project.title === "Bleroy's Life"
                  ? { objectPosition: "center 40%" }
                  : undefined
              }
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {hasLinks && (
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <ExternalLink size={24} />
                </motion.a>
              )}
              {project.apple && (
                <motion.a
                  href={project.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <Apple size={24} />
                </motion.a>
              )}
            </div>
          )}
        </div>

        <div className="relative p-6">
          <h3 className="text-2xl mb-3">{projectTitle}</h3>
          <p className="text-gray-300 mb-4">
            {t(`projects.${project.descriptionKey}.description`)}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gradient-to-r from-lime-400/20 to-cyan-400/20 text-lime-400 border border-lime-400/30 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-lime-400/20 to-transparent transform translate-x-8 -translate-y-8 rotate-45" />
      </motion.div>
    </motion.div>
  );
}

const projectsData: Project[] = [
  {
    title: "Arc Cycle",
    descriptionKey: "arcCycle",
    image: "assets/arc-cycle-project.png",
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
    featured: true,
    github: "https://github.com/Krokmouuu/ArcCycle-Frontend",
    live: "https://arc-cycle.app/",
    apple:
      "https://apps.apple.com/us/app/arc-cycle-build-discipline/id6755734026",
  },
  {
    title: "EstateUp {Work in Progress}",
    descriptionKey: "estateUp",
    video: "assets/placeholder.mp4",
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
    featured: true,
  },
  {
    title: "Bleroy's Life",
    descriptionKey: "bleroy's life",
    image: "assets/l'inattendu.png",
    video: "assets/bleroylife2.mp4",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Radix UI"],
    featured: false,
    github: "https://github.com/Krokmouuu/Bleroy-s-Life",
    live: "https://bleroy-s-life.vercel.app/",
  },
  {
    title: "L'inattendu",
    descriptionKey: "linattendu",
    image: "assets/l'inattendu.png",
    tags: ["TypeScript", "React", "TailwindCSS", "Vercel", "Vite"],
    featured: false,
    github: "https://github.com/Krokmouuu/Linattendu",
    live: "https://www.linattendu-love-room.fr/",
  },
  {
    title: "Aquapro",
    descriptionKey: "aquapro",
    image: "assets/aquapro.png",
    tags: ["TypeScript", "React", "TailwindCSS", "Vercel", "Vite"],
    featured: false,
    github: "https://github.com/Krokmouuu/aquapro",
    live: "https://aquapro-psi.vercel.app/",
  },
  {
    title: "Street Shop",
    descriptionKey: "streetshop",
    image: "assets/streetshop.png",
    tags: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Vercel",
      "Vite",
      "PostgreSQL",
      "Stripe",
      "Authentification",
      "Node.js",
      "Express",
      "Docker",
    ],
    featured: false,
    github: "https://github.com/Krokmouuu/StreetShop",
    live: "https://street-shop-alpha.vercel.app/",
  },
  {
    title: "Bouncing Balls",
    descriptionKey: "bouncingBalls",
    image: "assets/bouncing-balls.png",
    tags: ["Python", "Pygame", "Algorithme", "Physique", "Animation", "Fun"],
    featured: false,
    github: "https://github.com/Krokmouuu/bouncing-balls",
    live: "https://www.tiktok.com/discover/can-the-ball-escape-game",
  },
  {
    titleKey: "learning",
    descriptionKey: "learning",
    image: "assets/wallpaper2.jpeg",
    tags: [
      "C",
      "C++",
      "JavaScript",
      "HTML",
      "CSS",
      "Typescript",
      "React",
      "Assembleur",
      "Cybersecurity",
      "Data Analysis",
      "Game Development",
      "Web Development",
    ],
    featured: false,
    github: "https://github.com/Krokmouuu",
    live: "#",
  },
];

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id="mes projets" className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
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
              {t("projects.title")}
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const projectTitle = project.titleKey ? t(`projects.${project.titleKey}.title`) : project.title;
            const hasLinks = !!(project.github || project.live || project.apple);
            
            return (
              <ProjectCard
                key={projectTitle}
                project={project}
                projectTitle={projectTitle || ""}
                index={index}
                hasLinks={hasLinks}
                t={t}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          {/* <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full border-2 border-lime-400 text-lime-400 hover:bg-lime-400/10 transition-all"
          >
            View All Projects
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
}
