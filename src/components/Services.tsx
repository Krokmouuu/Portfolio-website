import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Smartphone, Cloud, Palette, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description:
      "Applications web modernes et performantes avec React, TypeScript et Node.js",
    image:
      "https://images.unsplash.com/photo-1624225322963-a453470735c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NjUwNTYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-lime-400 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Applications Mobile",
    description: "Apps iOS et Android natives avec Swift et React Native",
    image:
      "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudCUyMGFwcHxlbnwxfHx8fDE3NjUwODczMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-cyan-400 to-fuchsia-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Infrastructure cloud scalable avec AWS, Vercel et Supabase",
    image:
      "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjB0ZWNobm9sb2d5JTIwZGF0YXxlbnwxfHx8fDE3NjUwODczMDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-fuchsia-400 to-pink-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces élégantes et intuitives avec Figma",
    image:
      "https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Nlc3MlMjBkZXNpZ258ZW58MXx8fHwxNzY1MDg3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-pink-400 to-orange-400",
  },
  {
    icon: Database,
    title: "Base de Données",
    description: "Architecture et optimisation PostgreSQL, MongoDB",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzY1MDI2OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-orange-400 to-yellow-400",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation et amélioration des performances",
    image: "assets/optimized.png",
    color: "from-yellow-400 to-lime-400",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
              Services
            </span>
            <span className="text-cyan-400">{" />"}</span>
          </h2>
          <p className="text-xl text-white/60 font-mono">
            Ce que je peux faire pour vous
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000`}
              />

              <div className="relative bg-black border border-lime-400/20 rounded-2xl overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={
                      service.title === "Performance"
                        ? {
                            objectPosition: "center 60%",
                            transform: "scale(2)",
                          }
                        : undefined
                    }
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent`}
                  />
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}
                  >
                    <service.icon size={24} className="text-black" />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-mono`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
