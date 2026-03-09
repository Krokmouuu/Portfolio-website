import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Apple,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { allProjects, categoryLabels } from "../data/projects";
import { ImageWithFallback } from "../components/fallback/ImageWithFallback";
import { HeartBackground } from "../components/HeartBackground";
import { useRef, useState } from "react";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language === "fr" ? "fr" : "en";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  const projectIndex = allProjects.findIndex((p) => p.slug === slug);
  const project = allProjects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-lime-400">404</h1>
          <p className="text-gray-400 mb-8">
            {lang === "fr" ? "Projet introuvable" : "Project not found"}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lime-400 text-lime-400 hover:bg-lime-400/10 transition-all"
          >
            <ArrowLeft size={18} />
            {lang === "fr" ? "Retour aux projets" : "Back to projects"}
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? allProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < allProjects.length - 1
      ? allProjects[projectIndex + 1]
      : null;

  const hasLinks = !!(project.github || project.live || project.apple);
  const useVideo = project.video && !videoError;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {project.slug === "linattendu" ? (
        <HeartBackground />
      ) : (
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative z-10">
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-lime-400/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/projects"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-mono text-sm">
                {lang === "fr" ? "Tous les projets" : "All projects"}
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {prevProject && (
                <button
                  onClick={() => navigate(`/projects/${prevProject.slug}`)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-lime-400/30 hover:text-lime-400 transition-all text-sm"
                >
                  <ChevronLeft size={14} />
                  <span className="hidden sm:inline">{prevProject.title}</span>
                </button>
              )}
              {nextProject && (
                <button
                  onClick={() => navigate(`/projects/${nextProject.slug}`)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-lime-400/30 hover:text-lime-400 transition-all text-sm"
                >
                  <span className="hidden sm:inline">{nextProject.title}</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        </header>

        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          {useVideo ? (
            <video
              ref={videoRef}
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover"
            />
          ) : project.image ? (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-lime-400/20 via-cyan-400/10 to-fuchsia-500/20 flex items-center justify-center">
              <span className="text-8xl font-bold text-white/10">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <h1 className="text-4xl md:text-6xl font-bold">
                  {project.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-sm"
              >
                {categoryLabels[cat][lang]}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-lime-400">
              {lang === "fr" ? "Description" : "Description"}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t(`projects.${project.descriptionKey}.description`)}
            </p>
          </motion.div>

          {project.sections?.map((section, i) => {
            const sectionTitle = t(
              `projects.${project.descriptionKey}.${section.key}_title`
            );
            const rawItems = t(
              `projects.${project.descriptionKey}.${section.key}_items`
            );
            const items = rawItems.split("|");

            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-5 text-lime-400 flex items-center gap-3">
                  <span>{section.icon}</span>
                  {sectionTitle}
                </h2>
                <div className="grid gap-3">
                  {items.map((item) => {
                    const dashIndex = item.indexOf("—");
                    const hasLabel = dashIndex > -1;
                    const label = hasLabel
                      ? item.slice(0, dashIndex).trim()
                      : null;
                    const text = hasLabel
                      ? item.slice(dashIndex + 1).trim()
                      : item.trim();

                    return (
                      <div
                        key={item}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-lime-400/20 transition-colors"
                      >
                        {label ? (
                          <>
                            <span className="text-white font-semibold">
                              {label}
                            </span>
                            <span className="text-gray-400"> — {text}</span>
                          </>
                        ) : (
                          <span className="text-gray-300">{text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + (project.sections?.length ?? 0) * 0.1,
            }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-lime-400">
              {lang === "fr" ? "Technologies" : "Technologies"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-lime-400/15 to-cyan-400/15 text-lime-400 border border-lime-400/20 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {hasLinks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4 text-lime-400">
                {lang === "fr" ? "Liens" : "Links"}
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-lime-400/40 hover:bg-lime-400/5 transition-all group"
                  >
                    <Github
                      size={20}
                      className="text-gray-400 group-hover:text-lime-400 transition-colors"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-lime-400/40 hover:bg-lime-400/5 transition-all group"
                  >
                    <ExternalLink
                      size={20}
                      className="text-gray-400 group-hover:text-lime-400 transition-colors"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {lang === "fr" ? "Voir le site" : "View site"}
                    </span>
                  </a>
                )}
                {project.apple && (
                  <a
                    href={project.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-lime-400/40 hover:bg-lime-400/5 transition-all group"
                  >
                    <Apple
                      size={20}
                      className="text-gray-400 group-hover:text-lime-400 transition-colors"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      App Store
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between pt-8 border-t border-lime-400/10"
          >
            {prevProject ? (
              <button
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
              >
                <ChevronLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <div className="text-left">
                  <div className="text-xs text-gray-500">
                    {lang === "fr" ? "Précédent" : "Previous"}
                  </div>
                  <div className="font-medium">{prevProject.title}</div>
                </div>
              </button>
            ) : (
              <div />
            )}
            {nextProject ? (
              <button
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-500">
                    {lang === "fr" ? "Suivant" : "Next"}
                  </div>
                  <div className="font-medium">{nextProject.title}</div>
                </div>
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
