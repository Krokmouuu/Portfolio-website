import { motion } from "motion/react";
import { Github, Linkedin, Mail, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Krokmouuu",
    color: "from-lime-400 to-cyan-400",
    handle: "@Krokmouuu",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/benoit-leroy-35b07828a/",
    color: "from-cyan-400 to-fuchsia-400",
    handle: "/in/benoit-leroy-35b07828a",
  },
  {
    name: "Malt",
    icon: Briefcase,
    url: "https://www.malt.fr/profile/benoitleroy",
    color: "from-fuchsia-400 to-pink-400",
    handle: "@benoitleroy",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@bleroy.dev",
    color: "from-pink-400 to-orange-400",
    handle: "contact@bleroy.dev",
  },
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4">
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
              {t("contact.title")}
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full md:w-2/3"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-cyan-400 rounded-2xl blur opacity-20" />
            <div className="relative bg-black border border-lime-400/30 rounded-2xl p-8 text-center">
              <h3 className="text-3xl mb-6 text-lime-400 font-mono">
                {t("contact.getInTouch")}
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {t("contact.description")}
              </p>
              <div className="flex items-center justify-center gap-2 text-lime-400 font-mono text-sm">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                {t("contact.available")}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${link.color} rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000`}
              />
              <div className="relative bg-black border border-lime-400/20 rounded-xl p-6 text-center">
                <div
                  className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}
                >
                  <link.icon size={24} className="text-black" />
                </div>
                <h3 className="text-white mb-1 font-mono">{link.name}</h3>
                <p className="text-xs text-white/40 font-mono">{link.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
