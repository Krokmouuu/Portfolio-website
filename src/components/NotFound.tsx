import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ParticleBackground } from "./ParticleBackground";
import { Button } from "./ui/button";

const capybaraImages = [
  "/assets/capybara.png",
  "/assets/capybara-astronaute.png",
  "/assets/capybara-alien.png",
];

const generateCapybaraConfig = (
  screenWidth: number,
  screenHeight: number,
  capybaraSize: number
) => {
  const offset = capybaraSize;
  let startX: number;
  let startY: number;
  let startSide: number;

  const sideRandom = Math.random();
  if (sideRandom < 0.25) {
    startSide = 0;
    startX = -offset;
    startY = Math.random() * screenHeight;
  } else if (sideRandom < 0.5) {
    startSide = 1;
    startX = screenWidth + offset;
    startY = Math.random() * screenHeight;
  } else if (sideRandom < 0.75) {
    startSide = 2;
    startX = Math.random() * screenWidth;
    startY = -offset;
  } else {
    startSide = 3;
    startX = Math.random() * screenWidth;
    startY = screenHeight + offset;
  }

  let endX: number;
  let endY: number;
  const possibleSides = [0, 1, 2, 3].filter((side) => side !== startSide);
  const endSide =
    possibleSides[Math.floor(Math.random() * possibleSides.length)];

  if (endSide === 0) {
    endX = -offset;
    endY = Math.random() * screenHeight;
  } else if (endSide === 1) {
    endX = screenWidth + offset;
    endY = Math.random() * screenHeight;
  } else if (endSide === 2) {
    endX = Math.random() * screenWidth;
    endY = -offset;
  } else {
    endX = Math.random() * screenWidth;
    endY = screenHeight + offset;
  }

  const directionX =
    endSide === 1 ? 1 : endSide === 0 ? -1 : Math.random() > 0.5 ? 1 : -1;
  const directionY =
    endSide === 3 ? 1 : endSide === 2 ? -1 : Math.random() > 0.5 ? 1 : -1;

  const rotationSpeed = Math.random() * 15 + 10;
  const travelSpeed = Math.random() * 8 + 12;
  const delay = 0;

  return {
    startX: `${startX}px`,
    startY: `${startY}px`,
    endX: `${endX}px`,
    endY: `${endY}px`,
    rotationSpeed,
    travelSpeed,
    delay,
    directionX,
    directionY,
    key: Math.random(),
  };
};

function FloatingCapybara({ src, index }: { src: string; index: number }) {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [capybaraSize, setCapybaraSize] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateSizes = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      let size = 128;
      if (window.innerWidth >= 1024) {
        size = 256;
      } else if (window.innerWidth >= 768) {
        size = 192;
      }
      setCapybaraSize(size);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const [config, setConfig] = useState<ReturnType<
    typeof generateCapybaraConfig
  > | null>(null);
  const [animationKey, setAnimationKey] = useState(0);
  const completedAnimations = useRef(new Set<string>());
  const activeConfigRef = useRef<ReturnType<
    typeof generateCapybaraConfig
  > | null>(null);

  useEffect(() => {
    if (screenSize.width > 0 && capybaraSize > 0) {
      const newConfig = generateCapybaraConfig(
        screenSize.width,
        screenSize.height,
        capybaraSize
      );
      setConfig(newConfig);
      activeConfigRef.current = newConfig;
    }
  }, [screenSize.width, screenSize.height, capybaraSize]);

  useEffect(() => {
    if (config) {
      activeConfigRef.current = config;
      completedAnimations.current.clear();
    }
  }, [animationKey]);

  useEffect(() => {
    if (config) {
      activeConfigRef.current = config;
    }
  }, [config]);

  const generateNewAnimation = useRef(() => {
    if (screenSize.width > 0 && capybaraSize > 0) {
      const newConfig = generateCapybaraConfig(
        screenSize.width,
        screenSize.height,
        capybaraSize
      );
      setConfig(newConfig);
      setAnimationKey((prev) => prev + 1);
    }
  });

  useEffect(() => {
    generateNewAnimation.current = () => {
      if (screenSize.width > 0 && capybaraSize > 0) {
        const newConfig = generateCapybaraConfig(
          screenSize.width,
          screenSize.height,
          capybaraSize
        );
        setConfig(newConfig);
        setAnimationKey((prev) => prev + 1);
      }
    };
  }, [screenSize.width, screenSize.height, capybaraSize]);

  const handleAnimationComplete = (definition: string) => {
    if (definition === "x" || definition === "y") {
      completedAnimations.current.add(definition);

      if (completedAnimations.current.size === 2) {
        generateNewAnimation.current();
      }
    }
  };

  const activeConfig = activeConfigRef.current;
  useEffect(() => {
    if (!activeConfig) return;

    const totalDuration =
      (activeConfig.travelSpeed + activeConfig.delay) * 1000;
    const safetyTimer = setTimeout(() => {
      if (completedAnimations.current.size < 2) {
        generateNewAnimation.current();
      }
    }, totalDuration + 500);

    return () => clearTimeout(safetyTimer);
  }, [animationKey, activeConfig]);

  if (!activeConfig) {
    return null;
  }

  return (
    <motion.img
      ref={imgRef}
      key={animationKey}
      src={src}
      alt={`Capybara ${index + 1}`}
      className="absolute w-32 md:w-48 lg:w-64 opacity-30 pointer-events-none"
      initial={{
        x: activeConfig.startX,
        y: activeConfig.startY,
        rotate: 0,
        scale: 1,
        opacity: 0.3,
      }}
      animate={{
        x: activeConfig.endX,
        y: activeConfig.endY,
        rotate: 360 * (activeConfig.directionX === 1 ? 1 : -1),
        scale: [1, 1, 0],
        opacity: [0.5, 0.5, 0],
      }}
      onAnimationComplete={handleAnimationComplete}
      transition={{
        x: {
          duration: activeConfig.travelSpeed,
          ease: "linear",
          delay: activeConfig.delay,
        },
        y: {
          duration: activeConfig.travelSpeed,
          ease: "linear",
          delay: activeConfig.delay,
        },
        rotate: {
          duration: activeConfig.rotationSpeed,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: activeConfig.travelSpeed * 0.3,
          ease: "easeIn",
          delay: activeConfig.delay + activeConfig.travelSpeed * 0.7,
        },
        opacity: {
          duration: activeConfig.travelSpeed * 0.3,
          ease: "easeIn",
          delay: activeConfig.delay + activeConfig.travelSpeed * 0.7,
        },
      }}
      style={{
        willChange: "transform",
      }}
    />
  );
}

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <ParticleBackground />

      {capybaraImages.map((src, index) => (
        <FloatingCapybara key={index} src={src} index={index} />
      ))}

      <div className="relative z-10 text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          {"<404 />"}
        </h1>

        <p className="text-2xl md:text-3xl mb-8 mt-6 text-white/90 font-mono">
          Vous vous êtes perdu dans le web..
        </p>

        <Button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-lime-400 text-black rounded-lg hover:bg-lime-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.5)] font-mono text-lg"
        >
          Revenir en lieu sûr
        </Button>
      </div>
    </div>
  );
}
