import { motion, AnimatePresence } from "motion/react";
import {
  Triangle,
  Rocket,
  Figma,
  FileText,
  Cloud,
  Search,
  BarChart3,
  MessageSquare,
  MessageCircle,
  Users,
  PieChart,
  Flame,
} from "lucide-react";
import { useState } from "react";

const primarySkillsData = [
  { name: "React Native", color: "from-teal-300 to-cyan-400" },
  { name: "TypeScript", color: "from-blue-400 to-indigo-500" },
  { name: "React", color: "from-teal-400 to-cyan-500" },
  { name: "HTML/CSS", color: "from-red-400 to-orange-500" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-sky-500" },
  { name: "Svelte", color: "from-amber-300 to-orange-500" },
  { name: "Python", color: "from-blue-400 to-indigo-500" },
  { name: "Django", color: "from-green-400 to-lime-500" },
  { name: "C++", color: "from-cyan-400 to-sky-500" },
  { name: "C", color: "from-emerald-400 to-green-600" },
  { name: "Swift", color: "from-rose-400 to-pink-500" },
  { name: "PostgreSQL", color: "from-sky-400 to-blue-500" },
  { name: "DevOps", color: "from-lime-400 to-emerald-500" },
  { name: "JavaScript", color: "from-amber-400 to-orange-500" },
];

const secondarySkills = [
  { name: "Créativité", color: "from-pink-300 to-rose-400" },
  { name: "Résolution de problèmes", color: "from-indigo-300 to-purple-400" },
  { name: "Communication", color: "from-cyan-200 to-blue-400" },
  { name: "Optimisation", color: "from-lime-300 to-emerald-400" },
  { name: "Algorithmique", color: "from-fuchsia-300 to-purple-400" },
  { name: "Adaptabilité", color: "from-purple-200 to-fuchsia-400" },
  { name: "Travail en équipe", color: "from-green-200 to-emerald-400" },
];

const toolCategories = [
  {
    category: "DevOps",
    color: "from-lime-400 to-cyan-500",
    tools: [
      {
        name: "Vercel",
        icon: Triangle,
        color: "from-lime-400 to-cyan-500",
        colorHex: "#84F4C3",
      },
      {
        name: "Heroku",
        icon: Cloud,
        color: "from-violet-400 to-purple-500",
        colorHex: "#9F7AE0",
      },
    ],
  },
  {
    category: "Backend",
    color: "from-emerald-400 to-green-500",
    tools: [
      {
        name: "Supabase",
        icon: Rocket,
        color: "from-emerald-400 to-green-500",
        colorHex: "#22C55E",
      },
      {
        name: "Firebase",
        icon: Flame,
        color: "from-[#FFCA28] to-[#FFA000]",
        colorHex: "#FFB300",
      },
    ],
  },
  {
    category: "Design",
    color: "from-pink-400 to-rose-500",
    tools: [
      {
        name: "Figma",
        icon: Figma,
        color: "from-pink-400 to-rose-500",
        colorHex: "#F472B6",
      },
    ],
  },
  {
    category: "Analytics",
    color: "from-blue-400 to-cyan-500",
    tools: [
      {
        name: "Mixpanel",
        icon: BarChart3,
        color: "from-[#8358FF] to-[#6F4CF4]",
        colorHex: "#774DFA",
      },
      {
        name: "Sentry",
        icon: Search,
        color: "from-[#FF2D20] to-[#C51612]",
        colorHex: "#FF2D20",
      },
      {
        name: "RevenueCat",
        icon: PieChart,
        color: "from-[#6A2FF9] to-[#A566FF]",
        colorHex: "#8B49FF",
      },
    ],
  },
  {
    category: "Communication",
    color: "from-fuchsia-400 to-pink-500",
    tools: [
      {
        name: "Slack",
        icon: MessageSquare,
        color: "from-fuchsia-400 to-pink-500",
        colorHex: "#D946EF",
      },
      {
        name: "Notion",
        icon: FileText,
        color: "from-slate-400 to-gray-500",
        colorHex: "#94A3B8",
      },
      {
        name: "Discord",
        icon: MessageCircle,
        color: "from-[#5865F2] to-[#4752C4]",
        colorHex: "#5865F2",
      },
      {
        name: "Teams",
        icon: Users,
        color: "from-[#464EB8] to-[#3A3F9F]",
        colorHex: "#464EB8",
      },
    ],
  },
];

const allTools = toolCategories.flatMap((c) => c.tools);

const allCategories = [
  {
    category: "Tous",
    color: "from-lime-400 to-emerald-500",
    tools: allTools,
  },
  ...toolCategories,
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const currentTools =
    selectedCategory === "Tous"
      ? allTools
      : toolCategories.find((cat) => cat.category === selectedCategory)
          ?.tools || [];

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

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {primarySkillsData.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300`}
              />
              <div className="relative bg-black border border-white/10 rounded-lg px-6 py-3 group-hover:border-white/30 transition duration-300">
                <span className="text-white font-mono">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
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
              Skills secondaires
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">
            Compétences humaines
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {secondarySkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300`}
              />
              <div className="relative bg-black border border-white/10 rounded-lg px-6 py-3 group-hover:border-white/30 transition duration-300">
                <span className="text-white/80 font-mono">{skill.name}</span>
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

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {allCategories.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    selectedCategory === category.category
                      ? "bg-lime-400/20 border border-lime-400 text-lime-400"
                      : "bg-white/5 border border-white/10 text-white/60 hover:border-lime-400/40 hover:text-white/80"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              <AnimatePresence mode="wait">
                {currentTools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative group"
                    >
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${tool.color} rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-300`}
                      />
                      <div className="relative bg-black border border-white/10 rounded-xl p-6 text-center hover:border-white/30 transition duration-300 w-36">
                        <Icon
                          className="w-10 h-10 mx-auto mb-2"
                          stroke={tool.colorHex}
                        />
                        <div className="text-white/80 font-mono text-sm">
                          {tool.name}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
