import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative pt-20">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #a3e635 1px, transparent 1px),
            linear-gradient(to bottom, #a3e635 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-6xl relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="text-lime-400" size={24} />
          <span className="text-lime-400 font-mono text-sm tracking-wider">
            FULL-STACK DEVELOPER
          </span>
          <Sparkles className="text-lime-400" size={24} />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-9xl mb-6 relative"
        >
          <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            CODE
          </span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
            CREATE
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-lime-400 to-fuchsia-500 bg-clip-text text-transparent">
            INNOVATE
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto font-mono"
        >
          <span className="text-lime-400">{"{"}</span> Transformant des idées en
          expériences digitales exceptionnelles{" "}
          <span className="text-cyan-400">{"}"}</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("mes projets");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="group relative px-8 py-4 bg-lime-400 text-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] cursor-pointer"
          >
            <span className="relative z-10 font-mono">Voir mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-lg hover:bg-lime-400 hover:text-black transition-all duration-300 font-mono"
          >
            Me contacter
          </a>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          {"</>"}
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 text-6xl opacity-20"
        >
          {"{}"}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-lime-400" size={32} />
      </motion.div>
    </section>
  );
}
