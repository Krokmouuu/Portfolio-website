import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" || target.tagName === "A") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed w-4 h-4 bg-lime-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
