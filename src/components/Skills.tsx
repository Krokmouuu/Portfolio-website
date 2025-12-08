import { motion } from "motion/react";

const skillsData = [
  { name: "JavaScript", level: 60, color: "from-amber-400 to-orange-500" },
  { name: "C", level: 75, color: "from-emerald-400 to-green-600" },
  { name: "C++", level: 80, color: "from-cyan-400 to-sky-500" },
  { name: "Python", level: 85, color: "from-blue-400 to-indigo-500" },
  { name: "React", level: 95, color: "from-teal-400 to-cyan-500" },
  { name: "Swift", level: 80, color: "from-rose-400 to-pink-500" },
  { name: "PostgreSQL", level: 85, color: "from-sky-400 to-blue-500" },
  { name: "Svelte", level: 70, color: "from-amber-300 to-orange-500" },
  { name: "Algorithmique", level: 80, color: "from-fuchsia-400 to-purple-500" },
  { name: "Optimisation", level: 80, color: "from-lime-400 to-emerald-500" },
  { name: "Creativity", level: 120, color: "from-pink-400 to-rose-500" },
  {
    name: "Problem Solving",
    level: 90,
    color: "from-indigo-400 to-purple-500",
  },
  { name: "Teamwork", level: 70, color: "from-green-300 to-emerald-500" },
  { name: "Communication", level: 100, color: "from-cyan-300 to-blue-500" },
  { name: "Adaptability", level: 90, color: "from-purple-300 to-fuchsia-500" },
];

const tools = [
  { name: "Vercel", icon: "▲" },
  { name: "Supabase", icon: "🚀" },
  { name: "Figma", icon: "🎨" },
  { name: "Notion", icon: "📝" },
  { name: "Heroku", icon: "☁️" },
  { name: "Sentry", icon: "🔍" },
  { name: "Mixpanel", icon: "📊" },
  { name: "Slack", icon: "💬" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl mb-6 font-mono">
            <span className="text-lime-400">{"<"}</span>
            <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Skills
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">
            Technologies que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500`}
              />
              <div className="relative bg-black border border-lime-400/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-mono text-lg">
                    {skill.name}
                  </span>
                  <span className="text-lime-400 font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.min(skill.level, 100)}%`,
                    }}
                    transition={
                      skill.level >= 100
                        ? {
                            width: { delay: index * 0.05 + 0.3, duration: 1 },
                            backgroundPosition: {
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 4,
                              ease: "linear",
                            },
                          }
                        : { delay: index * 0.05 + 0.3, duration: 1 }
                    }
                    viewport={{ once: true }}
                    className={`h-full ${
                      skill.level >= 100
                        ? ""
                        : `bg-gradient-to-r ${skill.color}`
                    }`}
                    style={
                      skill.level >= 100
                        ? {
                            background:
                              "linear-gradient(90deg, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899, #f97316)",
                            backgroundSize: "300% 100%",
                          }
                        : undefined
                    }
                    animate={
                      skill.level >= 100
                        ? { backgroundPosition: ["0% 50%", "200% 50%"] }
                        : undefined
                    }
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 rounded-2xl blur opacity-20" />
          <div className="relative bg-black border border-lime-400/30 rounded-2xl p-8">
            <h3 className="text-3xl mb-8 text-center font-mono text-lime-400">
              Outils & Plateformes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-white/5 border border-lime-400/20 rounded-xl p-6 text-center hover:border-lime-400/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <div className="text-white/80 font-mono text-sm">
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
