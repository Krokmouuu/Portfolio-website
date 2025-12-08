import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Arc Cycle",
    description:
      "Arc Cycle est une application mobile React Native conçue pour vous aider à développer votre discipline personnelle à travers un système de cycles (arcs) progressifs, de défis quotidiens et de suivi d'habitudes.",
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
  },
  {
    title: "L'inattendu",
    description:
      "Site pour une Loveroom avec gestion de réservations avec un système automatisé d'envoi d'emails. Conçue pour simplifier la réservation d'espaces, elle offre une expérience utilisateur fluide avec notifications en temps réel et confirmations automatiques par email.",
    image: "assets/l'inattendu.png",
    tags: ["TypeScript", "React", "TailwindCSS"],
    featured: false,
    github: "https://github.com/Krokmouuu/Linattendu",
    live: "https://www.linattendu-love-room.fr/",
  },
  {
    title: "Bouncing Balls",
    description:
      "Vous connaissez ces balles rebondissantes qui envahissent TikTok et qui rendent les gens accros ? Eh bien, j'ai décidé de recréer ce petit phénomène en un week-end. Résultat : des heures perdues à regarder des balles rebondir, mais au moins c'est moi qui les ai codées ! Peut-être qu'on ira plus loin... ou peut-être pas, qui sait ?",
    image: "assets/bouncing-balls.png",
    tags: ["Python", "Pygame", "Algorithme", "Physique", "Animation", "Fun"],
    featured: false,
    github: "https://github.com/Krokmouuu/bouncing-balls",
    live: "https://www.tiktok.com/discover/can-the-ball-escape-game",
  },
  {
    title: "Apprendre",
    description:
      "J'adore apprendre : j'ai testé la data analyse, des jeux 2D, 3D, et tout ce qui me tombe sous la main. Fouillez mon GitHub, même si 90 % de mes projets sont en privé ou sous licence, il reste quelques pépites de mes débuts à explorer.",
    image:"assets/wallpaper2.jpeg",
    tags: ["C", "C++", "JavaScript", "HTML", "CSS", "Typescript", "React", "Assembleur", "Cybersecurity", "Data Analysis", "Game Development", "Web Development"],
    featured: false,
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4">
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
              Mes projets
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-lime-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
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
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={
                      project.title === "Arc Cycle"
                        ? {
                            objectPosition: "center 55%",
                          }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
                  </div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-2xl mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

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
          ))}
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
