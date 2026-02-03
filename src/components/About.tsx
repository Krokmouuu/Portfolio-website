import { motion } from "motion/react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Terminal, Zap, Trophy } from "lucide-react";
const japanImage = "/assets/about-image.jpg";

const stats = [
  { icon: Terminal, value: "14", label: "Projets réalisés" },
  { icon: Zap, value: "3", label: "Années d'expérience" },
  { icon: Trophy, value: "14", label: "Clients satisfaits" },
];

export function About() {
  return (
    <section id="à propos" className="py-20 px-4">
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
              À propos
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <ImageWithFallback
                src={japanImage}
                alt="Developer workspace"
                className="relative rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-white/70 mb-6 leading-relaxed font-mono">
              <span className="text-lime-400">const</span> developer = {"{"}{" "}
              <br />
              <span className="ml-4 text-cyan-400">name:</span>{" "}
              <span className="text-fuchsia-400">&quot;Leroy Benoit&quot;</span>
              ,<br />
              <span className="ml-4 text-cyan-400">passion:</span>{" "}
              <span className="text-fuchsia-400">&quot;code&quot;</span>,<br />
              <span className="ml-4 text-cyan-400">mission:</span>{" "}
              <span className="text-fuchsia-400">&quot;innovation&quot;</span>,
              <br />
              <span className="ml-4 text-cyan-400">goal:</span>{" "}
              <span className="text-fuchsia-400">&quot;excellence&quot;</span>
              <br />
              {"}"};
            </p>
            <p className="text-white/60 mb-6 leading-relaxed">
              Développeur Full-Stack passionné avec une expertise dans la
              création d&apos;applications web et mobiles modernes. Je
              transforme des concepts complexes en solutions digitales élégantes
              et performantes.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-lime-400/10 border border-lime-400/30 rounded-lg">
                <span className="text-lime-400 font-mono">React</span>
              </div>
              <div className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                <span className="text-cyan-400 font-mono">Full-Stack</span>
              </div>
              <div className="px-4 py-2 bg-fuchsia-400/10 border border-fuchsia-400/30 rounded-lg">
                <span className="text-fuchsia-400 font-mono">Mobile Dev</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              <div className="relative bg-black border border-lime-400/30 rounded-2xl p-8 text-center">
                <stat.icon className="mx-auto mb-4 text-lime-400" size={48} />
                <div className="text-5xl mb-2 bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 font-mono">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
