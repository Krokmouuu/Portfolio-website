import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Filter,
  Github,
  ExternalLink,
  Apple,
} from "lucide-react";
import {
  allProjects,
  categoryLabels,
  type ProjectCategory,
} from "../data/projects";
import { ImageWithFallback } from "../components/fallback/ImageWithFallback";
import { ParticleBackground } from "../components/ParticleBackground";

const categories: (ProjectCategory | "all")[] = [
  "all",
  "web",
  "mobile",
  "game",
  "system",
  "security",
  "data",
  "devops",
];

import type { ProjectData } from "../data/projects";

function ProjectCard({
  project,
  index,
  navigate,
  t,
}: {
  project: ProjectData;
  index: number;
  navigate: (path: string) => void;
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
  const hasLinks = !!(project.github || project.live || project.apple);

  return (
    <motion.div
      key={project.slug}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative group cursor-pointer"
      onClick={() => navigate(`/projects/${project.slug}`)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative h-full overflow-hidden rounded-2xl backdrop-blur-xl bg-black/30 border border-lime-400/20 group-hover:border-lime-400/40 transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative h-48 overflow-hidden">
          {useVideo ? (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : project.image ? (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-lime-400/20 via-cyan-400/10 to-fuchsia-500/20 flex items-center justify-center">
              <span className="text-4xl font-bold text-white/20">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

          {hasLinks && (
            <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              {project.apple && (
                <a
                  href={project.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full bg-black/80 backdrop-blur-sm border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-colors"
                >
                  <Apple size={16} />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="relative p-5">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {t(`projects.${project.descriptionKey}.short`, t(`projects.${project.descriptionKey}.description`))}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-gradient-to-r from-lime-400/15 to-cyan-400/15 text-lime-400 border border-lime-400/20 text-xs"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 rounded-full bg-white/5 text-gray-500 text-xs">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-lime-400/10 to-transparent transform translate-x-6 -translate-y-6 rotate-45" />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );
  const [filterOpen, setFilterOpen] = useState(false);
  const lang = i18n.language === "fr" ? "fr" : "en";

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(activeFilter));

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-lime-400/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-mono text-sm">
                {lang === "fr" ? "Retour" : "Back"}
              </span>
            </Link>

            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-lime-400/30 text-lime-400 hover:bg-lime-400/10 transition-all md:hidden"
              >
                <Filter size={16} />
                <span className="text-sm">
                  {categoryLabels[activeFilter][lang]}
                </span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                      activeFilter === cat
                        ? "bg-gradient-to-r from-lime-400 to-cyan-400 text-black"
                        : "border border-white/10 text-gray-400 hover:border-lime-400/30 hover:text-lime-400"
                    }`}
                  >
                    {categoryLabels[cat][lang]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden md:hidden border-t border-lime-400/10"
              >
                <div className="flex flex-wrap gap-2 px-4 py-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveFilter(cat);
                        setFilterOpen(false);
                      }}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        activeFilter === cat
                          ? "bg-gradient-to-r from-lime-400 to-cyan-400 text-black"
                          : "border border-white/10 text-gray-400 hover:border-lime-400/30 hover:text-lime-400"
                      }`}
                    >
                      {categoryLabels[cat][lang]}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span
                style={{
                  background: "linear-gradient(135deg, #a3e635, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("projects.title")}
              </span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          >
            {lang === "fr"
              ? `${filteredProjects.length} projet${filteredProjects.length > 1 ? "s" : ""}`
              : `${filteredProjects.length} project${filteredProjects.length > 1 ? "s" : ""}`}
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-24">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  navigate={navigate}
                  t={t}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
